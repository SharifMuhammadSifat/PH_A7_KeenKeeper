"use client";

import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";
import { useState } from "react";



const Navbar = () => {

    const [isClicked, setIsClicked] = useState("home");

    const handleClick = (e) => {
        setIsClicked(e.target.innerText.toLowerCase());
        
    }

    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20 py-4">
                <div className="flex-1">
                    <h1 className="text-2xl"><span className="font-extrabold text-[#1F2937]">Keen</span><span className="font-semibold text-[#244D3F]">Keeper</span></h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className={`${isClicked === "home" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/" onClick={handleClick}><RiHome2Line /> Home</Link></li>
                        <li className={`${isClicked === "timeline" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/timeline" onClick={handleClick}><RiTimeLine />
                            Timeline</Link></li>
                        <li className={`${isClicked === "stats" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/stats" onClick={handleClick}><ImStatsDots />
                            Stats</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;