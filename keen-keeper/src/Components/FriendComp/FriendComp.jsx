'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { allContext } from '../../Context/Context';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";



const FriendComp = ({ friendId }) => {
    const { friends } = useContext(allContext);
    const targetedFriend = friends.find(friend => friend.id === Number(friendId));

    return (
        <>
            <div className='py-20 px-61'>
                {targetedFriend ? (
                    <div>
                        <div>
                            <div className='p-6 bg-white flex flex-col gap-3 items-center shadow-md rounded-md'>
                                <Image className='w-20 h-20 rounded-full' src={targetedFriend.picture} alt={targetedFriend.name} width={800} height={800} priority />
                                <h2 className='font-semibold text-xl text-[#1F2937]'>{targetedFriend.name}</h2>
                                <p className={`${targetedFriend.status === 'on-track' ? 'bg-green-500' : targetedFriend.status === 'overdue' ? 'bg-red-500' : 'bg-yellow-500'} text-[12px] font-regular text-white px-1 py-1 rounded-full`}>{targetedFriend.status}</p>
                                <div className='flex flex-wrap gap-2'>
                                    {
                                        targetedFriend.tags.map((tag, index) => (
                                            <span key={index} className='text-[#244D3F] text-[12px] bg-[#CBFADB] px-2 py-1 rounded-full'>{tag}</span>
                                        ))
                                    }
                                </div>
                                <p className='font-medium text-[16px] text-[#64748B]'>{targetedFriend.bio}</p>
                                <p className='font-regular text-[14px] text-[#64748B]'>Preferred: {targetedFriend.email}</p>
                            </div>
                            <div className='flex flex-col gap-2 mt-4'>
                                <button className='font-medium text-[16px] text-[#1F2937] p-4 bg-white rounded-md flex items-center justify-center gap-2 shadow-sm'>
                                    <RiNotificationSnoozeLine /> <span>Snooze 2 weeks</span>
                                </button>

                                <button className='font-medium text-[16px] text-[#1F2937] p-4 bg-white rounded-md flex items-center justify-center gap-2 shadow-sm'>
                                    <FiArchive /> <span>Archive</span>
                                </button>

                                <button className='font-medium text-[16px] text-red-500 p-4 bg-white rounded-md flex items-center justify-center gap-2 shadow-sm'>
                                    <RiDeleteBinLine color='red' /> <span>Delete</span>
                                </button>
                            </div>
                        </div>

                    </div>




                ) : (
                    <p>Friend not found</p>
                )}
            </div>

        </>
    );
};

export default FriendComp;