import EntityTable from '@/components/entityTable/EntityTable.js'
import React from 'react'
import { useDatabase } from '@/context/DatabaseContext.js'

const Spells = () => {

  const db = useDatabase();

  return (
    <main className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Spells Page</h1>
      <EntityTable entityType="spells" />
    </main>
  )
}

export default Spells