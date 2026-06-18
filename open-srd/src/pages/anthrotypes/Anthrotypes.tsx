import React from 'react'
import EntityHoverDisplay from '@/components/entityHoverDisplay/EntityHoverDisplay.js'


const AnthrotypesPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
        <EntityHoverDisplay entityType='spells' entityID='aegis'/>
    </div>
  )
}

export default AnthrotypesPage