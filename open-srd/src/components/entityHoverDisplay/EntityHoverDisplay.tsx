import React from 'react'
import { useContext, useState } from "react";
import { DatabaseContext } from '../../context/DatabaseContext.js';

type EntityHoverDisplayProps = {
  entityID: string;
  children: React.ReactNode;
}

{/* To-do: Make this more generic to work with any entity type, not just spells. */}

export default function EntityHoverDisplay ({ entityID, children }: EntityHoverDisplayProps) {

  const database = useContext(DatabaseContext);
  const entity = database?.[entityID];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative w-fit"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      {children}

      {/* Drawn hover box */}
      {isOpen && (
        <div className="absolute left-0 top-full h-fit w-2xl bg-gray-700 text-white p-4 rounded shadow-lg z-50">
          {Object.entries(entity || {}).map(([key, value]) => (
            <div key={key} className="mb-2">
              <strong>{key}:</strong> {String(value)}
            </div>
          ))}
        </div>
      )}

    </span>
  )
}


