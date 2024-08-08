"use client";

import React, { useState } from "react";
import {
	ColumnDef,
	flexRender,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from "@/components/ui/dialog";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
}

export function DataTable<TData, TValue>({
	columns,
	data,
}: DataTableProps<TData, TValue>) {
	const [selectedRowData, setSelectedRowData] = useState<TData | null>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
	});

	const handleRowClick = (rowData: TData) => {
		setSelectedRowData(rowData);
		setIsDialogOpen(true);
	};

	return (
		<div className="w-full h-[40vh]">
			<Table className="border-none h-full">
				<TableHeader className="sticky top-0 bg-[#272731] z-10">
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<TableHead key={header.id} className="text-base">
									{header.isPlaceholder
										? null
										: flexRender(
												header.column.columnDef.header,
												header.getContext()
										  )}
								</TableHead>
							))}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{data.length ? (
						table.getRowModel().rows.map((row, index) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}
								className={`${
									index % 2 === 0 ? "bg-[#272731]" : "bg-[#2A2A35]"
								} text-gray-200 text-xs hover:bg-black hover:cursor-pointer`}
								onClick={() => handleRowClick(row.original)}
							>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>

			<Dialog open={isDialogOpen} onOpenChange={() => setIsDialogOpen(false)}>
				<DialogTrigger asChild></DialogTrigger>
				<DialogContent className="text-white min-h-[40vh]">
					<DialogHeader>
						<DialogTitle className="text-center">Prompt</DialogTitle>
						<DialogDescription>
							{selectedRowData
								? (selectedRowData as any).Prompt || "No Prompt available"
								: "No data available."}
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
}
