import React, { useEffect, useRef, useState } from "react";
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
import { Button } from "../ui/button";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  changePermissionFalse,
  fetchPreOrders,
  changePermissionTrue,
} from "../../redux/preOrderSlice";
import NoData from "../NoData/NoData";
import { updateStatus } from "../../redux/preOrderSlice";
import { updatePreOrder } from "../../redux/preOrderSlice";
import clsx from "clsx";
import LoadingComp from "../loading/Loading";
import { ConfirmAlert } from "../moodles/alertMoodle";
import { AlertDialogAction } from "../ui/alert-dialog";
const PermissionTable = ({ dashboard }) => {
  const [status, setStatus] = useState("pending");
  const dispatch = useDispatch();
  const unPermitOrders = useSelector((state) =>
    state.preorder.preOrders.filter((order) => order.permission)
  );
  console.log(unPermitOrders);
  const loading = useSelector((state) => state.preorder.isLoading);
  // const preOrders = useSelector((state) => state.preorder.preOrders);
  const urgentOrders = useSelector((state) => state.preorder.urgentOrders);
  ///for alert
  const [dataToSubmit, setDataToSubmit] = useState({ id: 0, grant: false });
  const alert_ref = useRef(0);
  //alert end

  console.log(unPermitOrders);
  const handleClick = (id, grant) => {
    const updateData = {
      permission: !grant,
    };
    if (grant) {
      dispatch(changePermissionFalse({ id }));
      dispatch(updatePreOrder({ id, updateData }));
    } else {
      dispatch(changePermissionTrue({ id }));
      dispatch(updatePreOrder({ id, updateData }));
    }
  };

  // const updateOrderStatus = (id, value) => {
  //   dispatch(updateStatus({ id, value }));
  //   dispatch(updatePreOrder({ id, value }));
  //   setStatus(value);
  // };

  useEffect(() => {
    console.log();
    dispatch(fetchPreOrders());
  }, []);
  //for alert

  return (
    <>
      {dashboard ? (
        !loading ? (
          urgentOrders.length ? (
            <Table>
              <TableHeader className="sticky top-0 bg-white">
                <TableRow>
                  <TableHead className="w-[100px]">Id</TableHead>
                  <TableHead>Client Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-center">
                    Permission Grant
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {urgentOrders.map((urgentOrder, i) => (
                  <TableRow
                    key={urgentOrder.id}
                    className={`w-full  ${
                      i % 2 !== 0
                        ? "bg-primarycolor bg-opacity-[.05]"
                        : "bg-none"
                    }`}
                  >
                    <TableCell className="font-medium">
                      {urgentOrder.id}
                    </TableCell>
                    <TableCell>{urgentOrder.client.name}</TableCell>
                    <TableCell>{urgentOrder.order_date}</TableCell>
                    <TableCell className="">
                      <p
                        className={clsx(" capitalize font-semibold ", {
                          "text-yellow-500":
                            urgentOrder.order_status.toLowerCase() ===
                            "pending",
                          "text-green-700":
                            urgentOrder.order_status.toLowerCase() ===
                            "delivered",
                          "text-blue-500":
                            urgentOrder.order_status.toLowerCase() ===
                            "processing",
                        })}
                      >
                        {urgentOrder.order_status}
                      </p>
                    </TableCell>
                    <TableCell className="flex justify-center gap-4 flex-row-reverse">
                      <p
                        className={clsx(" capitalize font-semibold ", {
                          "text-yellow-500": urgentOrder.permission,
                          "text-green-700": !urgentOrder.permission,
                        })}
                      >
                        {urgentOrder.permission ? "NEED PERMISSION" : "GRANTED"}
                      </p>
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
        )
      ) : !loading ? (
        unPermitOrders.length > 0 ? (
          <Table>
            <TableHeader className="sticky top-0 bg-white">
              <TableRow>
                <TableHead className="w-[100px]">Id</TableHead>
                <TableHead>Client Name</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-center">Permission Grant</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {console.log(unPermitOrders)}
              {unPermitOrders.map((unPermitOrder) => (
                <TableRow key={unPermitOrder.id}>
                  <TableCell className="font-medium">
                    {unPermitOrder.id}
                  </TableCell>
                  <TableCell>{unPermitOrder.client.name}</TableCell>
                  <TableCell>{unPermitOrder.order_date}</TableCell>
                  <TableCell className="">
                    <p
                      className={clsx(" capitalize font-semibold ", {
                        "text-yellow-500":
                          unPermitOrder.order_status.toLowerCase() ===
                          "pending",
                        "text-green-500":
                          unPermitOrder.order_status.toLowerCase() ===
                          "delivered",
                        "text-blue-500":
                          unPermitOrder.order_status.toLowerCase() ===
                          "processing",
                      })}
                    >
                      {unPermitOrder.order_status}
                    </p>
                  </TableCell>
                  <TableCell className="flex justify-center gap-4 flex-row-reverse">
                    <Button
                      variant="custom"
                      className={`text-[18px] w-48`}
                      onClick={() => {
                        setDataToSubmit({
                          id: unPermitOrder.id,
                          grant: unPermitOrder.permission,
                        });
                        alert_ref.current.click();
                      }}
                      //   disabled={!unPermitOrder.permission}
                    >
                      {!unPermitOrder.permission
                        ? "Granted"
                        : "Need Permission"}
                    </Button>
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
      <ConfirmAlert
        dialogText={`Are you sure to grant the permission`}
        alertRef={alert_ref}
      >
        <AlertDialogAction
          onClick={() => handleClick(dataToSubmit.id, dataToSubmit.grant)}
        >
          Continue
        </AlertDialogAction>
      </ConfirmAlert>
    </>
  );
};

export default PermissionTable;
