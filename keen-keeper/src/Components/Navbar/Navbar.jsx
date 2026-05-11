"use client";

import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";
import { useContext } from "react";
import { allContext } from "../../Context/Context";



const Navbar = () => {

    const { isClicked, handleNavClick } = useContext(allContext);
    

    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20 py-4">
                <div className="flex-1">
                    <h1 className="text-2xl"><span className="font-extrabold text-[#1F2937]">Keen</span><span className="font-semibold text-[#244D3F]">Keeper</span></h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className={`${isClicked === "home" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/" onClick={handleNavClick}><RiHome2Line /> Home</Link></li>
                        <li className={`${isClicked === "timeline" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/timeline" onClick={handleNavClick}><RiTimeLine />
                            Timeline</Link></li>
                        <li className={`${isClicked === "stats" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/stats" onClick={handleNavClick}><ImStatsDots />
                            Stats</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;