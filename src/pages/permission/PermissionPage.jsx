import AddNewBtn from "@/components/Addnewbtn/CustBtn";
import CalendarComponent from "@/components/Calendar/Calendarcomponent";
import DelistatusTable from "@/components/Delistatus/DelistatusTable";
import DeliveryTable from "@/components/DeliveryTable/DeliveryTable";
import PermissionTable from "@/components/PermissionTable/PermissionTable";
import { PreorderTable } from "@/components/PreorderFinalTable/PreorderTable";
import Sidenav from "@/components/SideNav/Sidenav";
import { StockTable } from "@/components/StockTable/StockTable";
import TruckTable from "@/components/TruckTable/TruckTable";
import SearchBox from "@/components/searchbox/Searchbox";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";
import React, { useEffect } from "react";

const PermissionPage = () => {
  return (
    <MainLayout>
      <SidepageLayout>
        <SearchBox />
      </SidepageLayout>
      <SidepagebdyLayout>
        <PermissionTable />
      </SidepagebdyLayout>
    </MainLayout>
  );
};

export default PermissionPage;
