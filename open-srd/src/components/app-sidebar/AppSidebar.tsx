import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader } from '../ui/sidebar.js'

export const AppSidebar = () => {
  return (
      <Sidebar className="h-full w-64 z-50">
        <SidebarHeader>
          <h1 className="text-lg font-bold">Sidebar</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <p>sidebar test text</p>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <p>Footer content</p>
        </SidebarFooter>
      </Sidebar>
  )
}

export default AppSidebar