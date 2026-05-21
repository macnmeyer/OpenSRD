import React from 'react'
import { useContext } from "react";
import { SpellDatabaseContext, SpellDatabaseProvider } from "../../context/DatabaseContext.js";
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
import type { ColumnDef } from "@tanstack/react-table";

import type { Spell } from "src/types/content.js";
type spellArray = Spell[];
type tableDataSpell = {
  name: string;
  cost: number;
  complexity: number;
  text: string;
}

const EntityTable = () => {

  const spells = useContext(SpellDatabaseContext);
  const data = Object.values(spells || {});

  return (
    <>
      <Table>
        <TableCaption>Spells</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Spell</TableHead>
            <TableHead>Aether Cost</TableHead>
            <TableHead>Complexity</TableHead>
            <TableHead>Text</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((spell) =>
            <TableRow key={spell.name}>
              <TableCell>{spell.name}</TableCell>
              <TableCell>{spell.cost}</TableCell>
              <TableCell>{spell.complexity}</TableCell>
              <TableCell>{spell.text}</TableCell>
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