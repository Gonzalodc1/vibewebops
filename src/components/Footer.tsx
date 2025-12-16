import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-slate-50 dark:bg-slate-950/50 border-t border-slate-200 dark:border-slate-900 py-12 md:py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 block">
                            Vibe<span className="text-indigo-600">WebOps</span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 max-w-sm mb-6">
                            Micro-agencia especializada en Next.js y conversión. Construimos webs rápidas, modernas y rentables.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Servicios</h3>
                        <ul className="space-y-3">
                            <li><Link href="/servicios" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Launch</Link></li>
                            <li><Link href="/servicios" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Upgrade</Link></li>
                            <li><Link href="/servicios" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Mantenimiento</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/legal/aviso-legal" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Aviso Legal</Link></li>
                            <li><Link href="/legal/privacidad" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Privacidad</Link></li>
                            <li><Link href="/legal/cookies" className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors">Cookies</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">
                    <p>© {year} Vibe Web Ops. Todos los derechos reservados.</p>
                    <p>Made with Next.js & TailwindCSS</p>
                </div>
            </Container>
        </footer>
    );
}
