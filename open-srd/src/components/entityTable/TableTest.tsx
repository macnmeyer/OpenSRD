"use client"

import * as React from "react"
import type { ColumnDef, SortingState, } from "@tanstack/react-table";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.js"
import { Button } from "@/components/ui/button.js";
import { Badge } from "@/components/ui/badge.js";
import { Input } from "@/components/ui/input.js";

import { useDatabase } from "../../context/DatabaseContext.js";
import { ArrowUpDown, X } from "lucide-react"

type tableDataSpell = {
  name: string;
  cost: number;
  complexity: number;
  tags: string[];
  text: string;
}

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

interface ColumnFilter {
  id: string;
  value: unknown;
}
type ColumnFiltersState = ColumnFilter[];

export const columns: ColumnDef<tableDataSpell>[] = [
  {
    accessorKey: "name",
    header: ({column}) => {
      return (
        <div className="flex items-center justify-start">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            <span>Name</span>
            <span className="sr-only">Sort by Name</span>
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
        const value: string = row.getValue("name");
        return <div className="font-medium">{value}</div>
    },
    size: 200,
  },
  {
    accessorKey: "cost",
    header: ({column}) => {
      return (
        <div className="flex items-center justify-start">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            <span>Cost</span>
            <span className="sr-only">Sort by Cost</span>
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
        const value: number = row.getValue("cost");
        return <div className="font-medium">{value}</div>
    },
    size: 120,
  },
  {
    accessorKey: "complexity",
    header: ({column}) => {
      return (
        <div className="flex items-center justify-start">
          <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
            <span>Complexity</span>
            <span className="sr-only">Sort by Complexity</span>
            <ArrowUpDown className="h-4 w-4" />
          </Button>
        </div>
      )
    },
    cell: ({ row }) => {
        const value: number = row.getValue("complexity");
        return <div className="font-medium">{value}</div>
    },
    size: 120,
  },
  {
    accessorKey: "tags",
    header: () => <div>Tags</div>,
    cell: ({ row }) => {
        const value: string[] = row.getValue("tags");
        return <div className="font-medium">{value.map((tag) => <Badge key={tag} className="mr-2">{tag}</Badge>)}</div>
    },
    size: 300,
    filterFn: "includesString",
  },
  {
    accessorKey: "text",
    header: () => <div>Text</div>,
    cell: ({ row }) => {
        const value: string = row.getValue("text");
        return <div className="truncate whitespace-nowrap overflow-hidden">{value}</div>
    },
  },
];

export function DataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const table = useReactTable({
    data, columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),

    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,

    enableColumnResizing: true,
    columnResizeMode: "onChange",
    defaultColumn: {
        size: 150,
    },
  })

  return (
    <div className="overflow-hidden rounded-md border bg-gray-200">
      <div className="search-bar-wrapper flex items-center p-2">
        <Input placeholder="Filter by Tag" value={(table.getColumn("tags")?.getFilterValue() as string) ?? ""} onChange={(event) => table.getColumn("tags")?.setFilterValue(event.target.value)} className="w-120 bg-gray-100" />
        <Button onClick={() => table.resetColumnFilters()}><X className="h-4 w-4" /></Button>
      </div>
      <Table className="table-fixed w-full">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const isLastHeader = headerGroup.headers.length - 1 === header.index;
                return (
                  <TableHead key={header.id} style={ isLastHeader ? { width: "100%" } : { width: header.getSize() }} className="relative">
                    {flexRender(header.column.columnDef.header , header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} style={{ width: cell.column.getSize() }}>
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
    </div>
  )
}

