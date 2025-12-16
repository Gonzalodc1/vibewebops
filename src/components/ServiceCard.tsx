import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
    title: string;
    description: string;
    features: string[];
    ctaText?: string;
    ctaLink?: string;
    price?: string;
    isPopular?: boolean;
    className?: string;
}

export function ServiceCard({ title, description, features, ctaText = "Más información", ctaLink = "/servicios", price, isPopular, className }: ServiceCardProps) {
    return (
        <div className={cn(
            "relative p-6 rounded-2xl border bg-white dark:bg-slate-900 shadow-sm transition-all hover:shadow-md flex flex-col h-full",
            isPopular ? "border-indigo-600 ring-1 ring-indigo-600" : "border-slate-200 dark:border-slate-800",
            className
        )}>
            {isPopular && <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-semibold tracking-wide text-white bg-indigo-600 rounded-full shadow-sm">Recomendado</span>}

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm flex-grow">{description}</p>

            {price && <div className="mb-6 text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{price}</div>}

            <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-700 dark:text-slate-300 leading-snug">{feature}</span>
                    </li>
                ))}
            </ul>

            <Link href={ctaLink} className="block mt-auto">
                <Button variant={isPopular ? "primary" : "outline"} className="w-full">{ctaText}</Button>
            </Link>
        </div>
    );
}
