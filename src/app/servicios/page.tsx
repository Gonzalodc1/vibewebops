import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata = {
    title: "Servicios | Levely Creative",
    description: "Desarrollo web a medida y optimización para negocios digitales.",
};

export default function ServicesPage() {
    return (
        <>
            <div className="bg-slate-50 dark:bg-slate-900 pt-32 pb-16 text-center">
                <Container>
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Servicios Diseñados para Crecer</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Desde el lanzamiento inicial hasta la optimización continua. Elige la etapa en la que estás.
                        </p>
                    </Reveal>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="space-y-24">
                        {/* Launch */}
                        <Reveal>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">Para nuevos negocios</span>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Pack Launch</h2>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                                        Lanza tu presencia digital con una base sólida. Ideal si necesitas una web profesional, rápida y con buena imagen sin complicaciones innecesarias.
                                    </p>
                                    <ul className="space-y-2 mb-8 list-disc list-inside text-slate-700 dark:text-slate-300">
                                        <li>Diseño moderno y responsive</li>
                                        <li>Desarrollo en Next.js (SPA rápida)</li>
                                        <li>Configuración básica de SEO</li>
                                        <li>Integración con WhatsApp y Formulario</li>
                                    </ul>
                                    <div className="bg-orange-50 dark:bg-orange-900/10 p-4 rounded-lg mb-8 border border-orange-200 dark:border-orange-800">
                                        <p className="text-sm text-orange-800 dark:text-orange-300 font-medium">⚠️ No incluye: funcionalidades complejas de backend, e-commerce avanzado o redacción de contenidos desde cero.</p>
                                    </div>
                                    <p className="font-semibold text-slate-900 dark:text-white mb-6">Tiempo estimado: 2-3 semanas</p>
                                    <Link href="/contacto">
                                        <Button>Solicitar Launch</Button>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>

                        {/* Upgrade */}
                        <Reveal>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div className="order-2 md:order-1">
                                    {/* Here we could put an image if we had one, for now text content is enough or reverse layout */}
                                    <div className="bg-slate-100 dark:bg-slate-800 rounded-2xl h-64 w-full flex items-center justify-center text-slate-400">Imagen Ilustrativa</div>
                                </div>
                                <div className="order-1 md:order-2">
                                    <span className="text-indigo-600 font-bold tracking-wide uppercase text-sm">Para escalar</span>
                                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Pack Upgrade</h2>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6">
                                        Tu web actual se ha quedado pequeña o no convierte. Hacemos un rediseño estratégico basado en datos y mejoramos la tecnología.
                                    </p>
                                    <ul className="space-y-2 mb-8 list-disc list-inside text-slate-700 dark:text-slate-300">
                                        <li>Auditoría de UX y Performance</li>
                                        <li>Arquitectura de información avanzada</li>
                                        <li>CMS (Gestor de contenidos) para blog/casos</li>
                                        <li>Integraciones (Email Marketing, CRM)</li>
                                    </ul>
                                    <p className="font-semibold text-slate-900 dark:text-white mb-6">Tiempo estimado: 4-6 semanas</p>
                                    <Link href="/contacto">
                                        <Button>Solicitar Upgrade</Button>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </Container>
            </Section>

            <Section className="bg-indigo-600">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">¿No sabes qué necesitas?</h2>
                    <Link href="/contacto">
                        <Button size="lg" variant="white">Agendar Consultoría Gratuita</Button>
                    </Link>
                </Container>
            </Section>
        </>
    );
}
