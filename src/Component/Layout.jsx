import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='relative mx-[18px] md:mx-[60px] xl:mx-[80px]  2xl:mx-[240px] pt-7 max-xl:overflow-hidden min-h-screen z-0  '>
        {children}
    </div>
  )
}

export default Layout