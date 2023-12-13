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
      <TableHeader className="sticky top-0 bg-white">
        <TableRow>
          <TableHead className="w-[200px] capitalize text-[22px]">
            name
          </TableHead>
          <TableHead className=" capitalize text-[22px]">available</TableHead>
          <TableHead className=" capitalize text-[22px]">reserve</TableHead>
          <TableHead className=" capitalize text-[22px]">damage</TableHead>
          <TableHead className=" capitalize text-[22px]">unit price</TableHead>
          <TableHead className=" capitalize text-[22px]">Expiry Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stocks.map((stock) => (
          <TableRow key={stock.name}>
            <TableCell className="font-medium text-[18px]">
              {stock.name}
            </TableCell>
            <TableCell className="text-[18px]">{stock.quantity}</TableCell>
            <TableCell className="text-[18px]">{stock.reverseStock}</TableCell>
            <TableCell className="text-[18px]">{stock.damageStock}</TableCell>
            <TableCell className="text-[18px]">{stock.unit_price}</TableCell>
            <TableCell className="text-[18px]">
              {stock.stock_details[0]?.expiry_date}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
