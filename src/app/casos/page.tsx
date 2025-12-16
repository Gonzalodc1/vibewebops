import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { CaseCard } from "@/components/CaseCard";
import { Button } from "@/components/Button";
import Link from "next/link";

export const metadata = {
    title: "Casos de Éxito | Levely Creative",
    description: "Ejemplos reales de webs que generan resultados.",
};

const cases = [
    {
        client: "Clinica Dental Apex",
        problem: "Su web en Wordpress tardaba 6 segundos en cargar. Perdían el 50% del tráfico móvil. El formulario de citas no funcionaba bien.",
        solution: "Reconstrucción total en Next.js. Implementación de sistema de reservas simple conectado a WhatsApp. Optimización SEO local.",
        result: "+45% de solicitudes de cita el primer mes. Carga en 0.8s."
    },
    {
        client: "Editorial Lector",
        problem: "Tienda online lenta con Shopify mal configurado. Tasa de rebote del 70%.",
        solution: "Frontend 'Headless' con Next.js conectado a Shopify. Experiencia de usuario ultra-fluida similar a una app nativa.",
        result: "Conversión subió del 1.2% al 2.8%."
    },
    {
        client: "Consultor Financiero Juan M.",
        problem: "Web 'tarjeta de visita' que no explicaba sus servicios. Nadie contactaba por la web.",
        solution: "Landing page de autoridad, con lead magnet (guía PDF) y secuencia de emails automatizada.",
        result: "Agenda llena en 3 semanas con leads cualificados."
    },
    {
        client: "Restaurante La Fusión",
        problem: "Menú PDF difícil de leer en móvil. Teléfono comunicando siempre.",
        solution: "Carta digital interactiva y sistema de reservas online automático.",
        result: "Reducción del 80% de llamadas para reservar. Aumento del ticket medio."
    },
    {
        client: "Academia Online EnglishPro",
        problem: "Sitio web confuso con demasiada información. Los alumnos no encontraban cómo inscribirse.",
        solution: "Simplificación de la oferta. Funnel de ventas claro: Prueba de nivel -> Inscripción.",
        result: "+30% de inscripciones en el lanzamiento de septiembre."
    }
];

export default function CasesPage() {
    return (
        <>
            <div className="bg-slate-50 dark:bg-slate-900 pt-32 pb-16 text-center">
                <Container>
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Resultados Reales</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            No vendemos humo. Vendemos webs que funcionen para tu negocio.
                        </p>
                    </Reveal>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cases.map((c, i) => (
                            <Reveal key={i} delay={i * 100}>
                                <CaseCard {...c} />
                            </Reveal>
                        ))}
                    </div>
                </Container>
            </Section>

            <Section className="bg-slate-50 dark:bg-slate-900">
                <Container className="text-center">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">¿Quieres ser el siguiente caso de éxito?</h2>
                    <Link href="/contacto"><Button size="lg">Hablemos de tu proyecto</Button></Link>
                </Container>
            </Section>
        </>
    );
}
