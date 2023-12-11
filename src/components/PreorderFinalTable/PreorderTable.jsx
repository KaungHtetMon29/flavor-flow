import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

const invoices = [
	{
		preorderId: 1,
		clientName: 'John Doe',
		DueDate: "20-12-2024",
	},

];

export function PreorderTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[150px] text-[22px]">Id</TableHead>
					<TableHead  className="text-[22px]">Client Name</TableHead>
					<TableHead  className="text-[22px]">Due Date</TableHead>
					<TableHead className="text-left text-[22px]">Status</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => (
					<TableRow key={invoice.preorderId}>
						<TableCell className="font-medium text-[18px]">
							{invoice.preorderId}
						</TableCell>
						<TableCell className="text-[18px]">{invoice.clientName}</TableCell>
						<TableCell className="text-[18px]">{invoice.DueDate}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>	
	);
}
