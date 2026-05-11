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

    useEffect(() => {
        const getFriends = async () => {
            const friendData = await fetchFriends();
            setFriends(friendData);
        };
        getFriends();
    }, []);

    const [isClicked, setIsClicked] = useState("home");

    const handleNavClick = (e) => {
        setIsClicked(e.target.innerText.toLowerCase());
        
    }

    return (
        <allContext.Provider value={{ isClicked, setIsClicked, handleNavClick, friends }}>
            {children}
        </allContext.Provider>
    );
};

export default Context;