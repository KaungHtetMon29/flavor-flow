import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchStocks } from "@/redux/stockSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const invoices = [
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
  {
    name: "Coffee",
    availableStock: "13",
    reverseStock: "5",
    damageStock: "2",
    priceStock: "250.00 MMK",
    expireDate: "20-12-2024",
  },
];

export function StockTable() {
  const stocks = useSelector((state) => state.stock.stocks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStocks());
  }, []);
  return (
    <Table>
      <TableHeader className="sticky top-0 bg-white rounded-t-xl overflow-hidden">
        <TableRow>
          <TableHead className="w-[500px] capitalize text-[22px]">
            name
          </TableHead>
          <TableHead className=" capitalize text-[22px] w-[100px]">
            available
          </TableHead>
          <TableHead className=" capitalize text-[22px] w-[300px] text-right">
            unit price
          </TableHead>
          <TableHead className=" capitalize text-[22px] text-right">
            Expiry Date
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock, i) => (
          <TableRow
            key={stock.name}
            className={`w-full h-16  ${
              i % 2 !== 0 ? "bg-primarycolor bg-opacity-20" : "bg-none"
            }`}
          >
            <TableCell className="font-medium text-[18px]">
              {stock.name}
            </TableCell>
            <TableCell className="text-[18px] text-right justify-end">
              {stock.quantity}
            </TableCell>
            <TableCell className="text-[18px] text-right">
              {stock.unit_price}
            </TableCell>
            <TableCell className="text-[18px] text-right">
              {stock.stock_details[0]?.expiry_date}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
