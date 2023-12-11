import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
          <TableHead className=" capitalize text-[22px]">price</TableHead>
          <TableHead className=" capitalize text-[22px]">expire date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium text-[18px]">
              {invoice.name}
            </TableCell>
            <TableCell className="text-[18px]">
              {invoice.availableStock}
            </TableCell>
            <TableCell className="text-[18px]">
              {invoice.reverseStock}
            </TableCell>
            <TableCell className="text-[18px]">{invoice.damageStock}</TableCell>
            <TableCell className="text-[18px]">{invoice.priceStock}</TableCell>
            <TableCell className="text-[18px]">{invoice.expireDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
