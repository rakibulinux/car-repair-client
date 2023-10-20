import {
  BookmarkPlus,
  Code,
  ImageIcon,
  Layers2,
  Music,
  Repeat,
  Settings,
  ShieldPlus,
  User2,
  UserPlus,
  VideoIcon,
} from "lucide-react";

export const MAX_FREE_COUNTS = 5;

export const superAdminTools = [
  {
    label: "Profile",
    icon: User2,
    href: "/super_admin/profile",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Admin",
    icon: UserPlus,
    href: "/super_admin/admin",
    color: "text-violet-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/super_admin/settings",
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
  },
];
export const adminTools = [
  {
    label: "Customers",
    icon: User2,
    href: "/admin/customers",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Profile",
    icon: ShieldPlus,
    color: "text-pink-700",
    href: "/admin/profile",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Services",
    icon: Repeat,
    color: "text-orange-700",
    href: "/admin/services",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Categories",
    icon: Layers2,
    color: "text-emerald-500",
    href: "/admin/categories",
    bgColor: "bg-orange-700/10",
  },
  {
    label: "Posts",
    icon: Code,
    color: "text-green-700",
    href: "/admin/posts",
    bgColor: "bg-green-700/10",
  },
  {
    label: "Bookings",
    icon: BookmarkPlus,
    color: "text-green-700",
    href: "/admin/bookings",

    bgColor: "bg-green-600/10",
  },
];
export const tools = [
  {
    label: "Settings",
    icon: Settings,
    href: "/admin/settings",
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Music Generation",
    icon: Music,
    href: "/music",
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    bgColor: "bg-pink-700/10",
    href: "/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    bgColor: "bg-orange-700/10",
    href: "/video",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    bgColor: "bg-green-700/10",
    href: "/code",
  },
];
export const customerTools = [
  {
    label: "Profile",
    icon: ShieldPlus,
    color: "text-pink-700",
    href: "/customer/profile",
    bgColor: "bg-emerald-500/10",
  },
  {
    label: "Booking History",
    icon: BookmarkPlus,
    color: "text-pink-700",
    href: "/customer/booking-history",
    bgColor: "bg-pink-700/10",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/customer/settings",
    bgColor: "bg-orange-700/10",
  },
];
