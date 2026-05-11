import React from 'react';
import Image from 'next/image';

const Friendcard = ({ friend }) => {
    return (
        <div className='p-6 flex flex-col items-center gap-4 bg-white shadow-md rounded-sm'>
            <Image className='w-20 h-20 rounded-full' src={friend.picture} alt={friend.name} width={800} height={800}/>
            <h2>{friend.name}</h2>
            <p className='text-[#64748B] text-[12px]'>{friend.days_since_contact}d ago</p>
            <div className='flex flex-wrap gap-2'>
                {
                    friend.tags.map((tag, index) => (
                        <span key={index} className='text-[#244D3F] text-[12px] bg-[#CBFADB] px-2 py-1 rounded-full'>{tag}</span>
                    ))
                }
            </div>
            <div className={`${friend.status === 'on-track' ? 'bg-green-500' : friend.status === 'overdue' ? 'bg-red-500' : 'bg-yellow-500' } text-[12px] font-regular text-white px-1 py-1 rounded-full`}>
                {friend.status}
            </div>
        </div>
    );
};

export default Friendcard;