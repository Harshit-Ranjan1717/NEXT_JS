import { NextResponse } from "next/server";

export function DELETE (request,{params}){
    console.log(params);
    const {userId}=params
    console.log("you provided :",userId);
    return NextResponse.json({
        msg:"DELETE API CALLED"
    })
}

