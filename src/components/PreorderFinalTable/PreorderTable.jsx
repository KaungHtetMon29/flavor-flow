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
import { fetchPreOrders, updatePreOrder } from "../../redux/preOrderSlice";
import { updateStatus } from "../../redux/preOrderSlice";
import NoData from "../NoData/NoData";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import LoadingComp from "../loading/Loading";

export function PreorderTable() {
  const [status, setStatus] = React.useState("pending");
  const [isArrowUp, setIsArrowUp] = useState(false);
  const isLoading = useSelector((state) => state.preorder);
  const preOrders = useSelector((state) => state.preorder.preOrders);
  // const preOrders = [];
  console.log(preOrders);
  const dispatch = useDispatch();
  const handleDropdownOpenChange = (isOpen) => {
    setIsArrowUp(isOpen);
  };
  const [showDetail, setShowDetail] = useState(false);
  function handleShowDetail(Boolean) {
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
      {console.log(isLoading.isLoading)}
      {!isLoading.isLoading ? (
        preOrders.length > 0 ? (
          <Table className="border-b-2 border-primarycolor w-full">
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px] text-[22px]">Id</TableHead>
                <TableHead className="text-[22px]">Client Name</TableHead>
                <TableHead className="text-[22px]">Due Date</TableHead>
                <TableHead className="text-left text-[22px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {preOrders.map((preOrder, i) => (
                <TableRow
                  className={`w-full hover:bg-secondarycolor hover:text-white hover:bg-opacity-70 ${
                    i % 2 !== 0 ? "bg-primarycolor bg-opacity-20" : "bg-none"
                  }`}
                  key={preOrder.id}
                  onClick={() => handleShowDetail(true)}
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
                          className="flex gap-3 w-32 justify-start text-primarycolor"
                        >
                          <div className="">
                            <p className="text-start">
                              {preOrder.order_status}
                            </p>
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
              ))}
            </TableBody>
          </Table>
        ) : (
          <NoData />
        )
      ) : (
        <LoadingComp />
      )}
      {showDetail ? <SaleMoodle hide={() => handleShowDetail(false)} /> : null}
    </>
  );
}
