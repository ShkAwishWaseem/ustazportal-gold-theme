import Course from "../../models/course";
import dbConnection from "../../config";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

dbConnection();

export async function GET(request, { params }) {
  const { slug } = params;
  console.log(slug);

  try {
//     const course = await Course.findOne({ _id: mongoose.Types.ObjectId(slug) });
const course = await Course.findOne({ _id: new mongoose.Types.ObjectId(slug) });


    if (course) {
      console.log(course);
      return NextResponse.json({ course });
    } else {
      // If no course is found, you might want to return an appropriate response
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    // Handle any errors that occurred during the database query
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
