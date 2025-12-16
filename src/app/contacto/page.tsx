import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/Button";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";

export const metadata = {
    title: "Contacto | Vibe Web Ops",
    description: "Habla con nosotros. Presupuestos sin compromiso.",
};

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

export default function ContactPage() {
    return (
        <>
            <div className="bg-slate-50 dark:bg-slate-900 pt-32 pb-16 text-center">
                <Container>
                    <Reveal>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Hablemos de tu Proyecto</h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Estamos listos para escuchar tus ideas y convertirlas en una web rentable.
                        </p>
                    </Reveal>
                </Container>
            </div>

            <Section>
                <Container>
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                        <Reveal>
                            <div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Formas de Contacto</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8">
                                    Preferimos el trato directo. Escríbenos por WhatsApp para una respuesta rápida o rellena el formulario para propuestas más detalladas.
                                </p>

                                <div className="space-y-6">
                                    <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900 hover:bg-green-100 dark:hover:bg-green-900/20 transition-colors group">
                                        <div className="bg-[#25D366] p-3 rounded-full text-white group-hover:scale-110 transition-transform">
                                            <MessageCircle className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">WhatsApp</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">Respuesta rápida (Lun-Vie)</p>
                                        </div>
                                    </a>

                                    <a href="tel:+34600000000" className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors group">
                                        <div className="bg-slate-900 dark:bg-white p-3 rounded-full text-white dark:text-slate-900 group-hover:scale-110 transition-transform">
                                            <Phone className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-900 dark:text-white">Llamada</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">+34 600 000 000</p>
                                        </div>
                                    </a>

                                    <div className="flex items-center gap-4 p-4">
                                        <Mail className="h-6 w-6 text-indigo-600" />
                                        <span className="text-slate-600 dark:text-slate-400">contacto@vibewebops.com</span>
                                    </div>
                                    <div className="flex items-center gap-4 p-4">
                                        <MapPin className="h-6 w-6 text-indigo-600" />
                                        <span className="text-slate-600 dark:text-slate-400">100% Remoto (España)</span>
                                    </div>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal delay={200}>
                            <div className="bg-white dark:bg-slate-950 p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800">
                                <ContactForm />
                            </div>
                        </Reveal>
                    </div>
                </Container>
            </Section>
        </>
    );
}
