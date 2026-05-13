'use client';

import { allContext } from '../../Context/Context';
import { useContext } from 'react';
import Image from 'next/image';
import { useState } from 'react';

import React from 'react';

const TimelineComp = () => {
    const [filter, setFilter] = useState('all');

    const { timelineData } = useContext(allContext);

    return (
        <div className='flex flex-col gap-6'>
            <div className="dropdown dropdown-hover w-fit">
                <div tabIndex={0} role="button" className="btn m-1">Filter Timeline: {filter === 'all' ? 'All' : filter === 'text' ? 'Text' : filter === 'call' ? 'Call' : 'Video'}</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><button onClick={() => setFilter('all')}>All</button></li>
                    <li><button onClick={() => setFilter('text')}>Text</button></li>
                    <li><button onClick={() => setFilter('call')}>Call</button></li>
                    <li><button onClick={() => setFilter('video')}>Video</button></li>
                </ul>
            </div>
            <div className='flex flex-col-reverse gap-6'>
                {
                    timelineData.filter((item) => filter === 'all' || item.action === filter).map((item, index) => (
                        <div key={index} className='flex items-center gap-4 bg-white p-4 rounded-md shadow-md'>
                            {item.action === 'call' ? <Image src="/assets/call.png" alt="Call Icon" width={20} height={20} /> : item.action === 'text' ? <Image src="/assets/text.png" alt="Text Icon" width={20} height={20} /> : <Image src="/assets/video.png" alt="Video Icon" width={20} height={20} />}
                            <div>
                                <p className='text-[#64748B] font-normal text-[18px]'><span className='text-[#244D3F] font-medium text-[20px]'>{item.action?.toUpperCase()}</span> with {item.name}</p>
                                <p className='text-[#94A3B8] font-normal text-[16px]'>{new Date(item.date).toLocaleString()}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default TimelineComp;