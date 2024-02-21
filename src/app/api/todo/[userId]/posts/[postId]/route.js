import { NextResponse } from "next/server";

export function GET(reques, { params }) {
  const { postId, userId } = params;
  console.log("post Id : " + postId);
  console.log("user Id : " + userId);
  return NextResponse.json(params);
}
