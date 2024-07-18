
import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from "@/components/Navbar/navbar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Login = () => {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-start justify-start bg-white pt-[90px]">
                <div className="container">
                    <form>
                        <div className="lg:max-w-[760px]  mx-auto lg:mt-[90px] mt-[60px]">
                            <div className="grid lg:gap-4 gap-1 grid-cols-1">
                                <div className='p-1 mb-3'>
                                    <h4 className='lg:text-[32px] text-[28px] text-textprimary font-semibold figtree'>Sign In</h4>
                                    <h5 className='lg:text-[18px] text-[14px] text-textprimary font-light figtree'>Explore the world of product insights</h5>
                                </div>
                                <div className='p-1'>
                                    <Input type='email' className='lg:w-2/4 w-full' placeholder='Email id*' />
                                </div>
                                <div className='p-1'>
                                    <Input type='password' className='lg:w-2/4 w-full' placeholder='Password*' />
                                </div>
                                <div className='px-1 mb-3'><Button className='p-0 m-0 h-7 underline font-light' variant="link">Forgot Password?</Button></div>
                                <div className='p-1'>
                                    <div className="grid grid-cols-2 gap-4 content-start lg:w-2/3 w-full">
                                        <div><Button type="submit" className='w-full h-9 rounded-[12px] figtree'>Sign In</Button></div>
                                        <div><Button variant="outline" className='w-full h-9 rounded-[12px] figtree'>Cancel</Button></div>
                                    </div>
                                </div>
                                <div className='p-1'>
                                    <h5 className='font-light text-[14px] text-slate-400 mb-0 figtree'>New User?<Link href="/signup" className='py-0 text-black px-1 m-0 h-6 font-light figtree'>Sign up here</Link> </h5>
                                    <h5 className='font-light text-[14px] text-slate-400 mb-0 figtree'>Having trouble?<Button className='py-0 px-1 figtree m-0 h-6 font-light' variant="link">Talk to us</Button> </h5>
                                </div>

                            </div>
                        </div>
                    </form>
                </div >
            </main >
        </>
    )
}
export default Login