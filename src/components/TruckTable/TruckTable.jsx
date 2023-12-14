import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchTrucks } from "@/redux/truckSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingComp from "../loading/Loading";
import NoData from "../NoData/NoData";

const TruckTable = () => {
  const truckInfos = [
    {
      truckId: 1,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: false, //the truck is free
    },
    {
      truckId: 2,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: true, //the truck is free
    },
    {
      truckId: 3,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: true, //the truck is free
    },
    {
      truckId: 3,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: true, //the truck is free
    },
    {
      truckId: 3,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: true, //the truck is free
    },
    {
      truckId: 3,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: true, //the truck is free
    },
    {
      truckId: 3,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: true, //the truck is free
    },
    {
      truckId: 3,
      capacity: 200,
      driverName: "John Doe",
      driverPhone: "09123456789",
      status: true, //the truck is free
    },
  ];
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.truck.trucks);
  const isLoading = useSelector((state) => state.truck);
  useEffect(() => {
    dispatch(fetchTrucks());
  }, []);
  return (
    <>
      {isLoading.isLoading ? (
        <LoadingComp />
      ) : selector.length !== 0 ? (
        <Table>
          <TableHeader className="sticky top-0 bg-white">
            <TableRow>
              {console.log(selector)}
              <TableHead className=" w-[200px]">Licence No</TableHead>
              <TableHead>Driver Name</TableHead>
              <TableHead className="w-[70px] text-right">Capacity</TableHead>
              {/* <TableHead className="text-right">Driver Ph No.</TableHead> */}
              <TableHead className=" text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-b-2 border-primarycolor">
            {selector.map((info, i) => (
              <TableRow
                key={info.truckId}
                className={`w-full h-16 ${
                  i % 2 !== 0 ? "bg-primarycolor bg-opacity-10" : "bg-none"
                }`}
              >
                <TableCell className=" border-primarycolor border-opacity-40">
                  {info.id}
                </TableCell>
                <TableCell className="w-[400px]  border-primarycolor border-opacity-40">
                  {info.driver}
                </TableCell>
                <TableCell className="text-right   border-primarycolor border-opacity-40">
                  {info.capacity}
                </TableCell>

                {/* <TableCell className="text-right w-[300px]  border-primarycolor border-opacity-40">
            {info.driverPhone}
          </TableCell> */}
                <TableCell className="w-[20px]">
                  {}
                  <div
                    className={`m-auto w-6 h-6 border rounded-full ${
                      info.available === true ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <NoData />
      )}
    </>
  );
};

export default TruckTable;
