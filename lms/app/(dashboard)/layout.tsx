import { Logo } from "./_components/logo";
import { Sidebar } from "./_components/sidebar";
import { SidebarRoutes } from "./_components/sidebar_routes";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="md-flex h-full w -56 flex-col fixed  inset-y-0 z-50">
        <div className="p-6">
          <Logo />
        </div>
        <div className="flex flex-col w-full">
          <SidebarRoutes />
        </div>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
