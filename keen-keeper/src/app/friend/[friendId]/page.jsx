
import FriendComp from "../../../Components/FriendComp/FriendComp";
import React from 'react';

const friend = async ( {params} ) => {
    const { friendId } = await params;


    return (
        <div>
            <FriendComp friendId = {Number(friendId)}></FriendComp>
        </div>
    );
};

export default friend;