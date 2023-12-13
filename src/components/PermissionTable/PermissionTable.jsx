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
	const [isGrant, setIsGrant] = useState(true);

	const handleDropdownOpenChange = (isOpen) => {
		setIsArrowUp(isOpen);
	};

	const invoices = [
		{
			invoice: "INV001",
			paymentStatus: "Paid",
			totalAmount: "$250.00",
		},
	];

	const handleClick = () => {
		setIsGrant(!isGrant )
	}
	
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
						<TableCell className="flex justify-center gap-4 flex-row-reverse">
								<Button
									className="text-[18px]"
									disabled={isGrant}
									onClick={handleClick}
								>
									Grant
								</Button>
								<Button
									className="text-[18px]"
									disabled={!isGrant}
									onClick={handleClick}
								>
									Deny
								</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default PermissionTable;
