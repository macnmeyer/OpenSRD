import EntityTable from '@/components/entityTable/EntityTable.js'
import React from 'react'

interface EntityTablePageProps {
  title: string;
  text: string;
  entityType: string;
}

const EntityTablePage = ({ title, text, entityType }: EntityTablePageProps) => {
  return (
    <>
    <h1>{title}</h1>
    <p>{text}</p>
    <EntityTable type={entityType} />
    </>
  )
}

export default EntityTablePage