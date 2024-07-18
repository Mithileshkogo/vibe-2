"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faStar, faArrowRightToBracket } from '@fortawesome/pro-light-svg-icons';
import Logoimg from "@/assets/image/blacklogo.png";
import { Button } from "@/components/ui/button"
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>

            <nav className="w-full bg-white border-b border-black lg:px-[25px] px-[20px] lg:py-[18px] py-[20px] fixed top-0 z-20">
                <div className="mx-auto flex justify-between items-center">
                    <div className="text-black text-lg font-bold">
                        <Link href="#">
                            <Image src={Logoimg} width={150} height={40} alt="Vybecheck Logo" />
                        </Link>
                    </div>
                    <div className="hidden md:flex space-x-4">
                        <Link href="/" className="text-black font-light lg:px-[30px]">Check Now</Link>
                        <Link href="/" className="text-black font-light lg:px-[30px]">How it works</Link>
                        <Link href="/" className="text-black font-light lg:px-[30px]">Benefits</Link>
                        <Link href="/" className="text-black font-light lg:px-[30px]">Pricing</Link>
                        <Link href="/" className="text-black font-light lg:px-[30px]">About Us</Link>
                    </div>

                    <div className="lg:items-center lg:justify-around lg:block hidden lg:static sm:inset-auto sm:ml-2 sm:pr-0">
                        <Link href="/signup" className={`buttonVariants({ variant: "outline" }) lg:me-[16px] sm:me-[10px] border border-black rounded-full h-9 px-5 py-2 hover:bg-slate-100 hover:text-slate-900`}><FontAwesomeIcon icon={faStar} className='mr-1' /> Sign Up</Link>

                        <Link href="/login" className={`buttonVariants({ variant: "outline" }) border border-black rounded-full h-9 px-5 py-2 hover:bg-slate-100 hover:text-slate-900`}><FontAwesomeIcon icon={faArrowRightToBracket} className='mr-1' /> Sign In</Link>

                    </div>

                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-black focus:outline-none">
                            {isOpen ? <FontAwesomeIcon icon={faTimes} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div className="md:hidden mt-4">
                        <div className="flex flex-col">
                            <div className='py-3'>
                                <Link href="/" className="text-black font-light">Check Now</Link>
                            </div>
                            <div className='py-3'>
                                <Link href="/" className="text-black font-light">How it works</Link>
                            </div>
                            <div className='py-3'>
                                <Link href="/" className="text-black font-light">Benefits</Link>
                            </div>
                            <div className='py-3'>
                                <Link href="/" className="text-black font-light">Pricing</Link>
                            </div>
                            <div className='py-3'>
                                <Link href="/" className="text-black font-light">About Us</Link>
                            </div>
                            <div className='py-3'>
                                <div className="flex items-center justify-around sm:static sm:inset-auto sm:ml-2 sm:pr-0 sm:hidden">
                                    <Button variant="outline" className='lg:me-[16px] sm:me-[10px]' size="md"><FontAwesomeIcon icon={faStar} className='mr-1' /> Sign Up</Button>
                                    <Button variant="outline" size="md"><FontAwesomeIcon icon={faArrowRightToBracket} className='mr-1' /> Sign In</Button>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </nav >
        </>
    )
}
