import Sidebar from "@/ui/Sidebar";
import { Outlet } from "react-router";

function AppLayout() {
  return (
    <div className="flex h-screen w-screen gap-8 bg-slate-900">
      <Sidebar />
      <main className="flex flex-1 flex-col justify-between p-12">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
