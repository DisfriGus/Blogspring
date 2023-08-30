import React from 'react'
import Navbar from '../Component/Navbar'
import Layout from '../Component/Layout'
import { Link } from 'react-router-dom'
import Profile from '../assets/Img/Profile.svg'
import Thumbnail from '../assets/Img/Thumbnail.jpg'
import { TbBrandFacebook, TbBrandInstagram } from 'react-icons/tb'
const Blog = () => {
    return (
        <Layout>
            <Navbar />
            <div className='max-xl:pt-[74px]'>
                <div className='xl:hidden mb-6 '>
                    <div className='flex gap-8 h-fit overflow-x-auto'>
                        <Link to='/'><p>Home</p></Link>
                        <Link><p className='w-[100px]'>Case Study</p></Link>
                        <Link><p className='w-[120px]'>SDGs Program</p></Link>
                        <Link><p className='w-[150px]'>University News</p></Link>
                    </div>
                </div>
                <div className='xl:mx-[240px]'>
                    <h4 className='max-lg:text-[28px] max-lg:leading-[34px] max-lg:tracking-[-0.4px]'>Title: Achieving Sustainable Development Goals (SDGs) in the 2030 Plan</h4>
                    <div className='mt-4 '>
                        <div className='flex justify-between'>
                            <div className='flex items-center gap-3'>
                                <img className='w-9' src={Profile} alt="" />
                                <p className='font-generalSanz text-[16px] font-medium text-[#010626]'>Tracy Frank on September 18th 2023</p>
                            </div>
                            <div className='flex items-center gap-3 max-md:hidden'>
                                <button className='text-[24px] text-[#A6A6A6]'>
                                    <TbBrandFacebook />
                                </button>
                                <button className='text-[24px] text-[#A6A6A6]'>
                                    <TbBrandInstagram />
                                </button>
                            </div>
                        </div>
                        <div className='mt-9'>
                            <img className='' src={Thumbnail} alt="" />
                            <p className='text-center mt-3 lg:mt-4 max-md:text-[13px]'><i>Thumbnail Picture</i></p>
                        </div>
                        <div className='lg:mt-[56px] lg:w-[960px] flex flex-col gap-9 '>
                            <div className='flex flex-col gap-3'>
                                <h6>Description</h6>
                                <p className='lg:tracking-[0.207px] lg:leading-8 '>In the pursuit of a better world, the global community has rallied around the Sustainable Development Goals (SDGs), a comprehensive blueprint for achieving a more equitable, prosperous, and sustainable future for all. As we look forward to the year 2030, the importance of these goals becomes even more pronounced. The 2030 Plan stands as a beacon of hope and collective action, outlining the steps we must take to address pressing challenges while fostering an inclusive and thriving planet.</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h6>SDG Program 2030</h6>
                                <p className='lg:tracking-[0.207px] lg:leading-8'>The SDGs encompass a wide range of interconnected objectives, from eradicating poverty and hunger to ensuring quality education, gender equality, clean water, and affordable clean energy. With just a few years left until the 2030 deadline, governments, businesses, and individuals are doubling down on their efforts to turn these aspirations into tangible realities. The SDGs encompass a wide range of interconnected objectives, from eradicating poverty and hunger to ensuring quality education, gender equality, clean water, and affordable clean energy. With just a few years left until the 2030 deadline, governments, businesses, and individuals are doubling down on their efforts to turn these aspirations into tangible realities.</p>
                                <p className='lg:tracking-[0.207px] lg:leading-8'>Join us on this insightful journey as we unpack the challenges and triumphs related to the SDGs in the context of the 2030 Plan. Discover inspiring stories of communities coming together to uplift each other and the planet, and learn about the transformative power of partnerships between governments, NGOs, businesses, and ordinary citizens.</p>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h6>Key Aspects</h6>
                                <ul className='list-disc list-inside'>
                                    <li>Eradicating Poverty</li>
                                    <li>Eradicating Poverty</li>
                                    <li>Eradicating Poverty</li>
                                    <li>Eradicating Poverty</li>
                                    <li>Eradicating Poverty</li>
                                </ul>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h6>2023 Plan</h6>
                                <ul className='list-decimal list-inside'>
                                    <li>Eradicating Poverty</li>
                                    <li>Eradicating Poverty</li>
                                    <li>Eradicating Poverty</li>
                                </ul>
                            </div>
                        </div>

                        <div class="relative overflow-x-auto shadow-md rounded-lg mt-4 lg:mt-9 mb-[50px] lg:mb-[56px]">
                            <table class="w-[960px] md:w-full text-sm text-left ">
                                <thead class="text-xs text-gray-700  bg-[#F9FAFB]">
                                    <tr>
                                        <th scope="col" class="px-6 py-3 textBody">
                                            Program name
                                        </th>
                                        <th scope="col" class="px-6 py-3 textBody">
                                            Start
                                        </th>
                                        <th scope="col" class="px-6 py-3 textBody">
                                            Output
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="bg-white text-[18px]  ">
                                        <th scope="row" class="px-6 py-4 font-normal">
                                            Eradicating Poverty
                                        </th>
                                        <td class="px-6 py-4 text-[#6B7280]">
                                            2024
                                        </td>
                                        <td class="px-6 py-4 list-disc list-inside text-[#6B7280]">
                                            <li>Eradicate Poverty Across the World</li>
                                        </td>
                                    </tr>
                                    <tr class=" bg-[#F9FAFB] text-[18px] ">
                                        <th scope="row" class="px-6 py-4 font-normal ">
                                            Climate Action
                                        </th>
                                        <td class="px-6 py-4 text-[#6B7280]">
                                            2024
                                        </td>
                                        <td class="px-6 py-4 list-disc list-inside text-[#6B7280]">
                                            <li>Taking Actions Towards Climate Action</li>
                                        </td>
                                    </tr>
                                    <tr class="bg-white text-[18px]  ">
                                        <th scope="row" class="px-6 py-4 font-normal ">
                                            Making MVP
                                        </th>
                                        <td class="px-6 py-4 text-[#6B7280]">
                                            Jan 2023
                                        </td>
                                        <td class="px-6 py-4 text-[#6B7280]">
                                            Just Making MVP That's It
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            Like 250
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Blog