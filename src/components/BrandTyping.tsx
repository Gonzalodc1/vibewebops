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

        const loop = () => {
            if (phase === 'typing') {
                if (displayText.length < text.length) {
                    // Slower typing: ~90ms
                    const randomSpeed = 80 + Math.random() * 20;
                    timeoutId = setTimeout(() => {
                        setDisplayText(text.slice(0, displayText.length + 1));
                    }, randomSpeed);
                } else {
                    setPhase('pausing');
                }
            } else if (phase === 'pausing') {
                // Longer pause: 1400ms
                timeoutId = setTimeout(() => {
                    setPhase('deleting');
                }, 1400);
            } else if (phase === 'deleting') {
                if (displayText.length > 0) {
                    // Slower deleting: ~140ms
                    const randomSpeed = 130 + Math.random() * 20;
                    timeoutId = setTimeout(() => {
                        setDisplayText(text.slice(0, displayText.length - 1));
                    }, randomSpeed);
                } else {
                    setPhase('idle');
                }
            } else if (phase === 'idle') {
                // Pause before restarting: 1000ms
                timeoutId = setTimeout(() => {
                    setPhase('typing');
                }, 1000);
            }
        };

        loop();

        return () => clearTimeout(timeoutId);
    }, [displayText, phase, text]);

    return (
        <span className="inline-block min-w-[15ch] whitespace-nowrap">
            {displayText}
            <span className="animate-pulse">_</span>
        </span>
    );
}
