"use client";
import { ChevronsDown, Menu } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../ui/sheet";
import { Separator } from "../../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../../ui/navigation-menu";
import { Button } from "../../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "../toogle-theme";

interface RouteProps {
  href: string;
  label: string;
}


const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Home",
  },
  {
    href: "#team",
    label: "Equipo",
  },
    {
    href: "#features",
    label: "Servicios",
  },
  {
    href: "#contact",
    label: "Contactanos",
  },

];


export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
<Link href="/" className="flex items-center gap-2">
  <Image
    src="/logo.png"
    alt="Logo AutentiKids"
    width={200}
    height={250}
    className="rounded-md"
  />
</Link>

      {/* <!-- Mobile --> */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white text-[hsl(var(--primary))]" />
                   AutentiKids
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 text-[hsl(var(--primary))]">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>
            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start text-[hsl(var(--primary))]">
              <Separator className="mb-2" />

              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* <!-- Desktop --> */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
      
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src=""
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2 text-[hsl(var(--primary))] hover:text-yellow-400  hover:text-lg duration-300 ease-in-out">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
        <ToggleTheme />


      </div>
    </header>
  );
};
