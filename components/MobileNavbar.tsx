'use client'

import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import Image from 'next/image'
import { navItems } from '@/constants'
import Link from 'next/link'

const MobileNavbar = () => {
  return (
    <div className="w-full px-3">
      <Sheet>
        <SheetTrigger className="w-full">
          <Image
            src="/menu.svg"
            alt="menu-icon"
            width={24}
            height={14}
            className="bg-white"
          />
        </SheetTrigger>
        <SheetTitle>{''}</SheetTitle>
        <SheetContent className="h-screen bg-black">
        <SheetClose asChild>
        <button
        type="button"
        className="absolute right-4 top-4 text-white rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 outline-none focus:outline-none focus:ring-0 focus:ring-offset-0"
        aria-label="Close"
      >
        ✕
      </button>
        </SheetClose>
      <ul className="flex flex-col mt-24 gap-6 w-full">
        {navItems.map((item) => (
          <Link key={item.id} href={item.path} className="mobileNav">
            {item.name}
          </Link>
        ))}
      </ul>
    </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavbar
