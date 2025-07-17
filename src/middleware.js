import { NextResponse } from "next/server";
//const isLoggedIN = true;
export function middleware(request){
   // if(!isLoggedIN && request.nextUrl.pathname !='/home'){
        return NextResponse.redirect(new URL('/home', request.url))
    //}
}
export const config = {
    matcher: ["/contact/:path*"]
}