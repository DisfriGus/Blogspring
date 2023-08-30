import React from 'react'
import Img1 from '../assets/Img/Rectangle8.svg'
import { Link } from 'react-router-dom'
const Card = () => {
    return (
        <Link to='/Blog' className='flex 2xl:flex-col 2xl:w-[236px] items-center gap-3 lg:gap-6 2xl:gap-0'>
            <img className='w-[72px] lg:w-[284px] 2xl:w-full h-[74px] lg:h-[296px] 2xl:h-full' src={Img1} alt="" />
            <div className='2xl:mt-6'>
                <p className='text-[#4E5359] smallText max-sm:text[13px] max-sm:leading-[18px] tracking-[-0.4px] mb-1'>SDGs PROGRAM</p>
                <p className='title max-sm:text-[17px] max-sm:leading-[22px] max-sm:tracking-[-0.4px] '>Design Me Live: The Power of Mascots in UI and Branding</p>
            </div>
        </Link>
    )
}

export default Card