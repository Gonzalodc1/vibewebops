"use client";

import { useState, useEffect } from "react";
import { Button } from "./Button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function CookieBanner() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("cookie_consent");
        if (stored === null) {
            // Small delay for animation
            setTimeout(() => setShow(true), 1000);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookie_consent", "true");
        setShow(false);
        // Reload to activate analytics or just let state update if we lifted state (but reload is safer ensures clean start)
        // Actually, Analytics component listens to localStorage on mount, so reload is needed or a context.
        // For simplicity, reload:
        window.location.reload();
    };

    const handleReject = () => {
        localStorage.setItem("cookie_consent", "false");
        setShow(false);
    };

    if (!show) return null;

    return (
        <div className={cn(
            "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-500",
            show ? "translate-y-0" : "translate-y-full"
        )}>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-slate-600 dark:text-slate-300 md:max-w-2xl">
                    <p>
                        Usamos cookies para analizar el tráfico y mejorar tu experiencia.
                        Puedes aceptar el seguimiento de Analytics (GA4) o continuar sin él.
                        Ver <Link href="/legal/cookies" className="underline hover:text-indigo-600">Política de Cookies</Link>.
                    </p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                    <Button variant="ghost" size="sm" onClick={handleReject} className="flex-1 md:flex-none justify-center">
                        Rechazar
                    </Button>
                    <Button variant="primary" size="sm" onClick={handleAccept} className="flex-1 md:flex-none justify-center">
                        Aceptar Analytics
                    </Button>
                </div>
            </div>
        </div>
    );
}
