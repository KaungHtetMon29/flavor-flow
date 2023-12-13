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
          <TableHead className="w-[200px] capitalize">
            name
          </TableHead>
          <TableHead className=" capitalize">available</TableHead>
          <TableHead className=" capitalize">reserve</TableHead>
          <TableHead className=" capitalize">damage</TableHead>
          <TableHead className=" capitalize">price</TableHead>
          <TableHead className=" capitalize">expire date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.name}>
            <TableCell className="font-medium ">
              {invoice.name}
            </TableCell>
            <TableCell>
              {invoice.availableStock}
            </TableCell>
            <TableCell>
              {invoice.reverseStock}
            </TableCell>
            <TableCell>{invoice.damageStock}</TableCell>
            <TableCell>{invoice.priceStock}</TableCell>
            <TableCell>{invoice.expireDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
