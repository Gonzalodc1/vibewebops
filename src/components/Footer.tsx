import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-border py-12 md:py-16">
            <Container>
                <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                    <div className="max-w-sm">
                        <Link href="/" className="text-xl font-bold tracking-tight text-foreground mb-4 block">
                            Vibe<span className="text-accent">WebOps</span>
                        </Link>
                        <p className="text-text-muted">
                            Micro-agencia especializada en Next.js y conversión. Construimos webs rápidas, modernas y rentables.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-foreground mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/legal/aviso-legal" className="text-text-muted hover:text-accent transition-colors">Aviso Legal</Link></li>
                            <li><Link href="/legal/privacidad" className="text-text-muted hover:text-accent transition-colors">Privacidad</Link></li>
                            <li><Link href="/legal/cookies" className="text-text-muted hover:text-accent transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
                    <p>© {year} Vibe Web Ops. Todos los derechos reservados.</p>
                    <p>Made with Next.js & TailwindCSS</p>
                </div>
            </Container>
        </footer>
    );
}
