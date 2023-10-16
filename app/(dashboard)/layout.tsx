import { DashboardNavbar } from "@/components/dashboard-navbar";
import { Sidebar } from "@/components/sidebar";
import Providers from "@/lib/Providers";

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <Providers>
      <div className="h-full relative">
        <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
          <Sidebar />
        </div>
        <main className="md:pl-72 pb-2">
          <DashboardNavbar />
          {children}
        </main>
      </div>
    </Providers>
  );
};

export default DashboardLayout;
