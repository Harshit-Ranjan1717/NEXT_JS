import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

/*export function GET(request){
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
}*/

/*
post request function
data post
export async function POST(request){

    const body=request.body;
    console.log(body);
    console.log(request.nextUrl.searchParams); //api/users?name="harshit"

   const json=await request.json()
   console.log(json);  // Body me jo bhi as json bhejenge

   //const text=request.text() // Body me jab as a text bhejenge
   //console.log(text);
    return NextResponse.json({msg:"post user data"});

} */


/*export function DELETE(request) {
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
} */

/* export function PUT() {} */



//get user    
export async function GET(request){

  let users=[];
  try{
    users=await User.find().select("-password")

  }catch(err){
    console.log(err);
    return NextResponse.json({msg:"Failed to get users",success:false});
  }
  return NextResponse.json(users)
}

//create user
export async function POST(request){
  //fetch user details from request
  const { name, email, password, about } = await request.json();
  //create user object with user Model
  const user = new User({
    name,
    email,
    password,
    about,
  });
  try{
    //save the user in db
  const createdUser=await user.save();
  return NextResponse.json(user,{status:201})
  }
  catch(err){
    console.log(err);
      return NextResponse.json({msg:"failed to create user",status:false})
  }
}






