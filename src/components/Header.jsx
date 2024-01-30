import { useState } from 'react';
import React from 'react';
import logo from './../assets/images/logo.png';
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import Headeritem from './Headeritem';

function Header() {
    const [toggle, setToggle] = useState(false);
    const menu = [
        {
            name: 'HOME',
            icon: HiHome
        },
        {
            name: 'SEARCH',
            icon: HiMagnifyingGlass
        },
        {
            name: 'WATCH LIST',
            icon: HiPlus
        },
        {
            name: 'ORIGINALS',
            icon: HiStar
        },
        {
            name: 'MOVIES',
            icon: HiPlayCircle
        },
        {
            name: 'SERIES',
            icon: HiTv,
        }
    ];

    return (
        <div className="flex justify-between items-center w-screen mt-3 ">
            <div className='flex gap-3 items-center mt-0'>
                <img src={logo} className='w-[80px] md:w-[115px] object-cover ' />
                <div className='hidden md:flex gap-8 cursor-pointer'>
                    {
                        menu.map((item) => (
                            <Headeritem name={item.name} Icon={item.icon} />
                        ))
                    }
                </div>
                <div className='flex md:hidden gap-5 cursor-pointer'>
                    {
                        menu.map((item, index) => index < 3 && (
                            <Headeritem name={""} Icon={item.icon} />
                        ))
                    }
                    <div className='md:hidden ' onClick={() => setToggle(!toggle)}>
                        <Headeritem name='' Icon={HiDotsVertical} />
                        {toggle ? (
                            <div className='flex justify-center'>
                                <div className='absolute mt-3 border-[1px] border-gray-700 bg-black p-3 mr-5 px-4 py-3.5 '>
                                    {
                                        menu.map((item, index) => index > 2 && (
                                            <Headeritem name={item.name} Icon={item.icon} />
                                        ))
                                    }
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
            <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                className='w-[40px] rounded-full' />
        </div>
    );
}

export default Header;
