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
import { SkeletonDemo } from "../SkeletonFile/SkeletonFile";

const DelistatusTable = () => {
  const [status, setStatus] = React.useState("Sending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };
  const handlerClick = () => {
    //click functionality
  };
  const data = [
    { id: 1, name: "John Doe", truckId: "012", region: "Yangon" },
    { id: 2, name: "John Doe", truckId: "02", region: "Yangon" },
    { id: 3, name: "John Doe", truckId: "12", region: "Yangon" },
    { id: 4, name: "John Doe", truckId: "02", region: "Yangon" },
  ];

  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white">
        <TableRow>
          <TableHead className="w-[200px]">Preorder ID</TableHead>
          <TableHead>Truck ID</TableHead>
          <TableHead>Region</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.length === 0 ? ( // change in conditional
          <>
            <TableCell>
              <SkeletonDemo />
            </TableCell>
            <TableCell>
              <SkeletonDemo />
            </TableCell>
            <TableCell>
              <SkeletonDemo />
            </TableCell>
            <TableCell>
              <SkeletonDemo />
            </TableCell>
          </>
        ) : (
          <>
            {data.map((d) => (
              <TableRow key={d.id}>
                <TableCell className="font-medium">{d.id}</TableCell>
                <TableCell>{d.truckId}</TableCell>
                <TableCell>{d.region}</TableCell>
                <TableCell>
                  {/* //dropdown// */}
                  <DropdownMenu onOpenChange={handleDropdownOpenChange}>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex gap-3 justify-start w-40"
                      >
                        <div>
                          <p className="text-start text-[18px] font-normal">
                            {status}
                          </p>
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
                        <DropdownMenuRadioItem value="Sending">
                          Sending
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Pending">
                          Pending
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="Cancel">
                          Cancel
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
                <TableCell>
                  <Button
                    variant={"outline"}
                    onClick={handlerClick}
                    className="text-[18px]"
                  >
                    Assignment
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default DelistatusTable;
