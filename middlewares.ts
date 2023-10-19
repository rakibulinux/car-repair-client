import { getToken } from "next-auth/jwt";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
const hybridRoutes = ["/", "/sign-in", "/sign-up"];
const customerAccesibleRoutes = [
  // "/dashboard",
  "/customer/profile",
  "/customer/booking-history",
  "/customer/settings",
  "/customer/",
];
const rolesRedirect: Record<string, unknown> = {
  super_admin: `${process.env.NEXTAUTH_URL}/dashboard`,
  customer: `${process.env.NEXTAUTH_URL}/dashboard`,
  admin: `${process.env.NEXTAUTH_URL}/dashboard`,
};
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  console.log(token, "token middleware");
  const { pathname } = request.nextUrl;
  if (!token) {
    if (hybridRoutes.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(`${process.env.NEXTAUTH_URL}/sign-in`);
  }
  console.log("token", token);
  const role = token?.role as string;
  // console.log(role, "role middleware")
  if (
    (role === "admin" && pathname.startsWith("/admin")) ||
    (role === "super_admin" && pathname.startsWith("/super_admin")) ||
    (role === "customer" && customerAccesibleRoutes.includes(pathname))
  ) {
    console.log("next");
    return NextResponse.next();
  }

  if (pathname === "/" && role && role in rolesRedirect) {
    return NextResponse.redirect(rolesRedirect[role] as string);
  }

  return NextResponse.redirect(`${process.env.NEXTAUTH_URL}`);
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    //hybrid routes
    "/",
    "/sign-in",
    "/sign-up",
    //customer routes
    "/dashboard",
    "/customer/profile",
    "/customer/booking-history",
    "/customer/settings",
    "/customer/",
    //doctor routes
    "/dashboard",
    "/super_admin/profile",
    "/super_admin/admin",
    "/super_admin/settings",
    "/super_admin/:page*",
    //admin routes
    "/dashboard",
    "/admin/customers",
    "/admin/profile",
    "/admin/services",
    "/admin/categories",
    "/admin/posts",
    "/admin/bookings",
    "/admin/settings",
    "/admin/:page*",
  ],
};
