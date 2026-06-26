import React from 'react'
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarRail, SidebarTrigger } from '../ui/sidebar.js'
import { Button } from '../ui/button.js'
import config from 'root/src/user-content/configs/sidebar/config.json' with { type: "json" };
import navLinks from 'root/src/user-content/nav-menu-links/nav_menu_links.json' with { type: "json" };
import { Link } from 'react-router'

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

  if (!navLinks || navLinks.length === 0) {
    console.log("No nav links found. Sidebar will not render.");
    return null;
  }
  const menuItemArray = Object.values(navLinks)
  console.log("Menu Item Array:", menuItemArray);


  if (config.enabled === false) {
    console.log("Sidebar disabled. See sidebar config.");
    return null;
  }

  const duration = config.duration || 300; // Default to 300ms if not specified. Not working, fix

  return (
      <Sidebar className='h-fit w-64 z-50 transition-all duration-0 absolute top-0' collapsible="icon">
        <SidebarHeader className="flex flex-row gap-2 bg-blue-200">
          <SidebarTrigger className="top-4 left-4 z-50" />
          <h1 className="text-lg font-bold group-data-[collapsible=icon]:hidden">Sidebar</h1>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className="group-data-[collapsible=icon]:hidden">
            <ul className="flex flex-col gap-2">
              {menuItemArray.map((item, index) => (
                <li key={index}>
                  <Link to={item.url} className="flex flex-row gap-1">
                    {item.icon && <span>{item.icon}</span>}
                    {item.label && <p>{item.label}</p>}
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="group-data-[collapsible=icon]:hidden bg-blue-200">
          <p>Footer content</p>
        </SidebarFooter>
      </Sidebar>
  )
}

export default AppSidebar