'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Button from '../ui/Button';
import { useModal } from '@/context/ModalContext';

export default function Navbar() {
    const { openModal } = useModal();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Defalt to black logo during SSR/hydration to prevent layout shift, adjust if needed
    const logoSrc = mounted && resolvedTheme === 'dark' ? '/logo-white.png' : '/logo-black.png';

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 bg-transparent border-none ${isScrolled ? 'py-3' : 'py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-3">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <Image
                            src={logoSrc}
                            alt="Levely Creative Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span>Levely Creative</span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#servicios" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">
                        Servicios
                    </Link>
                    <Link href="#proceso" className="text-sm font-medium text-text-muted hover:text-foreground transition-colors">
                        Proceso
                    </Link>
                    <Button onClick={openModal} size="sm">
                        Pedir presupuesto
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <Button onClick={openModal} size="sm">
                        Pedir presupuesto
                    </Button>
                    {/* Minimal burger or just rely on CTA? User said "burger minimal o nav extremadamente simple + CTA siempre visible" */}
                    {/* Let's keep it clean: CTA is visible. Maybe no menu needed if items are just anchor links on homepage */}
                </div>
            </div>
        </nav>
    );
}
