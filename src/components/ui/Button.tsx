'use client';

import React from 'react';
import { cn } from '@/lib/utils'; // Assuming this exists, typical in Next.js projects. If not, I'll fix.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'text' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    fullWidth?: boolean;
}

export default function Button({
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    ...props
}: ButtonProps) {

    const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
        primary: "bg-primary text-primary-foreground hover:bg-[#e2e2e2] shadow-[0_0_15px_rgba(255,255,255,0.1)] border border-transparent",
        secondary: "bg-surface text-text-main border border-border hover:border-border-hover hover:bg-surface-hover",
        outline: "bg-transparent text-text-main border border-border hover:border-white/20",
        text: "bg-transparent text-text-muted hover:text-text-main p-0",
    };

    const sizes = {
        sm: "text-xs px-3 py-1.5 rounded-md",
        md: "text-sm px-5 py-2.5 rounded-xl", // Rounded-xl for that modern tech feel
        lg: "text-base px-8 py-3.5 rounded-xl",
    };

    return (
        <button
            className={cn(
                baseStyles,
                variants[variant],
                sizes[size],
                fullWidth ? 'w-full' : '',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
}
