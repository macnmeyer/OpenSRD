import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarRail, SidebarTrigger } from '../ui/sidebar.js'
import { Button } from '../ui/button.js'
import config from 'root/src/user-content/configs/sidebar/config.json' with { type: "json" };

export function SidebarToggleButton() {
  return (
    <>
    <SidebarTrigger className="fixed top-4 left-4 z-50">
        <Button variant="outline" size="icon"/>
    </SidebarTrigger>
    </>
  )
}

export const AppSidebar = () => {
  if (config.enabled === false) {
    console.log("Sidebar disabled. See sidebar config.");
    return null;
  }

  const duration = config.duration || 300; // Default to 300ms if not specified. Not working, fix
  
  return (
      <Sidebar className='h-fit w-64 z-50 transition-all fixed top-0' collapsible="icon">
        <SidebarHeader className="flex flex-row gap-2 bg-blue-200">
          <h1 className="text-lg font-bold group-data-[collapsible=icon]:hidden">Sidebar</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <p>sidebar test text</p>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="group-data-[collapsible=icon]:hidden bg-blue-200">
          <p>Footer content</p>
        </SidebarFooter>
      </Sidebar>
  )
}

export default AppSidebar