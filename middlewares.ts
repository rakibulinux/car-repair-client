// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// import { getUserInfo } from "./services/auth.service";
// import { IUserInfoType } from "./types";

// // This function can be marked `async` if using `await` inside
// export async function middleware(request: NextRequest) {
//   const { role } = getUserInfo() as IUserInfoType;
//   console.log(role);
//   if (!role) {
//     return NextResponse.redirect(new URL("/", request.url));
//   } else if (role === "super_admin") {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   } else if (role === "admin") {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   } else if (role === "customer") {
//     return NextResponse.redirect(new URL("/dashboard", request.url));
//   } else {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/dashboard",
// };
