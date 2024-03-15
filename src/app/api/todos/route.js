import axios from 'axios';
import { NextRequest, NextResponse } from "next/server";

export async function POST(req, res) {
    console.log(req)
    if (req.method !== 'POST') {
        return NextResponse.error(new Error('Method not allowed'), { status: 405 });
    } else {
        try {
            // Destructure the todo object from the request body
            const { title } = req.body;
            console.log(title)

            // Make a POST request to the desired endpoint to post the todo
            const response = await axios.post('https://dummyjson.com/todos/add', {
               todo
            });

            // Return the response data
            return NextResponse.json(response.data);
        } catch (error) {
            // Handle errors
            return NextResponse.error(new Error('Failed to post todo'), { status: 500 });
        }
    }
}
