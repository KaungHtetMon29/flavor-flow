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
import SaleMoodle from "../moodles/saleModle";

const invoices = [
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
  {
    preorderId: 1,
    clientName: "John Doe",
    DueDate: "20-12-2024",
  },
];

export function PreorderTable() {
  const [status, setStatus] = useState("Sending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };
  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white">
        <TableRow>
          <TableHead className="w-[150px]">Id</TableHead>
          <TableHead>Client Name</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead className="text-center px-20">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.preorderId}>
            <TableCell className="font-medium text-[18px]">
              {invoice.preorderId}
            </TableCell>
            <TableCell>{invoice.clientName}</TableCell>
            <TableCell>{invoice.DueDate}</TableCell>
            <TableCell className="flex justify-center">
              <DropdownMenu onOpenChange={handleDropdownOpenChange}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="flex gap-3 justify-start w-40"
                  >
                    <div className="text-[18px]">
                      <p className="text-start">{status}</p>
                    </div>
                    <div className="justify-end flex w-full">
                      {isArrowUp ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
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
        ))}
      </TableBody>
    </Table>
  );
}
