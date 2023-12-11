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
	];


	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="text-[22px] `w-[200px]">
						Truck ID
					</TableHead>
					<TableHead className="text-[22px]">Capacity</TableHead>
					<TableHead className="text-[22px]">Driver Name</TableHead>
					<TableHead className="text-[22px]">Driver Ph No.</TableHead>
					<TableHead className="text-[22px] text-center">Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
					{truckInfos.map((info) => (
						<TableRow key={info.truckId}>
							<TableCell className="text-[18px]">{info.truckId}</TableCell>
							<TableCell className="text-[18px]">{info.capacity}</TableCell>
							<TableCell className="text-[18px]">{info.driverName}</TableCell>
							<TableCell className="text-[18px]">{info.driverPhone}</TableCell>
                            <TableCell className="">
                                {}
                                <div className={`m-auto w-5 h-5 border rounded-full ${info.status === true ? "bg-green-500" : "bg-red-500"}`}></div>
                            </TableCell>
						</TableRow>
					))}
			</TableBody>
		</Table>
	);
};

export default TruckTable;
