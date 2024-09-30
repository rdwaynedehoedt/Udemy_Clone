import { Menu, Sidebar } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet";

export const MobileSidebar = () => {
  return (
    <div className="md:hidden"> 
      <Sheet>
        <SheetTrigger className="pr-4 hover-opacity-75 transition">
          <Menu />  
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-white">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};
