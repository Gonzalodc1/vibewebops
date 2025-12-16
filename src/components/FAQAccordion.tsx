"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { animate } from "@/utils/animations";

interface FAQItem {
    question: string;
    answer: string;
}

export function FAQAccordion({ items }: { items: FAQItem[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
        // Optional: trigger animation if needed, but CSS transition is often enough for height
    };

    return (
        <div className="space-y-4 max-w-3xl mx-auto">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 overflow-hidden"
                >
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none"
                    >
                        <span className="font-semibold text-slate-900 dark:text-white pr-8">{item.question}</span>
                        {openIndex === index ? (
                            <Minus className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                        ) : (
                            <Plus className="h-5 w-5 text-slate-400 flex-shrink-0" />
                        )}
                    </button>

                    <div
                        className={cn(
                            "transition-[max-height,opacity] duration-300 ease-in-out px-4 md:px-6",
                            openIndex === index ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"
                        )}
                    >
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
