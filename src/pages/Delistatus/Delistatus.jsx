import AddNewBtn from "@/components/Addnewbtn/CustBtn";
import CalendarComponent from "@/components/Calendar/Calendarcomponent";
import DelistatusTable from "@/components/Delistatus/DelistatusTable";
import DeliveryTable from "@/components/DeliveryTable/DeliveryTable";
import { PreorderTable } from "@/components/PreorderFinalTable/PreorderTable";
import Sidenav from "@/components/SideNav/Sidenav";
import { StockTable } from "@/components/StockTable/StockTable";
import TruckTable from "@/components/TruckTable/TruckTable";
import SearchBox from "@/components/searchbox/Searchbox";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";
import React, { useEffect } from "react";
import {useDispatch} from 'react-redux'
import { searchDeliveriesByClientName } from "../../redux/deliverySlice";
const DeliStatus = () => {
  const dispatch = useDispatch();

  const searchByClientName = (clientName) => {
    dispatch(searchDeliveriesByClientName(clientName));
  };

  return (
    <MainLayout>
      <SidepageLayout>
        <SearchBox searchByClientName={searchByClientName} placeholder={'Search By Client Name'} />
      </SidepageLayout>
      <SidepagebdyLayout>
        <DelistatusTable />
      </SidepagebdyLayout>
    </MainLayout>
  );
};

export default DeliStatus;
