import { NextResponse } from "next/server";

export function GET(request) {
  const users = [
    {
      name: "Harshit",
      phone: 9525561347,
      course: "java",
    },
    {
      name: "PIHU",
      phone: 9472190747,
      course: "python",
    },
    {
      name: "BIBHU",
      phone: 9199310474,
      course: "CPP",
    },
  ];

  return NextResponse.json(users);
}

export function POST() {}

export function PUT() {}

export function DELETE(request) {
  console.log("DELETE API CALLED");
  return NextResponse.json(
    {
      msg: "DELETED !!",
      status: true,
    },
    {
      status: 356,
      statusText: "CUSTOM STATUS TEXT",
    }
  );
}
