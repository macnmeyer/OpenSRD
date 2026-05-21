"use client"

import { Button } from '@/components/ui/button.js'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible.js'
import React from 'react'
import { ChevronDown } from 'lucide-react'

function CollapsibleNavMenu() {

    const [open, setOpen] = React.useState(false)

    return (
    <>
        <Collapsible open={open} onOpenChange={setOpen}>
            <CollapsibleTrigger render={<Button><span>Menu</span><ChevronDown className="h-4 w-4" /></Button>}>
                <span className="sr-only">Toggle Navigation Menu</span>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm absolute">
                <p>test</p>
            </CollapsibleContent>
        </Collapsible>
    </>
    )
}

const HeaderNav = () => {
    return (
    <div className='header-nav w-fit relative'>
        <CollapsibleNavMenu />
    </div>
  )
}

export default HeaderNav