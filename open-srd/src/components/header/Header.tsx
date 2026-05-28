import React from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar.js"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu.js"
import { CircleAlertIcon, CircleCheckIcon, CircleDashedIcon } from "lucide-react"
import { SidebarTrigger } from '../ui/sidebar.js';
import { Link } from 'react-router'

function MenubarNavigation() {
  return (
    <Menubar className="w-fit">
      <MenubarMenu>
        <MenubarTrigger>Content</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link to="/anthrotypes">Anthrotypes</Link>
          </MenubarItem>
          <MenubarItem>
            Gear
          </MenubarItem>
          <MenubarItem>
            <Link to="/spells">Spells</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Other</MenubarTrigger>
        <MenubarContent>
          <MenubarGroup>
            <MenubarItem>
              Settings
            </MenubarItem>
            <MenubarItem>
              Help
            </MenubarItem>
          </MenubarGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>With Icon</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-50">
              <li>
                <NavigationMenuLink render={<CircleAlertIcon />} />
                <NavigationMenuLink render={<CircleDashedIcon />} />
                <NavigationMenuLink render={<CircleCheckIcon />} />
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} render={<CircleAlertIcon />} />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const Header = () => {
  return (
    <>
    <div className='w-full h-12 flex bg-blue-100 justify-center items-center'>
      <SidebarTrigger />
      <h1>OpenSRD</h1>
      <MenubarNavigation />
      <NavigationMenuDemo />
    </div>
  </>
  )
}

export default Header



