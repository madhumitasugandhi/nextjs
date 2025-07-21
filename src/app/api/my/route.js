/*export async function GET(request){
    return new Response('Hello API Routes')
}*/

import { NextResponse } from "next/server"

export const GET = (request) => {
    return NextResponse.json({name: "Madhumita", Age: 23})
}