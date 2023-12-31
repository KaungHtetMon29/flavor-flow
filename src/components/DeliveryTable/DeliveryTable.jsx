import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

import LoadingComp from "../loading/Loading";

import NoData from "../NoData/NoData";
const DeliveryTable = () => {
  const deliveries = useSelector((state) => state.delivery.deliveries);
  const loading = useSelector((state) => state.delivery.isLoading);
  const dispatch = useDispatch();
  const [status, setStatus] = React.useState("Sending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const [showDetail, setShowDetail] = useState(false);

  const deliverystates = useSelector((state) => state.delivery);
  const [selectedDeliData, setSelectedDeliData] = useState({});

  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };

  useEffect(() => {
    dispatch(fetchDeliveries());
  }, [dispatch]);
  console.log(selectedDeliData, "selectled data");
  return (
    <>
      {!deliverystates.isLoading ? (
        deliveries.length !== 0 ? (
          <Table className="border-b-2 border-primarycolor">
            <TableHeader className="sticky top-0 bg-white">
              <TableRow>
                <TableHead className="w-[300px] text-[22px]">
                  Driver Name
                </TableHead>
                <TableHead className="text-[22px]">Licence</TableHead>
                <TableHead className="text-[22px]">Client Address</TableHead>
                <TableHead className="text-[22px]">Pre-Order ID</TableHead>
                {/* <TableHead className="text-[22px]">Distance</TableHead> */}
              </TableRow>
            </TableHeader>
            <TableBody>
              {deliveries?.map((delivery, i) => (
                <TableRow
                  key={delivery.id}
                  onClick={() => {
                    setShowDetail(true);
                    setSelectedDeliData(delivery);
                  }}
                  className={`w-full hover:bg-secondarycolor h-[72px] hover:text-white hover:bg-opacity-70 ${
                    i % 2 !== 0 ? "bg-primarycolor bg-opacity-[.05]" : "bg-none"
                  }`}
                >
                  <TableCell className="font-medium text-[18px]">
                    {delivery.preorder.client.name}
                  </TableCell>
                  <TableCell className="text-[18px]">
                    {delivery.truck.license}
                  </TableCell>
                  <TableCell className="text-[18px]">
                    {delivery.preorder.client.address}
                  </TableCell>
                  <TableCell className="text-[18px]">
                    {delivery.preorder_id}
                  </TableCell>
                  {/* <TableCell className="text-[18px]">
                {delivery.distance} mile
              </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <NoData />
        )
      ) : (
        <LoadingComp />
      )}

      {showDetail && (
        <DeliveryMoodle
          hide={() => setShowDetail(false)}
          data={selectedDeliData}
        />
      )}
    </>
  );
};
export default DeliveryTable;
