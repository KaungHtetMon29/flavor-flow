import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white">
        <TableRow>
          <TableHead className=" w-[200px]">Truck ID</TableHead>
          <TableHead>Capacity</TableHead>
          <TableHead>Driver Name</TableHead>
          <TableHead>Driver Ph No.</TableHead>
          <TableHead className=" text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {truckInfos.map((info) => (
          <TableRow key={info.truckId}>
            <TableCell>{info.truckId}</TableCell>
            <TableCell>{info.capacity}</TableCell>
            <TableCell>{info.driverName}</TableCell>
            <TableCell>{info.driverPhone}</TableCell>
            <TableCell>
              {}
              <div
                className={`m-auto w-6 h-6 border rounded-full ${
                  info.status === true ? "bg-green-500" : "bg-red-500"
                }`}
              ></div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TruckTable;
