'use client';

import React, { useRef, useEffect, useState } from 'react';

export default function IABubble() {
    const bubbleRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true); // Hide on mobile if needed, or controlled by close

    // Physics state
    const pos = useRef({ x: 0, y: 0 });
    const vel = useRef({ vx: 2, vy: 2 }); // Initial velocity
    const isDragging = useRef(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const lastPos = useRef({ x: 0, y: 0 });
    const animationFrameId = useRef<number>(0);

    // Config
    const BOUNCE = -0.9;
    const FRICTION = 0.99;
    const DRAG_FRICTION = 0.8; // Air resistance while throwing

    useEffect(() => {
        // Initial position (bottom right)
        if (typeof window !== 'undefined') {
            pos.current = {
                x: window.innerWidth - 100,
                y: window.innerHeight - 100
            };
        }

        const handleResize = () => {
            // Keep bubble in bounds on resize
            if (!bubbleRef.current) return;
            const maxX = window.innerWidth - 64; // Bubble width approx
            const maxY = window.innerHeight - 64;
            if (pos.current.x > maxX) pos.current.x = maxX;
            if (pos.current.y > maxY) pos.current.y = maxY;
        };

        window.addEventListener('resize', handleResize);

        const updatePhysics = () => {
            if (!bubbleRef.current) return;

            if (isDragging.current) {
                // Calculate throw velocity based on drag movement
                vel.current.vx = (pos.current.x - lastPos.current.x) * DRAG_FRICTION;
                vel.current.vy = (pos.current.y - lastPos.current.y) * DRAG_FRICTION;
                lastPos.current = { ...pos.current };
            } else {
                // Physics loop
                pos.current.x += vel.current.vx;
                pos.current.y += vel.current.vy;

                // Apply friction
                vel.current.vx *= FRICTION;
                vel.current.vy *= FRICTION;

                // Bounds collision
                const maxX = window.innerWidth - 64; // 64px width
                const maxY = window.innerHeight - 64;

                if (pos.current.x <= 0) {
                    pos.current.x = 0;
                    vel.current.vx *= BOUNCE;
                } else if (pos.current.x >= maxX) {
                    pos.current.x = maxX;
                    vel.current.vx *= BOUNCE;
                }

                if (pos.current.y <= 0) {
                    pos.current.y = 0;
                    vel.current.vy *= BOUNCE;
                } else if (pos.current.y >= maxY) {
                    pos.current.y = maxY;
                    vel.current.vy *= BOUNCE;
                }
            }

            // Apply transform
            bubbleRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

            animationFrameId.current = requestAnimationFrame(updatePhysics);
        };

        animationFrameId.current = requestAnimationFrame(updatePhysics);

        return () => {
            cancelAnimationFrame(animationFrameId.current);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Mouse/Touch Handlers
    const handleStart = (clientX: number, clientY: number) => {
        isDragging.current = true;
        dragOffset.current = {
            x: clientX - pos.current.x,
            y: clientY - pos.current.y
        };
        lastPos.current = { ...pos.current };
        if (bubbleRef.current) bubbleRef.current.style.cursor = 'grabbing';
    };

    const handleMove = (clientX: number, clientY: number) => {
        if (!isDragging.current) return;
        pos.current.x = clientX - dragOffset.current.x;
        pos.current.y = clientY - dragOffset.current.y;
    };

    const handleEnd = () => {
        isDragging.current = false;
        if (bubbleRef.current) bubbleRef.current.style.cursor = 'grab';
    };

    // Event Listeners
    const onMouseDown = (e: React.MouseEvent) => {
        handleStart(e.clientX, e.clientY);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
    };

    const onMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
    const onMouseUp = () => {
        handleEnd();
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('mouseup', onMouseUp);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        handleStart(touch.clientX, touch.clientY);
        window.addEventListener('touchmove', onTouchMove, { passive: false });
        window.addEventListener('touchend', onTouchEnd);
    };

    const onTouchMove = (e: TouchEvent) => {
        e.preventDefault(); // Prevent scrolling while dragging bubble
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
    };

    const onTouchEnd = () => {
        handleEnd();
        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
    };

    if (!isVisible) return null;

    return (
        <div
            ref={bubbleRef}
            className="fixed top-0 left-0 z-50 w-16 h-16 rounded-full glass border border-white/20 flex items-center justify-center cursor-grab shadow-lg pointer-events-auto touch-none select-none backdrop-blur-sm bg-background/10 dark:bg-white/5 active:cursor-grabbing hover:scale-105 transition-transform duration-75 ease-out"
            onMouseDown={onMouseDown}
            onTouchStart={onTouchStart}
            aria-label="Burbuja IA interactiva"
            style={{ willChange: 'transform' }}
        >
            <span className="text-foreground font-bold text-sm pointer-events-none select-none">IA</span>
        </div>
    );
}
