import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "../ui/button";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function SearchDropdown() {
  const [checkboxstatus, setcheckboxstatus] = useState("sending");
  return (
    <div className="w-fit ">
      <DropdownMenu className="w-fit">
        <DropdownMenuTrigger asChild>
          <Button className="flex gap-2 text-[18px] bg-secondarycolor shadow-lg">
            Delivery Status <IoIosArrowDown className="text-white text-2xl" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className={`border-2 z-[50] w-[11.5rem] flex flex-col mt-2 rounded-xl  bg-white shadow-md`}
        >
          <DropdownMenuCheckboxItem
            className={`p-2 cursor-pointer ${
              checkboxstatus === "sending"
                ? "opacity-100 font-semibold"
                : "opacity-70"
            }`}
            onCheckedChange={() => setcheckboxstatus("sending")}
          >
            Sending
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className={`p-2 cursor-pointer ${
              checkboxstatus === "sent"
                ? "opacity-100 font-semibold"
                : "opacity-70"
            }`}
            onCheckedChange={() => setcheckboxstatus("sent")}
          >
            Sent
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            className={`p-2 cursor-pointer ${
              checkboxstatus === "processing"
                ? "opacity-100 font-semibold"
                : "opacity-70"
            }`}
            onCheckedChange={() => setcheckboxstatus("processing")}
          >
            Processing
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
