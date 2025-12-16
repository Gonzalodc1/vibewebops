"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export function Analytics() {
    const [consent, setConsent] = useState<boolean | null>(null);

    useEffect(() => {
        // Check local storage on mount
        const stored = localStorage.getItem("cookie_consent");
        if (stored === "true") setConsent(true);
        else if (stored === "false") setConsent(false);
    }, []);

    if (!consent) return null;

    const gaId = process.env.NEXT_PUBLIC_GA4_ID;
    if (!gaId) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
            </Script>
        </>
    );
}
