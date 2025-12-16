'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { ModalProvider } from '@/context/ModalContext';

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ModalProvider>
                {children}
            </ModalProvider>
        </ThemeProvider>
    );
}
