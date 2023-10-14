import {
  Code,
  ImageIcon,
  LayoutDashboard,
  Music,
  Settings,
  User2,
  UserPlus,
  VideoIcon,
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
    label: "Conversation",
    icon: User2,
    href: "/admin/customer",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/admin/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/admin/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/admin/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/admin/code",
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
    label: "Conversation",
    icon: User2,
    href: "/customer",
    color: "text-violet-500",
  },
  {
    label: "Image Generation",
    icon: ImageIcon,
    color: "text-pink-700",
    href: "/customer/image",
  },
  {
    label: "Video Generation",
    icon: VideoIcon,
    color: "text-orange-700",
    href: "/customer/video",
  },
  {
    label: "Music Generation",
    icon: Music,
    color: "text-emerald-500",
    href: "/customer/music",
  },
  {
    label: "Code Generation",
    icon: Code,
    color: "text-green-700",
    href: "/customer/code",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/customer/settings",
  },
];
