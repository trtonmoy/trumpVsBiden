import dbConnect from "@/app/connect/mongodb";
import Votes from "@/app/modals/Votes";
import { NextResponse } from "next/server";

export async function GET(request) {
  await dbConnect();

  const votes = await Votes.find();

  return new NextResponse(JSON.stringify({ votes: votes }), {
    status: 200,
  });
}
