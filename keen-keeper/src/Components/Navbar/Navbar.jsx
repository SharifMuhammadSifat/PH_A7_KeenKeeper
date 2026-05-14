"use client";

import { RiHome2Line } from "react-icons/ri";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";
import Link from "next/link";
import { useContext } from "react";
import { allContext } from "../../Context/Context";
import Image from "next/image";



const Navbar = () => {

    const { isClicked, handleNavClick } = useContext(allContext);
    

    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-20 py-4">
                <div className="flex-1">
                    <Image className="w-36 h-7" src="/assets/logo.png" alt="KeenKeeper Logo" width={100} height={100} priority />
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className={`${isClicked === "home" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/" onClick={() => handleNavClick("home")}><RiHome2Line /> Home</Link></li>
                        <li className={`${isClicked === "timeline" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/timeline" onClick={() => handleNavClick("timeline")}><RiTimeLine />
                            Timeline</Link></li>
                        <li className={`${isClicked === "stats" ? "bg-[#244D3F] text-white" : ""} rounded`}><Link href="/stats" onClick={() => handleNavClick("stats")}><ImStatsDots />
                            Stats</Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;