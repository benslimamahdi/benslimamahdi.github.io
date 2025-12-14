import React, { useEffect, useState, useRef } from 'react';
import './Cursor.css';

const Cursor = () => {
    const cursorRef = useRef(null);
    const followerRef = useRef(null);

    useEffect(() => {
        const moveCursor = (e) => {
            const { clientX: x, clientY: y } = e;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
            if (followerRef.current) {
                // Slight delay for the follower is handled via CSS transition, just update pos
                followerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
            }
        };

        const handleHover = () => {
            cursorRef.current?.classList.add('hover');
            followerRef.current?.classList.add('hover');
        };

        const handleLeave = () => {
            cursorRef.current?.classList.remove('hover');
            followerRef.current?.classList.remove('hover');
        };

        window.addEventListener('mousemove', moveCursor);

        // Add hover effects to clickable elements
        const clickables = document.querySelectorAll('a, button, .portfolio-item, .skill-item, input, textarea');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleHover);
            el.addEventListener('mouseleave', handleLeave);
        });

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleHover);
                el.removeEventListener('mouseleave', handleLeave);
            });
        };
    }, []);

    return (
        <>
            <div ref={cursorRef} className="cursor-dot"></div>
            <div ref={followerRef} className="cursor-follower"></div>
        </>
    );
};

export default Cursor;
