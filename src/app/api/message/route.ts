import { messageValidation } from "@/validation/message.validation";
import Message from "../(models)/Message.model";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const body = await req.json();
    const messageData = body.formData;
    console.log(messageData, "checking...");
    await messageValidation.validate(messageData);

    const newMessage = await Message.create(messageData);
    console.log(newMessage, "updated");

    return NextResponse.json(
    { message: "Message created successfully!", newMessage },
    { status: 200 }
    );
  } catch (err) {
    const errorMessage = (err as any)?.errors?.[0] ?? (err as any)?.message ?? "Server Error";
    console.log(errorMessage);
    return NextResponse.json(
    { message: errorMessage, error: err },
    { status: 400 }
    );
  }
  }

export async function GET(req: any) {
    try {
      const messages = await Message.find();
      return NextResponse.json(messages, { status: 200 });
    } catch (err) {
      console.error(err);
      return NextResponse.json(
        { message: "Server Error", error: err },
        { status: 500 }
      );
    }
  }
    