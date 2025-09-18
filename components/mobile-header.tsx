import React from 'react'
import { MobileSidebar } from './mobile-sidebar'

const MobileHeader = () => {
  return (
    <nav className='lg:hidden px-6 h-[50px] items-center flex bg-[#D23007] border-b fixed top-0 w-full z-50'>
        <MobileSidebar />
    </nav>
  )
}

export default MobileHeader