import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import  { useDispatch } from 'react-redux';
import { filterByOrderStatus } from "../../redux/preOrderSlice";

export default function SearchDropdown() {
  const [checkboxstatus, setcheckboxstatus] = useState("");
  const [deliveryStatus, setDeliveryStatus] = useState('Delivery Status');
  const dispatch = useDispatch();



  return (
    <div className="w-fit   ">
      <DropdownMenu className="w-fit">
        <DropdownMenuTrigger asChild>
          <Button className="flex gap-2 text-[18px]">
            {deliveryStatus} <IoIosArrowDown className="text-white text-2xl" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`border-2 z-[50] w-[11.5rem] flex flex-col mt-2 rounded-xl  bg-white shadow-md`}
        > 
        <DropdownMenuCheckboxItem
            className={`p-2 cursor-pointer hover:bg-gray-200 ${
              checkboxstatus === "all"
                ? "opacity-100 font-semibold"
                : "opacity-70"
            }`}
            onCheckedChange={() => {setcheckboxstatus("all"); dispatch(filterByOrderStatus('all'))}}
          >
            All
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            className={`p-2 cursor-pointer hover:bg-gray-200 ${
              checkboxstatus === "pending"
                ? "opacity-100 font-semibold"
                : "opacity-70"
            }`}
            onCheckedChange={() => {setcheckboxstatus("pending"); dispatch(filterByOrderStatus('pending'))}}

          >
            Pending
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className={`p-2 cursor-pointer hover:bg-gray-200 ${
              checkboxstatus === "processing"
                ? "opacity-100 font-semibold"
                : "opacity-70"
            }`}
            onCheckedChange={() => {setcheckboxstatus("processing"); dispatch(filterByOrderStatus('processing'))}}
          >
            Processing
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className={`p-2 cursor-pointer hover:bg-gray-200 ${
              checkboxstatus === "delivered"
                ? "opacity-100 font-semibold"
                : "opacity-70"
            }`}
            onCheckedChange={() => {setcheckboxstatus("delivered"); dispatch(filterByOrderStatus('delivered'))}}
          >
            Delivered
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
