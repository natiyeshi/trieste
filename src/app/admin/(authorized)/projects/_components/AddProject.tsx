"use client";

import React, { useState, useRef } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoMdAddCircle } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { CiImageOn } from "react-icons/ci";
import Image from "next/image";
import { uploadImage } from "@/utils/helper";
import { useToast } from "@/hooks/use-toast";
import { IProject } from "@/interfaces/project.interface";
import projectValidationSchema from "@/validation/project.validation";

const Addproject = ({ setProjects }: { setProjects: Function }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const { toast } = useToast();

  const handleSubmit = async () => {
    try {
      await projectValidationSchema.validate({
        name,
        desc,
        isFeatured,
      });

      setLoading(true);
      const { url, error: e } = await uploadImage(image);
      if (e) {
        setLoading(false);
        return alert("Unable to upload image!");
      }

      const res = await fetch("/api/project", {
        method: "POST",
        body: JSON.stringify({ formData: { name, desc, image: url, isFeatured } }),
      });

      if (!res.ok) {
        const response = await res.json();
        setError(response.message);
      } else {
        const response = await res.json();
        setProjects((prev: IProject[]) => [...prev, response.newProject]);
        setError(null);
        setIsOpen(false);
        toast({
          description: "Project Added Successfully",
        });
      }
    } catch (validationError: any) {
      setError(validationError.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className="flex cursor-pointer gap-2 items-center font-semibold duration-200 hover:bg-gray-200 rounded-xl px-2">
        <IoMdAddCircle />
        <div>Add Project</div>
      </AlertDialogTrigger>
      <AlertDialogContent className="min-w-[600px] overflow-auto h-[97vh]">
        <form onSubmit={(e) => e.preventDefault()}>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex justify-between items-center border-b pb-2">
              <div>Add Project</div>
              <IoCloseSharp
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </AlertDialogTitle>
            <AlertDialogDescription className="flex flex-col w-full pb-14 pt-5">
              <div className="flex flex-col gap-2 w-full">
                <div>Name</div>
                <Input
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <div className="mb-2 mt-4">Description</div>
                <Input
                  placeholder="Description"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                <div className="flex gap-2 mt-4 items-center">
                  <div className="  ">Featured</div>
                  <Input
                    className=" h-fit w-[1rem] px-3"
                    type="checkbox"
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(d => !d)}
                  />
                </div>

                <input
                  ref={fileInputRef}
                  hidden
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview ? (
                  <div className="mt-4">
                    <Image
                      src={imagePreview}
                      width={100}
                      height={100}
                      alt="Selected"
                      className="w-40 h-40 object-cover mx-auto"
                    />
                  </div>
                ) : (
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full flex mx-2 my-2 cursor-pointer hover:bg-gray-300 duration-200 rounded border py-12 border-dashed h-full"
                  >
                    <div className="flex flex-col m-auto">
                      <CiImageOn className="text-[70px] mx-auto" />
                      <div className="text-sm mx-auto">Upload Image</div>
                    </div>
                  </div>
                )}
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            {imagePreview && (
              <Button
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
              >
                Change Image
              </Button>
            )}
            <Button
              disabled={!imagePreview || loading}
              type="submit"
              onClick={handleSubmit}
            >
              Upload
            </Button>
          </AlertDialogFooter>
        </form>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Addproject;
