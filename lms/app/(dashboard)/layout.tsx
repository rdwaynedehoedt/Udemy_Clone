import { Logo } from "./_components/logo";
import { Navbar } from "./_components/navbar";
import { Sidebar } from "./_components/sidebar";
import { SidebarRoutes } from "./_components/sidebar-routes";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className=" h-[80px] md-pl-56 fixed inset-y-0 w-full z-50 ">
        <Navbar />
      </div>
    
  <div className="md-flex h-full w -56 flex-col fixed inset-y-0 z-50">
        <div className="hidden  md:flex h-full w-56 flex-col fixedinset-y-0 z-50 ">
          <SidebarRoutes />
        </div>
      </div>
      <main className="md:pl-56 pt-[80px] h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
