import {
  BookmarkPlus,
  Code,
  Layers2,
  LayoutDashboard,
  Repeat,
  Settings,
  ShieldPlus,
  User2,
  UserPlus,
} from "lucide-react";

export const superAdminRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Profile",
    icon: User2,
    href: "/super_admin/profile",
    color: "text-violet-500",
  },
  {
    label: "Admin",
    icon: UserPlus,
    href: "/super_admin/admin",
    color: "text-violet-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/super_admin/settings",
  },
];

export const adminRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Customers",
    icon: User2,
    href: "/admin/customers",
    color: "text-violet-500",
  },
  {
    label: "Profile",
    icon: ShieldPlus,
    color: "text-pink-700",
    href: "/admin/profile",
  },
  {
    label: "Services",
    icon: Repeat,
    color: "text-orange-700",
    href: "/admin/services",
  },
  {
    label: "Categories",
    icon: Layers2,
    color: "text-emerald-500",
    href: "/admin/categories",
  },
  {
    label: "Posts",
    icon: Code,
    color: "text-green-700",
    href: "/admin/posts",
  },
  {
    label: "Bookings",
    icon: BookmarkPlus,
    color: "text-green-700",
    href: "/admin/bookings",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];
export const customerRoutes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Profile",
    icon: ShieldPlus,
    color: "text-pink-700",
    href: "/customer/profile",
  },
  {
    label: "Booking History",
    icon: BookmarkPlus,
    color: "text-pink-700",
    href: "/customer/booking-history",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/customer/settings",
  },
];
