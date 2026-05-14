'use client';


import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';

const fetchFriends = async () => {
    const res = await fetch("/friends.json")
    const friends = await res.json();
    return friends;
}


export const allContext = createContext();



const Context = ({ children }) => {

    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getFriends = async () => {
            const friendData = await fetchFriends();
            setFriends(friendData);
            setLoading(false);
        };
        getFriends();
    }, []);

    const [timelineData, setTimelineData] = useState([]);

    const [isClicked, setIsClicked] = useState("home");

    const handleNavClick = (value) => {
        setIsClicked(value);
    }

    return (
        <allContext.Provider value={{ isClicked, setIsClicked, handleNavClick, friends, timelineData, setTimelineData, loading }}>
            {children}
        </allContext.Provider>
    );
};

export default Context;