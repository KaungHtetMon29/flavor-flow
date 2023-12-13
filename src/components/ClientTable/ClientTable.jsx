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
import { useDispatch, useSelector } from 'react-redux';
import { fetchClients } from "@/redux/clientSlice";
import NoData from "../NoData/NoData";

const ClientTable = () => {
	const clients = useSelector((state) => state.client.clients);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchClients())
	}, [])

	return (
		<Table>
			<TableHeader className="sticky top-0 bg-white">
				<TableRow>
					<TableHead className="w-[300px]">Name</TableHead>
					<TableHead>Phone No</TableHead>
					<TableHead>Address</TableHead>
					<TableHead>Region</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
			{clients.length > 0 ? (
  clients?.map((client) => (
    <TableRow key={client.id}>
      <TableCell className="font-medium">{client.name}</TableCell>
      <TableCell>{client.phone}</TableCell>
      <TableCell className="w-[500px]">{client.address}</TableCell>
      <TableCell>{client.region}</TableCell>
    </TableRow>
  ))
) : (
  <NoData/>
)}
			</TableBody>
		</Table>
	);
};

export default ClientTable;
