import AddNewBtn from "@/components/Addnewbtn/CustBtn";
import CalendarComponent from "@/components/Calendar/Calendarcomponent";
import DelistatusTable from "@/components/Delistatus/DelistatusTable";
import DeliveryTable from "@/components/DeliveryTable/DeliveryTable";
import { PreorderTable } from "@/components/PreorderFinalTable/PreorderTable";
import Sidenav from "@/components/SideNav/Sidenav";
import { StockTable } from "@/components/StockTable/StockTable";
import TruckTable from "@/components/TruckTable/TruckTable";
import SearchBox from "@/components/searchbox/Searchbox";
import SearchDropdown from "@/components/searchdropdown/Searchdropdown";
import Sortfunction from "@/components/sort/Sortfunction";
import { Button } from "@/components/ui/button";
import FooterFrame from "@/layout/FooterLayout";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";
import React, { useEffect } from "react";

const TruckPage = () => {
  return (
    <MainLayout>
      <SidepageLayout>
        <SearchBox />
        <SearchDropdown />
        <CalendarComponent />
        <Sortfunction />
      </SidepageLayout>
      <SidepagebdyLayout>
        <TruckTable />
      </SidepagebdyLayout>
      <FooterFrame>
        <AddNewBtn />
      </FooterFrame>
    </MainLayout>
  );
};

export default TruckPage;
