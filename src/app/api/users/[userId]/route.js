import { User } from "@/models/user";
import { NextResponse } from "next/server";

/*export function DELETE (request,{params}){
    console.log(params);
    const {userId}=params
    console.log("you provided :",userId);
    return NextResponse.json({
        msg:"DELETE API CALLED"
    })
}*/

export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await User.findById(userId).select("-password");
    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "No user found" });
  }
}

export async function DELETE(request, { params }) {
  const { userId } = params;
  try {
    await User.deleteOne({
      _id: userId,
    });
    return NextResponse.json({ msg: "user deleted", success: true });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ msg: "Error in deleting user", success: false });
  }
}

export async function PUT(request, { params }) {
  const { userId } = params;
  const { name, password, about, email } = await request.json();
  try {
    const user = await User.findById(userId);
    user.name = name;
    user.about = about;
    user.password = password;
    user.email = email;

    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);
  } catch (err) {
    console.log(err);
    return NextResponse.json({msg:"failed to update user",success:false});
  }
}
