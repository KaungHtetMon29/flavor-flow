import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const DelistatusTable = () => {
  const [status, setStatus] = React.useState("sending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };
  const handlerClick = () => {
    //click functionality
  };
  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white">
        <TableRow>
          <TableHead className="w-[200px] text-[22px]">Preorder ID</TableHead>
          <TableHead className="text-[22px]">Truck ID</TableHead>
          <TableHead className="text-[22px]">Region</TableHead>
          <TableHead className="text-[22px]">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">1</TableCell>
          <TableCell className="text-[18px]">12/321</TableCell>
          <TableCell className="text-[18px]">Yangon</TableCell>
          <TableCell>
            {/* //dropdown// */}
            <DropdownMenu onOpenChange={handleDropdownOpenChange}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex gap-3 w-32 justify-start"
                >
                  <div className="">
                    <p className="text-start">{status}</p>
                  </div>
                  <div className="justify-end flex w-full">
                    {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </Button>
                {/* <Button variant="outline" className="flex gap-3">
                  {status}
                  {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </Button> */}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Order Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={status}
                  onValueChange={setStatus}
                >
                  <DropdownMenuRadioItem value="sending">
                    Sending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="pending">
                    Pending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="cancel">
                    Cancel
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
          <TableCell>
            <Button variant={"outline"} onClick={handlerClick}>
              Assignment
            </Button>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DelistatusTable;
