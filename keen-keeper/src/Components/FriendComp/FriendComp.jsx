'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { allContext } from '../../Context/Context';
import { RiNotificationSnoozeLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import { toast } from 'react-toastify';
import { notFound } from 'next/navigation';



const FriendComp = ({ friendId }) => {
    const { friends, loading } = useContext(allContext);
    const targetedFriend = friends.find(friend => friend.id === Number(friendId));

    const { timelineData, setTimelineData } = useContext(allContext);

    const handleCall = () => {
        const newTimelineEntry = {
            date: new Date().toISOString(),
            name: targetedFriend.name,
            friendId: targetedFriend.id,
            action: 'call'
        };
        setTimelineData([...timelineData, newTimelineEntry]);
        toast.success("Call with " + targetedFriend.name, {
            position: "top-center",
        });

    };

    const handleText = () => {
        const newTimelineEntry = {
            date: new Date().toISOString(),
            name: targetedFriend.name,
            friendId: targetedFriend.id,
            action: 'text'
        };
        setTimelineData([...timelineData, newTimelineEntry]);
        toast.success("Text message with " + targetedFriend.name, {
            position: "top-center",
        });

    };

    const handleVideo = () => {
        const newTimelineEntry = {
            date: new Date().toISOString(),
            name: targetedFriend.name,
            friendId: targetedFriend.id,
            action: 'video'
        };
        setTimelineData([...timelineData, newTimelineEntry]);
        toast.success("Video call with " + targetedFriend.name, {
            position: "top-center",
        });

    };

    if (loading) {
        return <div className="flex justify-center mt-20">
            <span className="loading loading-spinner loading-xl"></span>
        </div>;
    }

    return (
        <>
            <div className='py-20 px-61 bg-[#F8FAFC]'>
                {targetedFriend ? (
                    <div className='grid grid-cols-3 gap-6'>
                        <div className='col-span-1'>
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
                                <button className='font-medium text-[16px] text-[#1F2937] p-4 bg-white rounded-md flex items-center justify-center gap-2 shadow-sm cursor-pointer '>
                                    <RiNotificationSnoozeLine /> <span>Snooze 2 weeks</span>
                                </button>

                                <button className='font-medium text-[16px] text-[#1F2937] p-4 bg-white rounded-md flex items-center justify-center gap-2 shadow-sm cursor-pointer '>
                                    <FiArchive /> <span>Archive</span>
                                </button>

                                <button className='font-medium text-[16px] text-red-500 p-4 bg-white rounded-md flex items-center justify-center gap-2 shadow-sm cursor-pointer '>
                                    <RiDeleteBinLine color='red' /> <span>Delete</span>
                                </button>
                            </div>
                        </div>

                        <div className='col-span-2 flex flex-col justify-between gap-6'>
                            <div className='flex justify-between gap-2.5 text-center'>
                                <div className=' py-8 px-4 bg-white flex flex-col gap-2 items-center shadow-md rounded-md w-full'>
                                    <span className=' text-[30px] font-semibold text-[#244D3F]'>{targetedFriend.days_since_contact}</span> <span className='text-[#64748B] text-[18px] font-normal'>Days Since Contact</span>
                                </div>
                                <div className=' py-8 px-4 bg-white flex flex-col gap-2 items-center shadow-md rounded-md w-full'>
                                    <span className=' text-[30px] font-semibold text-[#244D3F]'>{targetedFriend.goal}</span> <span className='text-[#64748B] text-[18px] font-normal'>Goal (Days)</span>
                                </div>
                                <div className=' py-8 px-4 bg-white flex flex-col gap-2 items-center shadow-md rounded-md w-full'>
                                    <span className=' text-[30px] font-semibold text-[#244D3F]'>{targetedFriend.next_due_date}</span> <span className='text-[#64748B] text-[18px] font-normal'>Next Due</span>
                                </div>
                            </div>

                            <div className='p-6 bg-white shadow-md rounded-md'>
                                <div className='flex justify-between'>
                                    <h2 className='text-[#244D3F] font-medium text-[20px]'>Relationship Goal</h2>
                                    <button className='border border-[#E9E9E9] font-mediumtext-[16px] bg-[#F8FAFC] p-2 rounded-md cursor-pointer'>Edit</button>
                                </div>
                                <div className=''>
                                    <p className='text-[#64748B] font-normal text-[18px]'>Connect every <span className='text-[#1F2937] font-bold' >30 days</span></p>
                                </div>
                            </div>

                            <div className='flex flex-col bg-white shadow-md rounded-md p-6 gap-4'>
                                <h1 className='text-[#244D3F] font-medium text-[20px]'>Quick Check-In</h1>
                                <div className='flex justify-between gap-4'>
                                    <button onClick={handleCall} className='border border-[#E9E9E9] font-mediumtext-[16px] bg-[#F8FAFC] p-4 rounded-md flex flex-col items-center gap-2 w-full cursor-pointer'>
                                        <Image className='w-5 h-5' src="/assets/call.png" alt="Call Icon" width={20} height={20} />
                                        <p>Call</p></button>
                                    <button onClick={handleText} className='border border-[#E9E9E9] font-mediumtext-[16px] bg-[#F8FAFC] p-4 rounded-md flex flex-col items-center gap-2 w-full cursor-pointer'>
                                        <Image className='w-5 h-5' src="/assets/text.png" alt="Text Icon" width={20} height={20} />
                                        <p>Text</p></button>
                                    <button onClick={handleVideo} className='border border-[#E9E9E9] font-mediumtext-[16px] bg-[#F8FAFC] p-4 rounded-md flex flex-col items-center gap-2 w-full cursor-pointer'>
                                        <Image className='w-5 h-5' src="/assets/video.png" alt="Video Icon" width={20} height={20} />
                                        <p>Video</p></button>
                                </div>
                            </div>

                        </div>

                    </div>




                ) : (
                    notFound()
                )}
            </div>

        </>
    );
};

export default FriendComp;