'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string}) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
            <Link href={'/'}>
            <MenuItem active={active} setActive={setActive} item="Home">
            
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
                <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/all-courses ">
                    All Courses
                </HoveredLink>
                <HoveredLink href="/all-courses ">
                    Basic Music Theory
                </HoveredLink>
                <HoveredLink href="/all-courses ">
                    Advanced Composition
                </HoveredLink>
                <HoveredLink href="/all-courses ">
                    Song Writing 
                </HoveredLink>
                <HoveredLink href="/all-courses ">
                    Music Production
                </HoveredLink>
                </div>
            </MenuItem>

      </Menu>
    </div>
  )
}

export default Navbar
