"use client";

import { UserButton } from "@clerk/nextjs";
import { LogOut } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  // Make the pathname check case-insensitive and ensure it works for both `/teacher` and sub-paths.
  const isTeacherPage = pathname?.toLowerCase().startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/Chapter");

  // Define the exit action
  const handleExit = () => {
    router.push("/"); // Redirect to homepage after exit
  };

  return (
    <div className="flex gap-x-2 ml-auto">
      {/* Show the Exit button only if on the teacher or player page */}
      {isTeacherPage || isPlayerPage ? (
        <Button size="sm" variant="ghost" onClick={handleExit}>
          <LogOut className="h-4 w-4 mr-2" />
          Exit
        </Button>
      ) : (
        // Show the Teacher Mode button if not on the teacher or player page
        <Link href="/teacher/courses">
          <Button size="sm" variant="ghost">
            Teacher mode
          </Button>
        </Link>
      )}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
