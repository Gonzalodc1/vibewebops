import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { PricingTable } from "@/components/PricingTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Button } from "@/components/Button";
import Link from "next/link";
import { Check, X } from "lucide-react";

export const metadata = {
    title: "Precios | Levely Creative",
    description: "Planes transparentes para tu web: Launch, Upgrade y Mantenimiento.",
};

const plans = [
    {
        name: "Launch",
        description: "Para arrancar con fuerza.",
        price: "Desde 950€",
        features: ["Web One-Page o Multi-page simple", "Diseño Responsive", "Dominio + SSL incluidos (1 año)", "Entrega en 2 semanas"],
        ctaLink: "/contacto"
    },
    {
        name: "Upgrade",
        description: "Para negocios consolidados.",
        price: "Desde 1800€",
        features: ["Arquitectura a medida", "CMS para contenidos", "Integración CRM/Email", "SEO Técnico Avanzado"],
        isPopular: true,
        ctaLink: "/contacto"
    },
    {
        name: "Mantenimiento",
        description: "Tranquilidad total.",
        price: "Desde 50€/mes",
        features: ["Hosting de alto rendimiento", "Copias de seguridad", "Soporte técnico", "pequeños cambios mensuales"],
        ctaLink: "/contacto"
    }
];

export default function PricingPage() {
    return (
        <>
            <div className="bg-slate-50 dark:bg-slate-900 pt-32 pb-16 text-center">
                <Container>
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Inversión Clara y Sin Sorpresas</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Elige el plan que mejor se adapte a tu fase actual.
                        </p>
                    </Reveal>
                </Container>
            </div>

            <Section>
                <Container>
                    <Reveal>
                        <PricingTable plans={plans} />
                    </Reveal>
                </Container>
            </Section>

            <Section className="bg-slate-50 dark:bg-slate-900">
                <Container>
                    <Reveal>
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Detalles Adicionales</h2>
                        <div className="max-w-3xl mx-auto bg-white dark:bg-slate-950 p-8 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold mb-4">Política de Cambios Extra</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Todos los proyectos incluyen 2 rondas de revisión antes de la entrega final.
                                Si necesitas cambios adicionales fuera del alcance inicial o después de la entrega,
                                trabajamos con una tarifa hora o bajo presupuesto cerrado si es una nueva funcionalidad.
                            </p>

                            <h3 className="font-bold mb-4">¿Qué incluye el Hosting? (En mantenimiento)</h3>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Check className="h-4 w-4 text-green-500" /> Servidores globales (Vercel Edge Network)</li>
                                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Check className="h-4 w-4 text-green-500" /> Certificado SSL (https) automático</li>
                                <li className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400"><Check className="h-4 w-4 text-green-500" /> Protección contra ataques DDoS</li>
                            </ul>
                        </div>
                    </Reveal>
                </Container>
            </Section>

            <Section>
                <Container>
                    <Reveal>
                        <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Preguntas sobre Pagos</h2>
                        <FAQAccordion items={[
                            { question: "¿Puedo pagar a plazos?", answer: "Normalmente trabajamos 50/50. Para proyectos grandes (>3000€) podemos pactar hitos de pago (ej. 3 pagos)." },
                            { question: "¿Hay permanencia en el mantenimiento?", answer: "No. Puedes cancelar cuando quieras. Te entregaremos los archivos para que los alojes donde prefieras." },
                            { question: "¿Los precios incluyen IVA?", answer: "Los precios mostrados son base imponible. Se aplicará el IVA correspondiente en la factura." },
                        ]} />
                    </Reveal>
                </Container>
            </Section>

            <Section className="bg-indigo-600">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-8">¿Tienes un presupuesto diferente?</h2>
                    <p className="text-indigo-100 mb-8 max-w-xl mx-auto">A veces los proyectos no encajan en cajas. Cuéntanos qué necesitas y lo valoramos.</p>
                    <Link href="/contacto"><Button size="lg" variant="white">Contactar Ahora</Button></Link>
                </Container>
            </Section>
        </>
    );
}
