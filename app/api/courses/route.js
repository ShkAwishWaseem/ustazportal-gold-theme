import dbConnection from "../config";
import Course from "../models/course";
import { NextResponse } from "next/server";



dbConnection();
export  async function GET(request ) {
     try {
               const courses = await Course.find({});
               // console.log(courses)
               return NextResponse.json({courses});
               
          } catch (error) {
          console.log(error)
          
     }
    
     // return new Response("Good")
     
}
