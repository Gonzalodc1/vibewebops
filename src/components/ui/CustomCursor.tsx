'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const [isMounted, setIsMounted] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    // Position state driven by refs for performance
    const mouse = useRef({ x: -100, y: -100 });
    const cursor = useRef({ x: -100, y: -100 });
    const scaled = useRef(false);

    useEffect(() => {
        // Check for pointer: fine (Desktop)
        if (window.matchMedia('(pointer: fine)').matches) {
            setIsMounted(true);
        }
    }, []);

    useEffect(() => {
        if (!isMounted) return;

        const onMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const onMouseDown = () => {
            if (ringRef.current) {
                ringRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0) scale(0.8)`;
            }
        };

        const onMouseUp = () => {
            if (ringRef.current) {
                const scale = scaled.current ? 1.5 : 1;
                ringRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0) scale(${scale})`;
            }
        };

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('data-cursor') === 'hover';

            scaled.current = !!isInteractive;
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mousedown', onMouseDown);
        window.addEventListener('mouseup', onMouseUp);
        document.addEventListener('mouseover', onMouseOver);

        let animationFrameId: number;

        const loop = () => {
            // Lerp
            const dx = mouse.current.x - cursor.current.x;
            const dy = mouse.current.y - cursor.current.y;

            cursor.current.x += dx * 0.15; // Smoothness factor
            cursor.current.y += dy * 0.15;

            if (cursorRef.current && ringRef.current) {
                cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;

                const scale = scaled.current ? 1.5 : 1;
                ringRef.current.style.transform = `translate3d(${cursor.current.x}px, ${cursor.current.y}px, 0) scale(${scale})`;

                // Optional: Hide native cursor style logic could be handled via CSS on body
            }

            animationFrameId = requestAnimationFrame(loop);
        };

        loop();

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mousedown', onMouseDown);
            window.removeEventListener('mouseup', onMouseUp);
            document.removeEventListener('mouseover', onMouseOver);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isMounted]);

    if (!isMounted) return null;

    return (
        <>
            <style jsx global>{`
           @media (pointer: fine) {
                body, a, button, input, textarea, select {
                    cursor: none !important;
                }
           }
        `}</style>
            {/* Main Dot - Follows mouse exactly. Uses 'bg-foreground' which is black in light mode, white in dark mode. */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2 h-2 bg-foreground rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
                style={{ willChange: 'transform' }}
            />
            {/* Ring - Trails behind. Uses 'border-foreground' for ring color. */}
            <div
                ref={ringRef}
                className="fixed top-0 left-0 w-8 h-8 border border-foreground/40 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out"
                style={{ willChange: 'transform' }}
            />
        </>
    );
}
