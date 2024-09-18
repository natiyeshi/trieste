import { serviceValidation } from "@/validation/service.validation";
import Service from "../(models)/Service.model"; // Adjust the import path to your model
import { NextResponse } from "next/server";


export async function POST(req: any) {
    try {
      const body = await req.json();
      const serviceData = body.formData;
      await serviceValidation.validate(serviceData);
      const newService = await Service.create(serviceData);
      return NextResponse.json(
        { message: "Service created successfully!" , newService },
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
      const services = await Service.find();
      return NextResponse.json(services, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    