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
                    const randomSpeed = 50 + Math.random() * 50;
                    timeoutId = setTimeout(() => {
                        setDisplayText(text.slice(0, displayText.length + 1));
                    }, randomSpeed);
                } else {
                    setPhase('pausing');
                }
            } else if (phase === 'pausing') {
                timeoutId = setTimeout(() => {
                    setPhase('deleting');
                }, 1500);
            } else if (phase === 'deleting') {
                if (displayText.length > 0) {
                    const randomSpeed = 30 + Math.random() * 20;
                    timeoutId = setTimeout(() => {
                        setDisplayText(text.slice(0, displayText.length - 1));
                    }, randomSpeed);
                } else {
                    setPhase('idle');
                }
            } else if (phase === 'idle') {
                timeoutId = setTimeout(() => {
                    setPhase('typing');
                }, 500);
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
