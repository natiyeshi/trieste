import React from "react";
import AdminNav from "../_components/AdminNav";
import Addproject from "./_components/AddProject";
import Project from "./_components/Project";
import Projects from "./_components/Projects";
import { IProject } from "@/interfaces/project.interface";

const Page = async () => {
  let projects: IProject[] = [];
  projects = await getProjects();
  return (
    <div className="w-full px-6 pt-2 h-full overflow-auto pb-12">
      <AdminNav />
      <Projects initialProjects={projects} />
    </div>
  );
};

async function getProjects(): Promise<IProject[]> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/project`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const projects: IProject[] = await res.json();
    return projects;
  } catch (error) {
    return [];
  }
}

export default Page;
