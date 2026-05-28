import React from 'react'
import { SidebarTrigger } from '@/components/ui/sidebar.js'
import { Button } from '../ui/button.js'

const SidebarToggleButton = () => {
  return (
    <>
    <SidebarTrigger>
        <Button variant="outline" size="icon"/>
    </SidebarTrigger>
    </>
  )
}

export default SidebarToggleButton