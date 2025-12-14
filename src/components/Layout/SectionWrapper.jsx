import React, { useEffect, useRef, useState } from 'react';
import './SectionWrapper.css';

const SectionWrapper = ({ id, className, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            });
        });

        const currentElement = domRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) observer.unobserve(currentElement);
        };
    }, []);

    return (
        <section
            id={id}
            ref={domRef}
            className={`section-wrapper ${isVisible ? 'is-visible' : ''} ${className || ''}`}
        >
            {children}
        </section>
    );
};

export default SectionWrapper;
