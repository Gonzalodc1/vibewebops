'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export default function ScrollReveal({
    children,
    className = '',
    delay = 0,
    direction = 'up'
}: ScrollRevealProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {

                        // Initial state setup before animation
                        // element.style.opacity = '0'; // Handled by CSS ideally, but here for safety

                        const translateY = direction === 'up' ? [20, 0] : direction === 'down' ? [-20, 0] : 0;
                        const translateX = direction === 'left' ? [20, 0] : direction === 'right' ? [-20, 0] : 0;

                        anime({
                            targets: element,
                            opacity: [0, 1],
                            translateY: translateY,
                            translateX: translateX,
                            easing: 'cubicBezier(0.16, 1, 0.3, 1)', // "Cosmos" smooth style
                            duration: 800,
                            delay: delay,
                        });

                        observer.unobserve(element);
                    }
                });
            },
            { threshold: 0.1 }
        );

        observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, [delay, direction]);

    return (
        <div ref={ref} className={`opacity-0 ${className}`}>
            {children}
        </div>
    );
}
