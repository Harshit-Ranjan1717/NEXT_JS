import { NextResponse } from "next/server";

export function GET(request){
    return NextResponse.json({msg:"WORK API"})
}