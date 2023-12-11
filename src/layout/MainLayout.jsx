import Sidenav from "@/components/SideNav/Sidenav";
import { FaArrowLeft } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IoIosCalendar } from "react-icons/io";
import SearchDropdown from "@/components/searchdropdown/Searchdropdown";
import { Calendar } from "@/components/ui/calendar";
import CalendarComponent from "@/components/Calendar/Calendarcomponent";
import { LuArrowUpDown } from "react-icons/lu";
export default function MainLayout(props) {
  return (
    <div className="flex h-max">
      <Sidenav navs={["t", "t", "t", "t"]} />
      <div className="py-12 px-12 flex flex-col gap-12 w-full">
        {props.children}
      </div>
    </div>
  );
}
