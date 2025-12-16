import { cn } from "@/lib/utils";

export function Section({ className, id, children }: { className?: string; id?: string; children: React.ReactNode }) {
    return <section id={id} className={cn("py-16 md:py-24", className)}>{children}</section>;
}
