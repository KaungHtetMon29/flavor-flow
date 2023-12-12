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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const DeliveryTable = () => {
  const [status, setStatus] = React.useState("Sending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };
  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white">
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Truck ID</TableHead>
          <TableHead>Town</TableHead>
          <TableHead>Order ID</TableHead>
          <TableHead>Distance</TableHead>
          <TableHead className="text-center px-20">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell>1234</TableCell>
          <TableCell>123 mile</TableCell>
          <TableCell className="flex justify-center">
            <DropdownMenu onOpenChange={handleDropdownOpenChange}>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex gap-3 w-40 justify-start"
                >
                  <div>
                    <p className="text-start text-[18px]">{status}</p>
                  </div>
                  <div className="justify-end flex w-full">
                    {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-60">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={status}
                  onValueChange={setStatus}
                >
                  <DropdownMenuRadioItem value="Processing">
                    Processing
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Sending">
                    Sending
                  </DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="Sent">
                    Sent
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default DeliveryTable;
