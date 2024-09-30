import { Menu,    } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SidebarRoutes } from "./sidebar-routes";


export const MobileSidebar = () => {
  return (
    <div className="md:hidden"> 
      <Sheet>
        <SheetTrigger className="pr-4 hover-opacity-75 transition">
          <Menu />  
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <SidebarRoutes />
        </SheetContent>
      </Sheet>
    </div>
  );
};
