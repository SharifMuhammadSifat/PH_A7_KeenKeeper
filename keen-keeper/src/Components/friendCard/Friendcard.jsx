import React from 'react';

const Friendcard = ({ friend }) => {
    return (
        <div>
            <h2>{friend.name}</h2>
            <p>{friend.email}</p>
        </div>
    );
};

export default Friendcard;