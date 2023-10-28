'use client'

import { useEffect, useState } from "react";
import React from "react";

export function useIsVisible(ref) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting)
        }
        );

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref]);

    return isIntersecting;
};

export default function Page() {
    const ref1 = React.useRef<HTMLInputElement>(null);
    const isVisible1 = useIsVisible(ref1);

    const ref2 = React.useRef<HTMLInputElement>(null);
    const isVisible2 = useIsVisible(ref2);

    const ref3 = React.useRef<HTMLInputElement>(null);
    const isVisible3 = useIsVisible(ref3);


    return (
        <>
            <div ref={ref1} className={`h-min overflow-hidden transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
                <img
                    src="https://images.unsplash.com/photo-1445743432342-eac500ce72b7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image 2"
                    className="border-gray-200 px-4 lg:px-6 py-2.5 h-80 w-full relative z-0 rounded-lg hover:scale-125 transition-all duration-500 overflow-hidden"
                />
            </div>
            <div ref={ref2} className={`h-min overflow-hidden transition-opacity ease-in duration-700 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
                <img
                    src="https://images.unsplash.com/photo-1445743432342-eac500ce72b7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image 2"
                    className="border-gray-200 px-4 lg:px-6 py-2.5 h-80 w-full relative z-0 rounded-lg hover:scale-125 transition-all duration-500 overflow-hidden"
                />
            </div>
            <div ref={ref3} className={`h-min overflow-hidden transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
                <img
                    src="https://images.unsplash.com/photo-1445743432342-eac500ce72b7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="image 2"
                    className="border-gray-200 px-4 lg:px-6 py-2.5 h-80 w-full relative z-0 hover:scale-125 transition-all duration-500 overflow-hidden"
                />
            </div>
        </>
    )
}