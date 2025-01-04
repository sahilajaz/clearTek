'use client'

import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { navItems } from '@/constants'
import Link from 'next/link'
  
const MobileNavbar = () => {

  return (
    <div className='w-full'>
      <Sheet>
      <SheetTrigger className='w-full'> 
      <Image src='/menu.svg' alt="menu-icon" width={24} height={14} />
      </SheetTrigger>
      <SheetTitle>{''}</SheetTitle>
      <SheetContent className='h-screen bg-[#0060de]'>
         <ul className="flex flex-col mt-24 gap-6 w-full">
              {
                navItems.map((item) => (
                  <Link key={item.id} href={item.path} className="mobileNav">{item.name}</Link>
                ))
              }
            </ul>
      </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileNavbar
