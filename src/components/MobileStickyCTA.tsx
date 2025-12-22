"use client";

import { Phone, MessageCircle } from "lucide-react";

export function MobileStickyCTA() {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34711245655";
    // TODO: Use env variable correctly

    return (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-3 grid grid-cols-2 gap-3 safe-area-pb">
            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-semibold py-3 px-4 rounded-lg active:opacity-90 transition-opacity"
            >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
            </a>
            <a
                href="tel:+34600000000" // Placeholder, should trigger tell
                className="flex items-center justify-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold py-3 px-4 rounded-lg active:opacity-90 transition-opacity"
            >
                <Phone className="h-5 w-5" />
                Llamar
            </a>
        </div>
    );
}
