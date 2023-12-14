import React, { useEffect, useState } from "react";
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
import TruckMoodle from "../moodles/truckMoodle";
import { IoCar } from "react-icons/io5";
import DeliveryMoodle from "../moodles/deliveryModle";
import { useDispatch, useSelector } from "react-redux";
import { fetchDeliveries } from "@/redux/deliverySlice";

const DelistatusTable = () => {
  const [status, setStatus] = React.useState("Sending");
  const [showDetail, setShowDetail] = useState(false);
  const [selectedDeli, setSelectedDeli] = useState({});
  const deliveries = useSelector((state) => state.delivery.deliveries);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchDeliveries());
    console.log("fetch deliveries  ");
  }, [dispatch]);
  return (
    <>
      {showDetail && (
        <DeliveryMoodle hide={() => setShowDetail(false)} data={selectedDeli} />
      )}
      <div className="rounded-xl overflow-hidden shadow-md">
        <Table>
          <TableHeader className="sticky top-0 bg-white">
            <TableRow>
              <TableHead className="w-[200px] text-[22px]">
                Preorder ID
              </TableHead>
              <TableHead className="text-[22px]">Client Name</TableHead>
              <TableHead className="text-[22px]">Address</TableHead>
              <TableHead className="text-[22px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveries.map((delivery) => (
              <TableRow
                key={delivery.id}
                onClick={() => {
                  setShowDetail(true);
                  setSelectedDeli(delivery);
                }}
                // className={`w-full ${
                //   i % 2 !== 0 ? "bg-primarycolor bg-opacity-20" : "bg-none"
                // }`}
              >
                <TableCell className="font-medium">
                  {delivery.preorder_id}
                </TableCell>
                <TableCell className="text-[18px]">
                  {delivery.preorder.client.name}
                </TableCell>
                <TableCell className="text-[18px]">
                  {delivery.preorder.client.address}
                </TableCell>

                <TableCell
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {/* Truck Moodle */}
                  <TruckMoodle delivery={delivery}>
                    <IoCar />
                  </TruckMoodle>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default DelistatusTable;
