import { Toaster } from "@/components/alert/toaster";
import NavbarDashBoard from "@/components/navbar/dashboard/navbar-dashboard";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex">
        <NavbarDashBoard />
        {children}
        <Toaster />
      </div>
    </>
  );
}
