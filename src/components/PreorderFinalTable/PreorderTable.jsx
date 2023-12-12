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
import SaleMoodle from "../moodles/saleModle";

const invoices = [
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
];

export function PreorderTable() {
  const [status, setStatus] = React.useState("sending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };
  const [showDetail, setShowDetail] = useState(false);
  function handleShowDetail(Boolean) {
    setShowDetail(Boolean);
    console.log("handle");
    console.log(showDetail);
  }
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px] text-[22px]">Id</TableHead>
            <TableHead className="text-[22px]">Client Name</TableHead>
            <TableHead className="text-[22px]">Due Date</TableHead>
            <TableHead className="text-left text-[22px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow
              className={"w-full"}
              key={invoice.preorderId}
              onClick={() => handleShowDetail(true)}
            >
              <TableCell className="font-medium text-[18px]">
                {invoice.preorderId}
              </TableCell>
              <TableCell className="text-[18px]">
                {invoice.clientName}
              </TableCell>
              <TableCell className="text-[18px]">{invoice.DueDate}</TableCell>
              <TableCell className="text-[18px]">
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
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Order Status</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={status}
                      onValueChange={setStatus}
                    >
                      <DropdownMenuRadioItem value="processing">
                        Processing
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="sending">
                        Sending
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="sent">
                        Sent
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {showDetail ? <SaleMoodle hide={() => handleShowDetail(false)} /> : null}
    </>
  );
}
