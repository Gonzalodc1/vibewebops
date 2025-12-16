"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Servicios", href: "/servicios" },
    { name: "Proceso", href: "/proceso" },
    { name: "Casos", href: "/casos" },
    { name: "Precios", href: "/precios" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm" : "bg-transparent py-2"
            )}
        >
            <Container>
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                        Levely Creative
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-white transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link href="/contacto">
                            <Button size="sm">Pedir Presupuesto</Button>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600 dark:text-slate-300"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </Container>

            {/* Mobile Nav */}
            <div
                className={cn(
                    "md:hidden fixed inset-x-0 top-[64px] bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 overflow-hidden",
                    isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="p-4 flex flex-col gap-4">
                    {navigation.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="text-lg font-medium text-slate-900 dark:text-slate-100 py-3 border-b border-slate-100 dark:border-slate-900"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="/contacto" className="mt-4 pb-8">
                        <Button className="w-full" size="lg">Pedir Presupuesto</Button>
                    </Link>
                </div>
            </div>
        </header>
    );
}
