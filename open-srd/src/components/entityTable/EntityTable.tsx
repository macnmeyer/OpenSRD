import React from 'react'
import { useContext } from "react";
import { useDatabase } from "../../context/DatabaseContext.js";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table.js";

type EntityTableProps = {
  entityType: string;
}
interface ColumnFilter {
  id: string;
  value: unknown;
}

const EntityTable = ({ entityType }: EntityTableProps) => {

  const db = useDatabase();
  {/* it goes db.[entityType].[entity].[entityProperty] */}
  const tableData = db?.[entityType]
  const entities = Object.values(db?.[entityType] ?? {})
  console.log("entities:", entities)

  return (
    <>
      <Table>
        <TableCaption>{entityType}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Spell</TableHead>
            <TableHead>Aether Cost</TableHead>
            <TableHead>Complexity</TableHead>
            <TableHead>Text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {entities.map((entity) =>
            <TableRow key={entity.Name}>
              <TableCell>{entity.Name}</TableCell>
              <TableCell>{entity.Cost}</TableCell>
              <TableCell>{entity.Complexity}</TableCell>
              <TableCell>{entity.Text}</TableCell>
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
          </TableRow>
        </TableFooter>
      </Table>
    </>
  )
}

export default EntityTable