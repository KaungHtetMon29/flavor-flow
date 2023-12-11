import AddNewBtn from "@/components/Addnewbtn/CustBtn";
import CalendarComponent from "@/components/Calendar/Calendarcomponent";
import Sidenav from "@/components/SideNav/Sidenav";
import SearchBox from "@/components/searchbox/Searchbox";
import SearchDropdown from "@/components/searchdropdown/Searchdropdown";
import Sortfunction from "@/components/sort/Sortfunction";
import { Button } from "@/components/ui/button";
import FooterFrame from "@/layout/FooterLayout";
import MainLayout from "@/layout/MainLayout";
import SidepageLayout from "@/layout/SidepageFrame";
import SidepagebdyLayout from "@/layout/sidepagebdylayout";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <MainLayout>
      <SidepageLayout>
        <SearchBox />
        <SearchDropdown />
        <CalendarComponent />
        <Sortfunction />
      </SidepageLayout>
      <SidepagebdyLayout>test</SidepagebdyLayout>
      <FooterFrame>
        <AddNewBtn />
      </FooterFrame>
    </MainLayout>
  );
};

export default Home;
