import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";

connectDb()

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


//post rrequest function
//data post
export async function POST(request){

    const body=request.body;
    console.log(body);
    console.log(request.nextUrl.searchParams); //api/users?name="harshit"

   const json=await request.json()
   console.log(json);  // Body me jo bhi as json bhejenge


   //const text=request.text() // Body me jab as a text bhejenge
   //console.log(text);
    return NextResponse.json({msg:"post user data"});

}

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
