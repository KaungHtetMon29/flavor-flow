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

import { useDispatch, useSelector } from "react-redux";
import { fetchClients } from "@/redux/clientSlice";
import LoadingComp from "../loading/Loading";
import NoData from "../NoData/NoData";

const ClientTable = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.client.clients);
  const isLoading = useSelector((state) => state.client.isLoading);
  useEffect(() => {
    console.log("ran");
    dispatch(fetchClients());
  }, []);
  return (
    <>
      {console.log(selector)}
      {isLoading ? (
        <LoadingComp />
      ) : selector.length === 0 ? (
        <NoData />
      ) : (
        <Table>
          <TableHeader className="sticky top-0 bg-white">
            <TableRow>
              {console.log(selector)}
              <TableHead className="w-64">Client Id</TableHead>
              <TableHead className="w-[300px]">Name</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Region</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {selector.map((invoice, i) => (
              <TableRow
                key={invoice.id}
                className={`w-full h-[60px] ${
                  i % 2 !== 0 ? "bg-primarycolor bg-opacity-[.05]" : "bg-none"
                }`}
              >
                <TableCell>{invoice.id}</TableCell>
                <TableCell className="font-medium">{invoice.name}</TableCell>
                <TableCell>{invoice.phone}</TableCell>
                <TableCell className="w-[500px]">{invoice.address}</TableCell>
                <TableCell>{invoice.region}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
};

export default ClientTable;
