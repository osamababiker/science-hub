'use client'

import React from "react";
import { useContext ,useState, useEffect } from "react";
import { SessionProvider } from "next-auth/react"
import { getCourses } from "@/lib/data";


const dataContext = React.createContext();

export const useContextElement = () => {
    return useContext(dataContext);
};

export default function Context({ children }) {

const [cartCourses, setCartCourses] = useState([])
const [courses, setCourses] = useState([]);

useEffect(() => {
    const fetchCourses = async () => {
        try { 
            const res = await getCourses();
            const data = await res.json();
            setCourses(data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    fetchCourses();
}, []);


const addCourseToCart = (id)=>{
    if (!cartCourses.filter((elm)=>elm.id == id)[0]) {
        const item = {...courses.filter(elm=>elm.id == id)[0],quantity:1}
        setCartCourses(pre=>[...pre,item])
    }
}
const isAddedToCartCourses = (id)=>{
    if (cartCourses.filter((elm)=>elm.id == id)[0]) {
        return true
    }
    return false
}


const contextElement = {
    addCourseToCart,
    isAddedToCartCourses,
    cartCourses,
    setCartCourses,
};

return ( <dataContext.Provider value={contextElement}>{children}</dataContext.Provider> );
}

export function SessionProviders({ children }) {
    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}