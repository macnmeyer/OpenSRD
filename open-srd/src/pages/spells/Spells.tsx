import React from 'react'
import { useDatabase } from '@/context/DatabaseContext.js'
import { DataTable, columns, spellsData } from '@/components/entityTable/TableTest.js';

const Spells = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Spells Page</h1>
      <DataTable columns={columns} data={spellsData()} />
    </main>
  )
}

export default Spells