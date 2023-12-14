import AddNewBtn from "@/components/Addnewbtn/CustBtn";
import CalendarComponent from "@/components/Calendar/Calendarcomponent";
import ClientTable from "@/components/ClientTable/ClientTable";
import DelistatusTable from "@/components/Delistatus/DelistatusTable";
import DeliveryTable from "@/components/DeliveryTable/DeliveryTable";
import { PreorderTable } from "@/components/PreorderFinalTable/PreorderTable";
import Sidenav from "@/components/SideNav/Sidenav";
import { StockTable } from "@/components/StockTable/StockTable";
import TruckTable from "@/components/TruckTable/TruckTable";
import DeliveryMoodle from "@/components/moodles/deliveryModle";
import SearchBox from "@/components/searchbox/Searchbox";
import SearchDropdown from "@/components/searchdropdown/Searchdropdown";
import Sortfunction from "@/components/sort/Sortfunction";
import { Button } from "@/components/ui/button";
import FooterFrame from "@/layout/FooterLayout";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";
import { filterOrderDate, searchPreOrder } from "@/redux/preOrderSlice";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const SalePage = () => {
  const dispatch = useDispatch();

  const searchByClientName = (clientName) => {
    dispatch(searchPreOrder(clientName));
  };

  return (
    <MainLayout>
      <SidepageLayout>
        <SearchBox
          searchByClientName={searchByClientName}
          placeholder={"Enter Client Name"}
        />
        <SearchDropdown />
      </SidepageLayout>
      <SidepagebdyLayout>
        <PreorderTable />
      </SidepagebdyLayout>
      <FooterFrame>
        <AddNewBtn route="new" />
      </FooterFrame>
    </MainLayout>
  );
};

export default SalePage;
