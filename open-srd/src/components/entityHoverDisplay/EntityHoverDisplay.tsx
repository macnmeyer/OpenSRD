import React from 'react'
import { useContext, useState } from "react";
import { useDatabase } from '../../context/DatabaseContext.js';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar.js"
import { Button } from "@/components/ui/button.js"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card.js"


interface EntityHoverDisplayProps {
  entityType: string;
  entityID: string;
}
interface SpellCardProps {
    name: string
    discipline: string
    cost: number | string
    complexity: number | string
    tags: string[]
    text: string
    [key: string]: any
}
interface CardDisplayProps {
    type: string
    entity: Record<string, any> | string
}

function CardDisplay ({type, entity}: CardDisplayProps) {
    switch (type) {
        case 'spells':
            const spell = entity as SpellCardProps;
            return (
                <div>
                    <h3 className="text-lg font-bold mb-2">{spell?.name}</h3>
                    <p><span className="font-semibold">Discipline: </span>{spell?.discipline}</p>
                    <p><span className="font-semibold">Cost: </span>{spell?.cost}</p>
                    <p><span className="font-semibold">Complexity: </span>{spell?.complexity}</p>
                    <p><span className="font-semibold">Tags: </span>{spell?.tags}</p>
                    <p className="text-sm text-muted-foreground mt-2">{spell?.text}</p>
                    <p className="text-sm text-muted-foreground mt-2 italic">{spell?.source}</p>

                </div>
            );
        default:
            return (
                <div>
                    {typeof entity === 'string' ? (
                        <p>{entity}</p>
                    ) : (
                        Object.entries(entity).map(([key, value]) => (
                            <p key={key}>{key}: {value}</p>
                        ))
                    )}
                </div>
            );
    }
}


export default function EntityHoverDisplay ({ entityType, entityID }: EntityHoverDisplayProps) {

  const database = useDatabase();
  {/* console.log("Hover display database: ", Object.values(database || 'database error')); */}
  const entity = database?.[entityType]?.[entityID];
  const type = entityType;
  {/* console.log("Hover display entity: ", Object.values(entity || 'entity error')); */}
  {/* Actual process: use entityType to pull the correct formatting. This needs to be stored somewhere globally. 
    We can shove it here for now and move it later */}

  return (
    <HoverCard>
        <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link">{entity?.name || 'Entity Name Error'}</Button>} />
        <HoverCardContent className='w-50 md:w-120 lg:w-200'>
            <CardDisplay type={entityType} entity={entity || 'Entity Error'} />
        </HoverCardContent> 
    </HoverCard>
  )
}
