import Sidenav from "@/components/SideNav/Sidenav";
import { FaArrowLeft } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosCalendar } from "react-icons/io";
import SearchDropdown from "@/components/searchdropdown/Searchdropdown";
import { Calendar } from "@/components/ui/calendar";
import CalendarComponent from "@/components/Calendar/Calendarcomponent";
import { LuArrowUpDown } from "react-icons/lu";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function MainLayout(props) {
  const params = useLocation();
  const [path, setpath] = useState();
  useEffect(() => {
    params.pathname.split("/")[1] === "sale"
      ? setpath(salepaths)
      : setpath(logisticpaths);
  }, []);
  return (
    <div className="flex h-max z-50">
      <Sidenav navs={path} mainroute={params.pathname.split("/")[1]} />
      <div className="py-12 px-12 flex flex-col gap-12 w-full h-[100vh]">
        {props.children}
      </div>
    </div>
  );
}

export const salepaths = [
  { path: "preorder", pathname: "Pre-Order" },
  { path: "stock", pathname: "Stock" },
  { path: "client", pathname: "Client" },
  { path: "delivery", pathname: "Delivery" },
  { path: "permission", pathname: "Permission" },
];
export const logisticpaths = [
  { path: "deliverystatus", pathname: "Delivery Status" },
  { path: "truck", pathname: "Truck" },
];
