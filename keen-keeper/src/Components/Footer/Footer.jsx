import React from 'react';
import Image from 'next/image';

const Footer = () => {
    return (
        <div className='bg-[#244D3F] px-61.25 pt-20 pb-7.5'>
            <div className=' flex flex-col items-center'>
                <Image className='h-16 w-64' src="/assets/logo-xl.png" alt="KeenKeeper Logo" width={300} height={300} priority />
                <p className='text-white text-[16px] opacity-80 mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='text-white font-medium text-[20px] mt-6'>Social Links</p>
                <div className='flex gap-3 mt-4 mb-10'>
                    <Image src="/assets/facebook.png" alt="Facebook" width={30} height={30} />
                    <Image src="/assets/twitter.png" alt="Twitter" width={30} height={30} />
                    <Image src="/assets/instagram.png" alt="Instagram" width={30} height={30} />
                </div>
            </div>

            <div className='text-[#FAFAFA] text-[16px] opacity-50 font-normal flex items-center justify-between border-t border-[#1A8862] pt-7.5'>
                <p >© 2024 KeenKeeper. All rights reserved.</p>
                <p className='flex gap-10'><span>Privacy Policy</span><span>Terms of Service</span><span>Cookies</span></p>
            </div>
            
        </div>
    );
};

export default Footer;