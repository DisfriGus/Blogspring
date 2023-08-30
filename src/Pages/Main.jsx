import React from 'react'
import Navbar from '../Component/Navbar'
import Layout from '../Component/Layout'
import { Link } from 'react-router-dom'
import ImgPrimary from '../assets/Img/Rectangle7.svg'
import Card from '../Component/Card'

// import Img2 from '../assets/Img/Rectangle9.svg'
const Main = () => {
    return (
        <Layout>
            <Navbar />
            <div className='max-xl:pt-[74px] '>
                <div className='xl:hidden mb-6 '>
                    <div className='flex gap-8 h-fit overflow-x-auto'>
                        <Link to='/'><p>Home</p></Link>
                        <Link><p className='w-[100px]'>Case Study</p></Link>
                        <Link><p className='w-[120px]'>SDGs Program</p></Link>
                        <Link><p className='w-[150px]'>University News</p></Link>
                    </div>
                </div>
                <div>
                    <div className='flex justify-between '>
                        <h5 className='max-lg:title'>🌿 Article of The Day</h5>
                        <button className='max-lg:text-[13px]'>View More</button>
                    </div>
                    <div className='mt-3 flex flex-col 2xl:flex-row 2xl:flex-wrap justify-center items-center 2xl:justify-between'>
                        <Link to='/Blog' className='lg:p-12 rounded-md w-[100%] lg:w-[920px] h-[300px] md:h-[560px] lg:h-[780px] bg-cover flex items-end max-2xl:mb-5  bg-center' style={{backgroundImage:`url(${ImgPrimary})`}}>
                            <div className='w-[256px] lg:w-[716px] max-xl:p-4 '>
                                <p className='text-white max-lg:text-[13px]'>SDGs PROGRAM</p>
                                <h4 className='text-white max-lg:text-[24px] max-lg:leading-8 max-lg:tracking-[-1.15%]'>Design Me Live: The Power of Mascots in UI and Branding</h4>
                                <p className='textBody text-white max-lg:hidden'>Insight into visual web content: check different types of graphics used to  make web design beautiful and user-friendly, with a big bunch of UI examples and tips.</p>
                            </div>
                        </Link>
                        <div className='grid  2xl:grid-cols-2 gap-4'>
                            <Card/>
                            <Card/>
                            <Card/>
                            <Card/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Main