"use client"
import Image from "next/image"
import { CiSearch } from "react-icons/ci"
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export default function NavBar() {
    const [navOpen, setnavOpen] = useState(false);
    const [searchValue,setSearchValue]=useState("")
    const navItems = ["Categories", "For kids", "For business", "How it works", "Join as talent"]
    return <div>

        <nav className="lg:flex space-x-6 hidden   items-center">

            <Image width={85} height={10} src="https://cdn.cameo.com/staticDir/logo_white.svg" alt="CameoImage" className="mr-8" />
            {
                navItems.map((navItem) => {
                    return (
                        <div key={navItem} className="cursor-pointer  hover:bg-[#2b262b] rounded-full py-1 px-2">
                            <span >{navItem}</span>
                        </div>
                    )
                })
            }

            <div className="xl:w-[492px] lg:w-[290px] flex items-center  xl:ml-5">
                <div className="flex-1 mr-8 relative">
                    <CiSearch className="w-6 h-6 text-black absolute left-3 top-[6px]" />
                    <IoMdClose className="w-6 h-6 absolute text-black top-[6px] right-3 cursor-pointer" onClick={()=>setSearchValue("")}/>

                    <input className="rounded-full bg-white focus:outline-none pr-4 pl-[3rem] py-2 text-black text-sm w-full  " placeholder="Search for WWE..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                </div>
                <p className="w-max cursor-pointer">Log in</p>
            </div>

        </nav>

        <nav className="lg:hidden block">

            <div className="flex justify-between items-center">
                <div className="flex items-center md:justify-between gap-4 md:w-[58%]">
                    <GiHamburgerMenu className="w-6 h-6" onClick={() => setnavOpen(true)} />
                    <Image width={85} height={10} src="https://cdn.cameo.com/staticDir/logo_white.svg" alt="CameoImage" className="mr-8" />
                </div>

                <p className="w-max cursor-pointer">Log in</p>
            </div>


            <div className="relative mt-8">
                <input className=" rounded-full bg-white focus:outline-none pr-4 pl-[3rem] py-3 text-black text-sm w-full" placeholder="Search for WWE..." value={searchValue} onChange={(e)=>setSearchValue(e.target.value)}/>
                <CiSearch className="w-6 h-6 text-black absolute left-3 top-[10px]" />
                <IoMdClose className="w-6 h-6 absolute text-black top-[10px] right-3 cursor-pointer" onClick={()=>setSearchValue("")}/>
            </div>

            {navOpen && (
                <div
                    className="fixed fade top-0 w-full  h-screen bg-black/75 z-20"
                    onClick={() => setnavOpen(false)}
                ></div>
            )}

            <div
                className={`md:w-[40%] w-full  h-screen fixed top-0 left-0 z-[30] bg-black p-5 ${!navOpen ? "translate-x-[-100%]" : "translate-x-[0%]"
                    } transition-all duration-300 ease-in-out`}
            >
                <div className="flex justify-between">
                    <Image width={85} height={10} src="https://cdn.cameo.com/staticDir/logo_white.svg" alt="CameoImage" className="mr-8" />
                    <IoMdClose
                        className="text-white text-4xl"
                        onClick={() => setnavOpen(false)}
                    />
                </div>

                <ul className="mt-10">
                    {navItems.map((nav, index) => (
                        <li
                            className=" text-[16px] mb-8 "
                            key={index}
                            onClick={() => setnavOpen(false)}
                        >
                            <a
                                className="no-underline text-white cursor-pointer  transition-all duration-150 ease-linear"
                                href={"#" + nav}
                            >
                                {nav}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="absolute bottom-8 border border-gray-700 rounded-full px-6 py-2">
                    Log in
                </button>
            </div>

        </nav>

    </div>
}