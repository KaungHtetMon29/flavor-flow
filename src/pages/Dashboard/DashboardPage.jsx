import PermissionTable from "@/components/PermissionTable/PermissionTable";
import { PreorderTable } from "@/components/PreorderFinalTable/PreorderTable";
import TruckTable from "@/components/TruckTable/TruckTable";
import SearchBox from "@/components/searchbox/Searchbox";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";
import { useState } from "react";

export default function DashboardPage() {
  const [mode, setmode] = useState("permission");
  return (
    <MainLayout>
      <SidepageLayout>
        <button
          onClick={() => {
            setmode("permission");
          }}
          className={`bg-none text-xl font-semibold py-2 px-2 border-black rounded-none ${
            mode === "permission" ? "border-b-[3px]" : "border-none"
          }`}
        >
          Urgent Permission
        </button>
        <button
          onClick={() => setmode("delivery")}
          className={`bg-none text-xl font-semibold py-2 px-2 border-black rounded-none ${
            mode === "delivery" ? "border-b-[3px]" : "border-none"
          }`}
        >
          Current Deli Status
        </button>
      </SidepageLayout>
      <SidepagebdyLayout>
        {mode === "permission" ? <PermissionTable /> : <PreorderTable />}
      </SidepagebdyLayout>
    </MainLayout>
  );
}
