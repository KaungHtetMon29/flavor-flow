import React, { useState } from "react";
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

const PermissionTable = () => {
	const [status, setStatus] = useState("Sending");
	const [isArrowUp, setIsArrowUp] = useState(false);
	const handleDropdownOpenChange = (isOpen) => {
		setIsArrowUp(isOpen);
	};
	const invoices = [
		{
			invoice: "INV001",
			paymentStatus: "Paid",
			totalAmount: "$250.00",
		},
		{
			invoice: "INV002",
			paymentStatus: "Pending",
			totalAmount: "$150.00",
		},
		{
			invoice: "INV003",
			paymentStatus: "Unpaid",
			totalAmount: "$350.00",
		},
		{
			invoice: "INV004",
			paymentStatus: "Paid",
			totalAmount: "$450.00",
		},
		{
			invoice: "INV005",
			paymentStatus: "Paid",
			totalAmount: "$550.00",
		},
		{
			invoice: "INV006",
			paymentStatus: "Pending",
			totalAmount: "$200.00",
		},
		{
			invoice: "INV007",
			paymentStatus: "Unpaid",
			totalAmount: "$300.00",
		},
	];
	return (
		<Table>
			<TableHeader className="sticky top-0 bg-white">
				<TableRow>
					<TableHead className="w-[100px]">ID</TableHead>
					<TableHead>Client Name</TableHead>
					<TableHead>Preorder ID</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-center">
						Permission Grant
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.invoice}>
						<TableCell className="font-medium">
							{invoice.invoice}
						</TableCell>
						<TableCell>{invoice.paymentStatus}</TableCell>
						<TableCell>{invoice.totalAmount}</TableCell>
						<TableCell className="">
							<DropdownMenu
								onOpenChange={handleDropdownOpenChange}
							>
								<DropdownMenuTrigger asChild>
									<Button
										variant="outline"
										className="flex gap-3 w-40 justify-between"
									>
										<div>
											<p className="text-start text-[18px]">
												{status}
											</p>
										</div>
										<div>
											{isArrowUp ? (
												<IoIosArrowUp />
											) : (
												<IoIosArrowDown />
											)}
										</div>
									</Button>
								</DropdownMenuTrigger>
								<DropdownMenuContent className="w-52">
									<DropdownMenuSeparator />
									<DropdownMenuRadioGroup
										value={status}
										onValueChange={setStatus}
									>
										<DropdownMenuRadioItem value="Processing">
											Processing
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="Sending">
											Sending
										</DropdownMenuRadioItem>
										<DropdownMenuRadioItem value="Sent">
											Sent
										</DropdownMenuRadioItem>
									</DropdownMenuRadioGroup>
								</DropdownMenuContent>
							</DropdownMenu>
						</TableCell>
						<TableCell className="flex justify-center gap-4">
							<Button className="text-[18px] ">Grant</Button>
							<Button className="text-[18px] ">Deny</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default PermissionTable;
