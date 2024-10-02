"use client";

import { usePathname } from "next/navigation";
import { Logo } from "./logo";
import { SidebarItem } from "./sidebar-item";
import { Layout, Compass, List, BarChart } from "lucide-react";

const  guestRoutes = [
  {
    icon: Layout,
    label: "Dashboard",
    href: "/",
  },

  {
    icon: Compass,
    label: "Browser",
    href: "/search",
  },
];

const teacherRoutes = [
  {
    icon: List,
    label: "Courses",
    href: "/teacher/courses",
  },

  {
    icon: BarChart ,
    label: "Analytics",
    href: "/teacher/analytics ",
  },
]

export const SidebarRoutes = () => {

  const pathname=usePathname();
  const isTeacherPage = pathname?.includes("/teacher"); 

  const routes = isTeacherPage ? teacherRoutes : guestRoutes;

  return (
    <div className="flex flex-col w-full ">
      <div className="p-6">
          <Logo />
        </div>
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
