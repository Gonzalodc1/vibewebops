import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
    title: "Nuestro Proceso | Vibe Web Ops",
    description: "Cómo trabajamos paso a paso para entregar tu web.",
};

const steps = [
    { title: "1. Auditoría y Discovery", duration: "2-3 días", desc: "Nos reunimos para entender tu negocio, objetivos y problemas actuales. Analizamos competidores y definimos el alcance (Scope)." },
    { title: "2. Propuesta y Estrategia", duration: "2-4 días", desc: "Te presentamos una propuesta detallada con wireframes (esqueleto) de la web, presupuesto cerrado y cronograma." },
    { title: "3. Recopilación de Contenidos", duration: "Cliente", desc: "Necesitamos de ti: textos (si los tienes), logo en alta calidad, fotos y accesos a dominio/hosting si ya tienes." },
    { title: "4. Desarrollo (Build)", duration: "2-4 semanas", desc: "Construimos la web en un entorno de pruebas. Verás el progreso semanalmente. Desarrollo limpio en Next.js." },
    { title: "5. QA y Revisión", duration: "3-5 días", desc: "Probamos en todos los dispositivos (móvil, tablet, desktop). Verificamos formularios, enlaces y velocidad. Hacemos una ronda de ajustes contigo." },
    { title: "6. Go-Live y Formación", duration: "1 día", desc: "Conectamos el dominio, configuramos Analytics y te damos una sesión de formación para que sepas usar tu nueva web." },
];

export default function ProcessPage() {
    return (
        <>
            <div className="bg-slate-50 dark:bg-slate-900 pt-32 pb-16 text-center">
                <Container>
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Cómo Trabajamos</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Un sistema probado para entregar webs de calidad sin dolores de cabeza.
                        </p>
                    </Reveal>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-0 pl-8 md:pl-0">
                            {steps.map((step, i) => (
                                <Reveal key={i} delay={i * 100}>
                                    <div className="md:flex gap-8 items-start relative">
                                        <div className="hidden md:block absolute left-[50%] -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-950 z-10"></div>
                                        {/* Mobile dot */}
                                        <div className="md:hidden absolute -left-[41px] top-1 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-slate-950 z-10"></div>

                                        <div className="md:w-1/2 md:text-right md:pr-12 mb-2 md:mb-0">
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
                                            <span className="inline-block mt-1 px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded uppercase tracking-wider">
                                                Tiempo: {step.duration}
                                            </span>
                                        </div>
                                        <div className="md:w-1/2 md:pl-12">
                                            <p className="text-slate-600 dark:text-slate-400">{step.desc}</p>
                                        </div>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>

            <Section className="bg-slate-50 dark:bg-slate-900">
                <Container>
                    <Reveal>
                        <div className="bg-white dark:bg-slate-950 p-8 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800">
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Checklist: Qué necesitamos de ti</h2>
                            <ul className="grid md:grid-cols-2 gap-4">
                                {[
                                    "Logo en formato vectorial (SVG) o PNG alta calidad",
                                    "Manual de marca (colores, tipografías) si existe",
                                    "Textos definidos (nosotros los maquetamos)",
                                    "Imágenes de calidad (o usamos stock premium)",
                                    "Acceso a tu registrador de dominio",
                                    "Disponibilidad para feedback rápido"
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0" />
                                        <span className="text-slate-700 dark:text-slate-300">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            <Section>
                <Container className="text-center">
                    <Link href="/contacto"><Button size="lg">Empezar Proyecto</Button></Link>
                </Container>
            </Section>
        </>
    );
}
