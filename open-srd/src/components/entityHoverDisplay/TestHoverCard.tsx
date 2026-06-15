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
type SpellCardProps = {
    name: string
    discipline: string
    cost: number | string
    complexity: number | string
    tags: string[]
    text: string
}
interface CardDisplayProps {
    type: string
    entity: Record<string, any> | string
}

export function CardDisplay ({type, entity}: CardDisplayProps) {
    switch (type) {
        case 'spells':
            const spell = entity as SpellCardProps;
            return (
                <div>
                    <h3>{spell.name}</h3>
                    <p>Discipline: {spell.discipline}</p>
                    <p>Cost: {spell.cost}</p>
                    <p>Complexity: {spell.complexity}</p>
                    <p>Tags: {spell.tags.join(', ')}</p>
                    <p>{spell.text}</p>
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
  const entity = database?.[entityType]?.[entityID];
  const type = entityType;
  console.log(Object.values(entity || 'entity error'))
  {/* Actual process: use entityType to pull the correct formatting. This needs to be stored somewhere globally. 
    We can shove it here for now and move it later */}

  return (
    <HoverCard>
        <HoverCardTrigger delay={10} closeDelay={100} render={<Button variant="link">{entity?.name || 'Entity Name Error'}</Button>} />
        <HoverCardContent className='w-50 md:w-120' lg:w-200>
            <CardDisplay type={type} entity={entity || 'No data available'} />
        </HoverCardContent> 
    </HoverCard>
  )
}


