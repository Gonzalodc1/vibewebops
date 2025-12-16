'use client';

import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function Card({ children, className = '', hoverEffect = true }: CardProps) {
    return (
        <div
            className={`
        bg-surface border border-white/5 rounded-2xl p-6
        transition-all duration-300
        ${hoverEffect ? 'hover:border-white/10 hover:shadow-2xl hover:-translate-y-1' : ''}
        ${className}
      `}
        >
            {children}
        </div>
    );
}
