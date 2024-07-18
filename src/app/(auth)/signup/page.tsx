"use client";
import React, { useState } from 'react';
import { Navbar } from "@/components/Navbar/navbar";
import Link from 'next/link';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/pro-light-svg-icons';

const Signup = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextClick = () => {
        setCurrentStep((prevStep) => prevStep + 1);
    };

    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-start justify-start bg-white pt-[90px]">
                <div className="container">
                    <form>
                        {currentStep === 0 && (
                            <div className="lg:max-w-[760px] mx-auto lg:mt-[90px] mt-[30px]">
                                <div className="grid lg:gap-3 gap-1 grid-cols-1">
                                    <div className='p-1'>
                                        <h4 className='lg:text-[32px] text-[28px] text-textprimary font-semibold figtree'>Sign up</h4>
                                    </div>
                                    <div className='p-0'>
                                        <div className="flex w-full">
                                            <div className="grow">
                                                <h5 className='lg:text-[18px] text-[14px] text-textprimary font-light figtree'>Explore the world of product insights!</h5>
                                            </div>
                                            <div className="grow text-right">
                                                <Button className={`py-0 px-2 m-0 h-7 font-light text-[16px] ${currentStep === 0 ? 'text-black' : 'text-gray-400'}`} variant="link">1</Button>
                                                <Button className={`py-0 px-2 m-0 h-7 font-light text-[16px] ${currentStep === 1 ? 'text-black' : 'text-gray-400'}`} variant="link">2</Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-0'>
                                        <div className="grid lg:gap-4 gap-1 lg:grid-cols-2 grid-cols-1">
                                            <div className='p-1'>
                                                <Input type='text' className='w-full' placeholder='First name*' />
                                            </div>
                                            <div className='p-1'>
                                                <Input type='text' className='w-full' placeholder='Surname*' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-0'>
                                        <div className="grid lg:gap-4 gap-1 lg:grid-cols-2 grid-cols-1">
                                            <div className='p-1'>
                                                <Input type='email' className='w-full' placeholder='Email id*' />
                                            </div>
                                            <div className='p-1'>
                                                <Input type='text' className='w-full' placeholder='Brand Name*' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-0'>
                                        <div className="grid lg:gap-4 gap-1 lg:grid-cols-2 grid-cols-1">
                                            <div className='p-1'>
                                                <Input type='password' className='w-full' placeholder='Password*' />
                                            </div>
                                            <div className='p-1'>
                                                <Input type='password' className='w-full' placeholder='Confirm Password*' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='px-1 font-light text-placeholdertext figtree italic text-[12px]'>Password must have at least one @#$ symbol</div>
                                    <div className='p-0'>
                                        <div className="grid grid-cols-1 lg:gap-3 gap-0 content-start w-full">
                                            <div className='p-1'>
                                                <h6 className='lg:text-[16px] text-[14px] text-textprimary font-semibold figtree'>Authentication Details</h6>
                                            </div>
                                            <div className='p-1'>
                                                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-3 gap-1 content-start w-full">
                                                    <div className='w-full'>
                                                        <Input type='text' labelText="Contact Number*" className='w-full' placeholder='Contact Number*' />
                                                    </div>
                                                    <div className='w-full lg:text-left text-right self-center lg:pt-5 pt-0'>
                                                        <Button className='py-0 px-1 m-0 h-6 font-semibold' variant="link">Verify</Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='p-1'>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-4 gap-1 content-start lg:w-2/3 w-full">
                                            <div><Button type="button" className='w-full h-9 rounded-[12px] lg:w-52' onClick={handleNextClick}>Next</Button></div>
                                        </div>
                                    </div>
                                    <div className='p-1'>
                                        <h5 className='font-light text-[14px] text-slate-400 mb-0 figtree'>Already have an account?<Link href="/login" className='py-0 text-black px-1 m-0 h-7 font-light'>Sign in</Link></h5>
                                        <h5 className='font-light text-[14px] text-slate-400 mb-0 figtree'>Having trouble?<Button className='py-0 px-1 figtree m-0 h-6 font-light' variant="link">Talk to us</Button> </h5>
                                    </div>
                                </div>
                            </div>
                        )}
                        {currentStep === 1 && (
                            <div className="lg:max-w-[760px] mx-auto lg:mt-[90px] mt-[40px]">
                                <div className="grid lg:gap-4 gap-2 grid-cols-1">
                                    <div className='p-1'>
                                        <h4 className='lg:text-[32px] text-[28px] text-textprimary font-semibold figtree'> <FontAwesomeIcon onClick={() => setCurrentStep(0)} icon={faArrowLeft} className='me-2 cursor-pointer' /> Welcome Mithilesh!</h4>
                                    </div>
                                    <div className='p-0'>
                                        <div className="flex w-full">
                                            <div className="grow">
                                                <h5 className='lg:text-[18px] text-[14px] text-textprimary font-light figtree'>Please enter your amazon brand store URL to proceed</h5>
                                            </div>
                                            <div className="grow text-right">
                                                <Button className={`py-0 px-2 m-0 h-7 font-light text-[16px] ${currentStep === 0 ? 'text-black' : 'text-gray-400'}`} variant="link">1</Button>
                                                <Button className={`py-0 px-2 m-0 h-7 font-light text-[16px] ${currentStep === 1 ? 'text-black' : 'text-gray-400'}`} variant="link">2</Button>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='p-0'>
                                        <Input type='url' labelText="Amazon Brand URL*" className='w-full' placeholder='Amazon Brand URL*' />
                                    </div>
                                    <div className='p-1'>
                                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 content-start lg:w-2/3 w-full">
                                            <div><Button type="button" className='w-full h-9 rounded-[12px] lg:w-52 figtree'>Create Account</Button></div>
                                            <div><Button variant="outline" className='w-full h-9 rounded-[12px] figtree lg:w-52'>Cancel</Button></div>
                                        </div>
                                    </div>
                                    <div className='p-1'>
                                        <h5 className='font-light text-[14px] text-slate-400 mb-0 figtree'>Already have an account?<Link href="/login" className='py-0 text-black px-1 m-0 h-7 font-light'>Sign in</Link></h5>
                                        <h5 className='font-light text-[14px] text-slate-400 mb-0 figtree'>Having trouble?<Button className='py-0 px-1 figtree m-0 h-7 font-light' variant="link">Talk to us</Button> </h5>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </main>
        </>
    );
};

export default Signup;
