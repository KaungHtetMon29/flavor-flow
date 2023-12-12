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
import { FaBoxArchive, FaList, FaCar } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoIosDocument } from "react-icons/io";

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
  {
    path: "preorder",
    pathname: "Pre-Order",
    icon: <FaList className="text-2xl" />,
  },
  {
    path: "stock",
    pathname: "Stock",
    icon: <FaBoxArchive className="text-2xl" />,
  },
  {
    path: "client",
    pathname: "Client",
    icon: <RxAvatar className="text-3xl" />,
  },
  {
    path: "delivery",
    pathname: "Delivery",
    icon: <FaCar className="text-2xl" />,
  },
  {
    path: "permission",
    pathname: "Permission",
    icon: <IoCheckmarkDoneCircle className="text-3xl" />,
  },
];
export const logisticpaths = [
  {
    path: "deliverystatus",
    pathname: "Delivery Status",
    icon: <IoIosDocument className="text-4xl" />,
  },
  { path: "truck", pathname: "Truck", icon: <FaCar className="text-3xl" /> },
];
