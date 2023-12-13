import ClientTable from "@/components/ClientTable/ClientTable";
import PermissionTable from "@/components/PermissionTable/PermissionTable";
import { PreorderTable } from "@/components/PreorderFinalTable/PreorderTable";
import TruckTable from "@/components/TruckTable/TruckTable";
import SearchBox from "@/components/searchbox/Searchbox";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";
import { useState } from "react";

export default function ClientPage() {
  const [mode, setmode] = useState("permission");
  return (
    <MainLayout>
      <SidepageLayout></SidepageLayout>
      <SidepagebdyLayout>
        <ClientTable />
      </SidepagebdyLayout>
    </MainLayout>
  );
}
