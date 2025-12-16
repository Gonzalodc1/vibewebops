'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggleFab() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-surface/80 shadow-lg backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-surface-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 dark:focus:ring-offset-black"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? (
                <Moon className="h-5 w-5 text-text-muted transition-colors hover:text-foreground" />
            ) : (
                <Sun className="h-5 w-5 text-text-muted transition-colors hover:text-foreground" />
            )}
        </button>
    );
}
