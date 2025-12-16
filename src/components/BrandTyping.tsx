'use client';

import React, { useState, useEffect } from 'react';

interface BrandTypingProps {
    text: string;
}

export default function BrandTyping({ text }: BrandTypingProps) {
    const [displayText, setDisplayText] = useState('');
    const [phase, setPhase] = useState<'typing' | 'pausing' | 'deleting' | 'idle'>('typing');

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleTyping = () => {
            const currentLength = displayText.length;

            if (currentLength < text.length) {
                // Typing phase
                const randomSpeed = 50 + Math.random() * 50; // Random speed between 50ms and 100ms
                timeoutId = setTimeout(() => {
                    setDisplayText(text.slice(0, currentLength + 1));
                }, randomSpeed);
            } else {
                // Finished typing, switch to pausing
                setPhase('pausing');
                timeoutId = setTimeout(() => {
                    setPhase('deleting');
                }, 1000); // Pause for 1 second
            }
        };

        const handleDeleting = () => {
            const currentLength = displayText.length;

            if (currentLength > 0) {
                // Deleting phase
                const randomSpeed = 30 + Math.random() * 20; // Faster delete speed
                timeoutId = setTimeout(() => {
                    setDisplayText(text.slice(0, currentLength - 1));
                }, randomSpeed);
            } else {
                // Finished deleting, switch to idle/pause before typing again
                setPhase('idle');
                timeoutId = setTimeout(() => {
                    setPhase('typing');
                }, 800); // Pause for 0.8s
            }
        };

        if (phase === 'typing') {
            handleTyping();
        } else if (phase === 'deleting') {
            handleDeleting();
        }

        return () => clearTimeout(timeoutId);
    }, [displayText, phase, text]);

    return (
        <span className="inline-block min-w-[15ch] whitespace-nowrap">
            {displayText}
            <span className="animate-pulse">_</span>
        </span>
    );
}
