'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { allContext } from '../../Context/Context';
import React from 'react';

const FriendComp = ({ friendId }) => {
    const { friends } = useContext(allContext);
    const targetedFriend = friends.find(friend => friend.id === Number(friendId));

    return (
        <div className='py-20 px-61'>
            {targetedFriend ? (
                <div>
                    <Image className='w-20 h-20 rounded-full' src={targetedFriend.picture} alt={targetedFriend.name} width={800} height={800} priority/>
                    <h2>{targetedFriend.name}</h2>
                    <p>{targetedFriend.email}</p>
                </div>
            ) : (
                <p>Friend not found</p>
            )}
        </div>
    );
};

export default FriendComp;