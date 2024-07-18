"use client"
import React, { useState } from 'react';
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faUsers, faScaleUnbalancedFlip, faTags, faCircleUser, faArrowRightToBracket, faGear } from '@fortawesome/pro-thin-svg-icons';
import { faBoxOpen as faBoxOpens, faUsers as faUserss, faScaleUnbalancedFlip as faScaleUnbalancedFlips, faTags as faTagss, faCircleUser as faCircleUsers, faArrowRightToBracket as faArrowRightToBrackets, faGear as faGears } from '@fortawesome/pro-solid-svg-icons';
export const Sidebar = () => {

    return (
        <>
            <div className='w-[80px] h-dvh border-r border-black fixed top-0 left-0 pt-[100px] pb-[20px] lg:flex hidden text-center bg-white flex flex-col justify-between'>
                <div className='py-1'>
                    <div className='flex flex-col justify-between'>
                        <div className='p-3 mb-3'>
                            <Link href="#">
                                <FontAwesomeIcon className='text-[22px]' icon={faBoxOpen} />
                            </Link>
                        </div>
                        <div className='p-3 mb-3'>
                            <Link href="#">
                                <FontAwesomeIcon className='text-[22px]' icon={faUsers} />
                            </Link>
                        </div>
                        <div className='p-3 mb-3'>
                            <Link href="#">
                                <FontAwesomeIcon className='text-[22px]' icon={faScaleUnbalancedFlip} />
                            </Link>
                        </div>
                        <div className='p-3'>
                            <Link href="#">
                                <FontAwesomeIcon className='text-[22px]' icon={faTags} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='p-1'>
                    <div className='flex flex-col justify-between'>
                        <div className='p-3 mb-3'>
                            <Link href="#">
                                <FontAwesomeIcon className='text-[22px]' icon={faCircleUser} />
                            </Link>
                        </div>
                        <div className='p-3 mb-3'>
                            <Link href="#">
                                <FontAwesomeIcon className='text-[22px]' icon={faArrowRightToBracket} />
                            </Link>
                        </div>
                        <div className='p-3'>
                            <Link href="#">
                                <FontAwesomeIcon className='text-[22px]' icon={faGear} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
