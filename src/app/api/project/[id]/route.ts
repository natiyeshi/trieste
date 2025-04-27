
import Project from "../../(models)/projects.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function DELETE(req: any, { params }: { params: { id: string } }) {
    try {
      const project = await Project.findByIdAndDelete(params.id);
  
      if (!project) {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
      }
  
      return NextResponse.json({ message: "Project deleted successfully" }, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}