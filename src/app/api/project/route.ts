import Project from "../(models)/projects.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";
import projectValidationSchema from "@/validation/project.validation";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const projectData = body.formData;
      await projectValidationSchema.validate(projectData);
      const newProject = await Project.create(projectData);
      console.log(projectData,newProject,"{}{}[]")
      return NextResponse.json(
        { message: "Project created successfully!" , newProject },
        { status: 200 }
      );
    } catch (err) {
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }

export async function GET(req: any) {
    try {
      const projects = await Project.find();
      return NextResponse.json(projects, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    