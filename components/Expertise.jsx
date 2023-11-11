import React from 'react'
import HeroText from './HeroText'
import AnimatedText from './AnimatedText'
import Image from 'next/image'
import heroImg from "@/public/heroImg3.png"
import img1 from "@/public/half-circle.png"
import webDev2 from "@/public/service-icon3.png"
import webDesign from "@/public/service-icon2.png"

const Expertise = () => {
    return (
        <div className='mt-[80px] sm:mt-[30px] xs:mt-[20px] relative'>
            <h2 className='uppercase w-full text-center text-yellow-600 font-semibold text-xl'>What I do</h2>
            <AnimatedText text="My Expertise" className="uppercase sm:text-4xl" />
            <Image src={img1} className='absolute h-[40px] w-auto top-10 right-10 sm:right-4 sm:h-[20px] md:top-[100px] animate-mover'/>
            <div className='flex gap-2 justify-between md:flex-col-reverse md:justify-center items-center md:gap-4'>
                <div className='flex flex-col items-center justify-center w-[50%] md:w-full gap-8'>
                    <div className=' h-max py-5  flex items-center text-center  w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light dark:text-light gap-5 md:flex-col md:h-max md:gap-2 group cursor-pointer '>
                        <div className='absolute top-1 -right-2 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-2xl rounded-tr-2xl' />
                        <figure className='mb-0 md:h-1/4 md:w-auto w-[20%] h-full p-4 flex items-center justify-center bg-gray-200 rounded-full'>
                            <Image src={webDev2} className=' p-2 group-hover:-translate-y-1 group-hover:transition ease-out delay-150 duration-300' />
                        </figure>
                        <div className='flex flex-col gap-2 w-[80%] md:w-full justify-center items-center '>
                            <h1 className='text-lg font-semibold text-left md:text-center w-full'>Web Development </h1>
                            <p className='text-left text-sm font-light md:text-center'>I am specialized in proficient web development services with agile and scalable methodologies.</p>
                        </div>

                    </div>
                    <div className=' h-max py-5  flex items-center text-center  w-full p-4 bg-light border border-solid border-dark rounded-2xl relative dark:bg-dark dark:border-light dark:text-light gap-5 md:flex-col md:h-max md:gap-2 group cursor-pointer '>
                        <div className='absolute top-1 -right-2 -z-10 w-[101%] h-[101%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-2xl rounded-tr-2xl' />
                        <figure className='mb-0 md:h-1/4 md:w-auto w-[20%] h-auto p-4 flex items-center justify-center bg-gray-200 rounded-full '>
                            <Image src={webDesign} className=' w-full h-auto p-2 group-hover:-translate-y-1 group-hover:transition ease-out delay-150 duration-300' />
                        </figure>
                        <div className='flex flex-col gap-2 w-[80%] md:w-full justify-center items-center '>
                            <h1 className='text-lg font-semibold text-left md:text-center w-full'>Web Designing </h1>
                            <p className='text-left text-sm font-light md:text-center'>I am specialized in proficient web development services with agile and scalable methodologies.</p>
                        </div>

                    </div>
                </div>
                <div className='h-[60vh] w-auto relative xs:h-max'>
                    {/* <Image src={heroImg} width={1000} height={1000} className='absolute'/>
                 */}
                    <Image alt="Yeah, it's me here" src={heroImg} className='w-auto h-full sm:h-[50vh] xs:h-[40vh] inline-block' />

                </div>
            </div>
        </div>
    )
}

export default Expertise