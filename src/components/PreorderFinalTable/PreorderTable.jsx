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
import SaleMoodle from "../moodles/saleModle";
import { useDispatch, useSelector } from "react-redux";
import { fetchPreOrderItems, fetchPreOrders, updatePreOrder } from "../../redux/preOrderSlice";
import { updateStatus } from "../../redux/preOrderSlice";
import NoData from "../NoData/NoData";

export function PreorderTable() {
  const [status, setStatus] = React.useState("pending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const preOrders = useSelector((state) => state.preorder.preOrders);
  const preOrderItems = useSelector((state) => state.preOrder.preOrderItems);
  console.log(preOrders);
  const dispatch = useDispatch();
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };
  const [showDetail, setShowDetail] = useState(false);

  function handleShowDetail(Boolean, id) {
    dispatch(fetchPreOrderItems(id))
    setShowDetail(Boolean);
  }

  useEffect(() => {
    dispatch(fetchPreOrders());
  }, [dispatch]);

  const updateStatus = (id, value) => {
    dispatch(updatePreOrder(id, value));
    dispatch(updateStatus(id, value));
  };

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
          {preOrders.length > 0 ? (
            preOrders?.map((preOrder) => (
              <TableRow
                className={"w-full"}
                key={preOrder.id}
                onClick={() => handleShowDetail(true, preOrder.id)}
              >
                <TableCell className="font-medium text-[18px]">
                  {preOrder.id}
                </TableCell>
                <TableCell className="text-[18px]">
                  {preOrder.client.name}
                </TableCell>
                <TableCell className="text-[18px]">
                  {preOrder.order_date}
                </TableCell>
                <TableCell
                  className="text-[18px]"
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
                          <p className="text-start">{preOrder.order_status}</p>
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
                        onValueChange={(e) => updateStatus(preOrder.id, e)}
                      >
                        <DropdownMenuRadioItem value="pending">
                          Pending
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="procressing">
                          Processing
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="delivered">
                          Delivered
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <NoData/>
          )}
        </TableBody>
      </Table>
      {showDetail ? <SaleMoodle hide={() => handleShowDetail(false)} preOrderItems = {preOrderItems} /> : null}
    </>
  );
}
