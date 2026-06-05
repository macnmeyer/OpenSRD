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
import { Button } from '../ui/button.js';

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

function ListItem({
  url, title, description,}: {url: string, title: string }) {
  return (
    <li>
      <Button variant="ghost" className="w-full justify-start">
        <Link to={url}>
          <div className="flex flex-col">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </Link>
      </Button>
    </li>
  )
}

function NavigationMenuDemo() {
  return (
    <NavigationMenu className="text-sm md:text-base">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Rules Content</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-fit md:min-w-30">
              <ListItem url="/anthrotypes" title="Anthrotypes" />
              <ListItem url="/spells" title="Spells" />
              <ListItem url="/gear" title="Gear" />
            </ul>
          </NavigationMenuContent>
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
      <Button variant="ghost">
        <Link to="/">
          <h1 className="text-lg font-semibold">OpenSRD</h1>
        </Link>
      </Button>
      {/* <MenubarNavigation /> */}
      <NavigationMenuDemo />
    </div>
  </>
  )
}

export default Header



