import React from 'react'
import { FOOTER_LIST } from '../utils/helper'
import { Facebook, Instagram, Linkedin } from '../utils/icons'


function Footer() {
    return (
        <div className='px-4'>
        <div className='container pt-[356px] max-lg:pt-10 max-md:pt-8'>
            <div className='flex max-sm:flex-col gap-20 max-md:gap-5 max-sm:text-center justify-between'>
                <div>
                    <a href="/">
                    <img className='max-w-[150px] max-md:max-w-[120px] max-sm:max-w-[90px]' src="/assets/images/footer-logo.webp" alt="footer logo" />
                    </a>
                </div>
                <div className='flex flex-col gap-[14px]'>
                    {FOOTER_LIST.map((obj, i) => (
                        <div key={i}>
                            <p className='text-white mb-[14px]'>{obj.heading}</p>
                            <a href='#' className='text-white opacity-70'>{obj.link}</a>
                        </div>
                    ))}
                </div>
                <div>
                    <p className='text-white'>Send Us An E-mail</p>
                    <a className='text-white mt-3' href="mailto:info@echoai.ai">info@echoai.ai</a>
                    <p className='text-white mt-8'>Follow Us On</p>
                    <div className='flex gap-3 mt-[18px] max-sm:justify-center'>
                        <a className='hover:scale-110 transition-all ease-in-out duration-300' target='_blank' href="https://www.linkedin.com/"><Linkedin /></a>
                        <a className='hover:scale-110 transition-all ease-in-out duration-300' target='_blank' href="https://www.instagram.com/"><Instagram /></a>
                        <a className='hover:scale-110 transition-all ease-in-out duration-300' target='_blank' href="https://www.facebook.com/"><Facebook /></a>
                    </div>
                </div>
            </div>
            <div className='w-full mt-[60px] h-0.5 bg-gradient-to-r from-light-white via-off-white to-light-white'></div>
            <p className='text-white text-center pt-5 pb-[30px]'>Copyright ECHO AI © {new Date().getFullYear()} | All Rights Reserved</p>
        </div>
        </div>
    )
}

export default Footer