import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';


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
import DeliveryMoodle from "../moodles/deliveryModle";
import { fetchDeliveries } from "@/redux/deliverySlice";
const DeliveryTable = () => {
  const deliveries = useSelector((state) => state.delivery.deliveries);
  const dispatch =  useDispatch();
  const [status, setStatus] = React.useState("sending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };

  useEffect(() => {
    dispatch(fetchDeliveries())
    console.log('hell')
  }, [dispatch])
  return (
    <>
      <Table>
        <TableHeader className="sticky top-0 bg-white">
          <TableRow>
            <TableHead className="w-[100px] text-[22px]">Driver Name</TableHead>
            <TableHead className="text-[22px]">Truck ID</TableHead>
            <TableHead className="text-[22px]">Town</TableHead>
            <TableHead className="text-[22px]">Order ID</TableHead>
            <TableHead className="text-[22px]">Distance</TableHead>
            <TableHead className="text-[22px]">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          { deliveries?.map((delivery) => (
                      <TableRow key={delivery.id} onClick={() => setShowDetail(true)}>
                      <TableCell className="font-medium text-[18px]">{delivery.truck.driver}</TableCell>
                      <TableCell className="text-[18px]">{delivery.truck.license}</TableCell>
                      <TableCell className="text-[18px]">Yangon</TableCell>
                      <TableCell className="text-[18px]">1234</TableCell>
                      <TableCell className="text-[18px]">{delivery.distance} mile</TableCell>
                      <TableCell
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      >
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
      {showDetail && <DeliveryMoodle hide={() => setShowDetail(false)} />}
    </>
  );
};

export default DeliveryTable;
