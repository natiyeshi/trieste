"use client";

import { useState } from "react";
import { IProject } from "@/interfaces/project.interface";
import AddProject from "./AddProject";
import Project from "./Project";
import { useToast } from "@/hooks/use-toast";

interface Props {
  initialProjects: IProject[];
}

const Projects = ({ initialProjects }: Props) => {
  const [projects, setProjects] = useState<IProject[]>(initialProjects);

  const { toast } = useToast();
  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/project/${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        setProjects((test) => test.filter((data) => data._id != id));
        return true;
      }
      toast({
        description: "Error deleting project ",
      });
    } catch (error) {
      toast({
        description: "Error deleting project ",
      });
    }
    return false;
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="text-2xl font-black">Projects</div>
        <AddProject setProjects={setProjects} />
      </div>
      <div className=" text-adminText capitalize">Available Projects</div>
      <div className="grid grid-cols-3 mt-8 gap-5 ">
        {projects.map((project) => (
          <Project
            key={project._id}
            project={project}
            onDelete={() => handleDelete(project._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
