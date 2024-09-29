import { Logo } from "./_components/logo";
import { Sidebar } from "./_components/sidebar";
import { SidebarRoutes } from "./_components/sidebar-routes";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md-flex h-full w -56 flex-col fixed  inset-y-0 z-50">
        <div className="p-6">
          <Logo />
        </div>
        <div className="hidden  md:flex h-full w-56 flex-col fixedinset-y-0 z-50 ">
          <SidebarRoutes />
        </div>
      </div>
      <main className="md:pl-56 h-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
