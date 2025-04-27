"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { StyledHighlight } from "@/components/styled-hightlight";
import { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/message/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      const result = await response.json();
      console.log("Form submitted successfully:", result);
      setFormData({ name: "", email: "", phoneNumber: "", message: "" });
      setSuccessMessage(
        "Thank you for your message. We'll get back to you soon!"
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage(
        "There was an error submitting your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">
          Send us a <StyledHighlight>message</StyledHighlight>
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input
              id="name"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phoneNumber" className="text-sm font-medium">
              Phone Number
            </label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Your phoneNumber number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Describe your project requirements..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              minLength={5}
              maxLength={2000}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#D41830] text-white hover:bg-[#B01528]"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {errorMessage && (
          <div className="text-red-500 mt-4">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 mt-4">{successMessage}</div>
        )}
      </CardContent>
    </Card>
  );
}
