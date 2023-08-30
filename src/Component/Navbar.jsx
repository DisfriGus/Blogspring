import React, { useState } from 'react'
import Logo from '../assets/Img/Logo/blogspring..svg'
import { TbUserCircle, TbSearch, TbX } from 'react-icons/tb'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='mx-[-18px] md:mx-[-60px] xl:mx-[0px] px-[18px] md:px-[60px] xl:px-[0] mt-[-28px] py-7 w-full max-xl:fixed bg-white'>
            <div className='flex justify-between items-center   '>
                <div className='flex gap-8 items-center'>
                    <img className='w-[113px] h-[28px] ' src={Logo} alt="" />
                    <div className='flex gap-8 max-xl:hidden'>
                        <Link to='/'><p>Home</p></Link>
                        <Link><p>Case Study</p></Link>
                        <Link><p>SDGs Program</p></Link>
                        <Link><p>University News</p></Link>
                    </div>

                </div>
                <div className='flex gap-6'>
                    <button>
                        <TbSearch className='text-[24px]' />
                    </button>
                    <button className='px-8 py-2 max-xl:hidden'>
                        <p>Login</p>
                    </button>
                    <button className='bg-[#010626] px-8 py-2 rounded-lg max-xl:hidden '>
                        <p className='text-white'>Sign Up</p>
                    </button>
                    <button className='xl:hidden text-[24px]' onClick={() => setOpen(!open)}>
                        <TbUserCircle />
                    </button>
                </div>
            </div>
            <div className={`xl:hidden absolute -top-6 right-0 min-h-screen w-[100%] z-[100] transition-all duration-500 pt-6 mt-[80px]  ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className={`w-[60%] min-h-screen absolute px-4 z-[100] bg-white right-0 transition-all duration-500 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className='flex justify-between z-50'>
                        <p>Account</p>
                        <button onClick={() => setOpen(false)}>
                            <TbX className='text-[24px]' />
                        </button>
                    </div>
                    <div className='absolute bottom-28 left-0 w-full'>
                        <div className='flex flex-col justify-center px-4 md:px-16 '>
                            <button className='px-8 py-2 xl:hidden'>
                                <p>Login</p>
                            </button>
                            <button className='bg-[#010626] px-8 py-2 rounded-lg xl:hidden '>
                                <p className='text-white'>Sign Up</p>
                            </button>

                        </div>
                    </div>
                </div>
                <div className={` bg-[#01062626] absolute left-[0] top-7 w-[40%] opacity-100  min-h-screen ${open ? 'translate-x-0' : 'hidden'}`} >

                </div>
            </div>
        </div>

    )
}

export default Navbar