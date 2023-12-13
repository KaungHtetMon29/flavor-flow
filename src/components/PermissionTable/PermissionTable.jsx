import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from 'react-redux';
import { acceptGrant, fetchPreOrders, removeGrant } from "../../redux/preOrderSlice";
import NoData from "../NoData/NoData";
import { updateStatus } from "../../redux/preOrderSlice";
import { updatePreOrder } from "../../redux/preOrderSlice";
const PermissionTable = () => {
	const [status, setStatus] = useState('pending');
	const dispatch = useDispatch();
	// const unPermitOrders = useSelector((state) => state.preorder.unPermitOrders);
	// const preOrders = useSelector((state) => state.preorder.preOrders);
	const urgentOrders = useSelector((state) => state.preorder.urgentOrders);
	  console.log(urgentOrders)

	  const handleClick = (id, grant) => {
		console.log(grant)
		if(grant) {
			dispatch(acceptGrant(id));

		} else {
			dispatch(removeGrant(id));

		}
	  }

	const updateOrderStatus = (id, value) => {
		dispatch(updateStatus({id, value}));
		dispatch(updatePreOrder({id, value}))
		setStatus(value)
 };

	useEffect(() => {
		dispatch(fetchPreOrders())
	},[])
	
	return (
		<Table>
			<TableHeader className="sticky top-0 bg-white">
				<TableRow>
					<TableHead className="w-[100px]">ID</TableHead>
					<TableHead>Client Name</TableHead>
					<TableHead>Date</TableHead>
					<TableHead>Status</TableHead>
					<TableHead className="text-center">
						Permission Grant
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{ urgentOrders.length > 0 ? (
					urgentOrders.map((urgentOrder) => (
						<TableRow key={urgentOrder.id}>
							<TableCell className="font-medium">
								{urgentOrder.id}
							</TableCell>
							<TableCell>{urgentOrder.client.name}</TableCell>
							<TableCell>{urgentOrder.order_date}</TableCell>
							<TableCell className="">
								<DropdownMenu
									
								>
									<DropdownMenuTrigger asChild>
										<Button
											variant="outline"
											className="flex gap-3 w-40 justify-between"
										>
											<div>
												<p className="text-start text-[18px]">
													{urgentOrder.order_status}
												</p>
											</div>
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent className="w-56">
                      <DropdownMenuSeparator />
                      <DropdownMenuRadioGroup
                        onValueChange={(e) => updateOrderStatus(urgentOrder.id, e)}
						disabled
                      >
                        <DropdownMenuRadioItem value="pending" disabled>
                          Pending
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="processing" disabled>
                          Processing
                        </DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="delivered" disabled>
                          Delivered
                        </DropdownMenuRadioItem>
                      </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
								</DropdownMenu>
							</TableCell>
							<TableCell className="flex justify-center gap-4 flex-row-reverse">
									<Button
										className="text-[18px]"
										onClick={() => handleClick(urgentOrder.id, urgentOrder.isGrant)}
									>
										{!urgentOrder.isGrant ? 'grant' : 'decline'}
									</Button>
							</TableCell>
						</TableRow>
					))
				) : (
					<NoData/>
				) }
			</TableBody>
		</Table>
	);
};

export default PermissionTable;
