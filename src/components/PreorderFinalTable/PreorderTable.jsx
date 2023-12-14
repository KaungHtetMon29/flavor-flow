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
import {
  fetchPreOrderItems,
  fetchPreOrders,
  updatePreOrder,
} from "../../redux/preOrderSlice";
import { updateStatus } from "../../redux/preOrderSlice";
import NoData from "../NoData/NoData";
import LoadingComp from "../loading/Loading";

export function PreorderTable() {
  // const [status, setStatus] = React.useState("pending");
  const [selectedPreOrder, setSelectedPreOrder] = useState({});

  const preOrders = useSelector((state) => state.preorder.preOrders);
  const preOrderItems = useSelector((state) => state.preorder.preOrderItems);
  const isLoading = useSelector((state) => state.preorder);
  const filterOrderStatus = useSelector(
    (state) => state.preorder.filterOrderStatus
  );
  const dispatch = useDispatch();

  const [showDetail, setShowDetail] = useState(false);

  function handleShowDetail(Boolean, id) {
    dispatch(fetchPreOrderItems(id));
    setShowDetail(Boolean);
  }

  useEffect(() => {
    dispatch(fetchPreOrders());
  }, [dispatch]);

  const updateOrderStatus = (id, value) => {
    const updateData = {
      order_status: value
    }
    dispatch(updateStatus({ id, value }));
    dispatch(updatePreOrder({ id, updateData }));
  };
  
  return (
    <>
      {!isLoading.isLoading ? (
        filterOrderStatus.length > 0 ? (
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
              {filterOrderStatus?.map((preOrder, i) => (
                <TableRow
                  className={`w-full hover:bg-secondarycolor hover:text-white hover:bg-opacity-70 ${
                    i % 2 !== 0 ? "bg-primarycolor bg-opacity-20" : "bg-none"
                  }`}
                  key={preOrder.id}
                  onClick={() => {
                    handleShowDetail(true);
                    setSelectedPreOrder(preOrder);
                  }}
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
                    <DropdownMenu>  
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
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>Order Status</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          onValueChange={(e) =>
                            updateOrderStatus(preOrder.id, e)
                          }
                        >
                          <DropdownMenuRadioItem value="pending">
                            Pending
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="processing">
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
      {showDetail ? (
        <SaleMoodle hide={() => setShowDetail(false)} data={selectedPreOrder} />
      ) : null}
    </>
  );
}
