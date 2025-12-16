type EventParams = {
    page?: string;
    placement?: string;
    success?: boolean;
    item_name?: string;
    value?: number;
    [key: string]: any;
};

export const trackEvent = (eventName: string, params?: EventParams) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", eventName, params);
    }

    // Always log in development or if GA is undefined/blocked
    if (process.env.NODE_ENV === "development" || !(window as any).gtag) {
        console.log(`%c[GA4] Event: ${eventName}`, "color: #fbbf24; font-weight: bold", params);
    }
};
