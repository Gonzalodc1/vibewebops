'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';

function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}

interface Option {
    value: string;
    label: string;
}

interface CustomSelectProps {
    label?: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
    error?: string;
}

export default function CustomSelect({ label, options, value, onChange, error }: CustomSelectProps) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedLabel = options.find(opt => opt.value === value)?.label || "Seleccionar...";

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (val: string) => {
        onChange(val);
        setIsOpen(false);
    };

    return (
        <div className="space-y-1.5 w-full relative" ref={containerRef}>
            {label && <label className="text-sm font-medium text-text-muted">{label}</label>}

            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "flex h-11 w-full items-center justify-between rounded-lg border border-border bg-surface px-3 py-2 text-sm text-left shadow-sm transition-all focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent",
                    error ? "border-red-500 focus:ring-red-500" : "",
                    isOpen ? "ring-1 ring-accent border-accent" : ""
                )}
            >
                <span className={value ? "text-foreground" : "text-text-muted"}>
                    {selectedLabel}
                </span>
                <ChevronDown className={cn("h-4 w-4 text-text-muted transition-transform duration-200", isOpen && "rotate-180")} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute z-50 mt-2 w-full rounded-lg border border-border bg-surface shadow-xl animate-scale-in origin-top">
                    <ul className="py-1 max-h-60 overflow-auto scrollbar-thin scrollbar-thumb-border">
                        {options.map((option) => (
                            <li key={option.value}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(option.value)}
                                    className={cn(
                                        "relative flex w-full cursor-pointer select-none items-center py-2.5 pl-3 pr-9 text-sm outline-none transition-colors hover:bg-surface-hover hover:text-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                                        option.value === value ? "bg-accent/10 text-accent font-medium" : "text-foreground"
                                    )}
                                >
                                    <span className="truncate">{option.label}</span>
                                    {option.value === value && (
                                        <span className="absolute right-3 flex h-3.5 w-3.5 items-center justify-center">
                                            <Check className="h-4 w-4" />
                                        </span>
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {error && <p className="text-xs text-red-500">{error}</p>}
        </div>
    );
}
