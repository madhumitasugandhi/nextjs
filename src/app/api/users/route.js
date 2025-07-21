import { NextResponse } from "next/server";

export const POST = async (req) => {
    try {
        const data = await req.json();
        console.log(data);

        // Validate input
        if (!data.username || !data.age) {
            return NextResponse.json({ result: 'Bad Request: username and age required' }, { status: 400 });
        }

        return NextResponse.json({ result: 'Success', data }, { status: 200 });
    } catch (error) {
        console.error("Error parsing request:", error);
        return NextResponse.json({ result: 'Invalid JSON' }, { status: 400 });
    }
};

// Optional GET handler to test in browser
export const GET = () => {
    return NextResponse.json({ message: 'API is working' }, { status: 200 });
};
