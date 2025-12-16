'use client';

import React from 'react';
import Link from "next/link";
import {
  MessageCircle, Phone, Smartphone, BarChart3, Palette, CheckCircle2,
  XCircle, ArrowRight, Activity, Zap, Layers, ChevronDown
} from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useModal } from "@/context/ModalContext";

export default function Home() {
  const { openModal } = useModal();
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";

  // Data
  const services = [
    {
      title: "Launch",
      description: "Ideal para nuevos negocios. Una web profesional, rápida y lista para captar clientes desde el primer día.",
      features: ["Diseño UX/UI Personalizado", "Desarrollo Next.js + Tailwind", "Formulario + WhatsApp", "Analytics Básico"]
    },
    {
      title: "Upgrade",
      description: "Para negocios que necesitan escalar. Rediseño completo, optimización de conversión y funcionalidades avanzadas.",
      features: ["Auditoría de Conversión", "Diseño Premium Animado", "Integraciones (CRM/Email)", "Dashboard de Métricas"],
      featured: true
    },
    {
      title: "Mantenimiento",
      description: "Olvídate de problemas técnicos. Nos ocupamos de que tu web esté siempre online y actualizada.",
      features: ["Monitorización 24/7", "Cambios de contenido", "Informe mensual", "Soporte Prioritario"]
    }
  ];

  const processSteps = [
    { title: "1. Auditoría", icon: Activity, text: "Analizamos tu situación actual y objetivos." },
    { title: "2. Propuesta", icon: Layers, text: "Definimos estructura, diseño y alcance." },
    { title: "3. Build", icon: Zap, text: "Desarrollo ágil con entregas parciales." },
    { title: "4. Go-Live", icon: CheckCircle2, text: "Lanzamiento, pruebas y formación." },
  ];

  const pricing = [
    {
      name: "Launch",
      description: "Para arrancar con fuerza.",
      price: "Desde 950€",
      features: ["Web One-Page o Multi-page simple", "Diseño Responsive", "Dominio + SSL incluidos (1 año)", "Entrega en 2 semanas"]
    },
    {
      name: "Upgrade",
      description: "Para negocios consolidados.",
      price: "Desde 1800€",
      features: ["Arquitectura a medida", "CMS para contenidos", "Integración CRM/Email", "SEO Técnico Avanzado"],
      featured: true
    },
    {
      name: "Mantenimiento",
      description: "Tranquilidad total.",
      price: "Desde 50€/mes",
      features: ["Hosting de alto rendimiento", "Copias de seguridad", "Soporte técnico", "pequeños cambios mensuales"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden z-20">
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal direction="up" delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Tu web profesional.<br />
              <span className="text-gradient">Optimizada para vender.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed">
              Diseñamos y desarrollamos sitios web rápidos y modernos con Next.js.
              Sin plantillas genéricas, enfocados 100% en conversión y medición.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button onClick={openModal} size="lg" className="min-w-[200px] shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
                Pedir presupuesto
              </Button>
              <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer">
                <Button variant="text" className="gap-2 text-text-muted hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                  Consultar por WhatsApp
                </Button>
              </a>
            </div>
            <p className="mt-4 text-xs text-text-muted opacity-60">
              Respuesta en menos de 24h
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-y border-border bg-surface/30 backdrop-blur-sm py-10 overflow-hidden">
        <div className="container mx-auto px-6">
          <ScrollReveal delay={200} className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3 text-sm font-medium text-text-muted"><Palette size={18} /> Diseño Profesional</div>
            <div className="flex items-center gap-3 text-sm font-medium text-text-muted"><Smartphone size={18} /> Mobile-First</div>
            <div className="flex items-center gap-3 text-sm font-medium text-text-muted"><BarChart3 size={18} /> Medición de Eventos</div>
            <div className="flex items-center gap-3 text-sm font-medium text-text-muted"><Zap size={18} /> Velocidad Extrema</div>
          </ScrollReveal>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Tu web actual no genera resultados?</h2>
                <div className="space-y-6">
                  {["Lenta, diseño anticuado y difícil de navegar.", "No sabes cuántas personas entran ni qué hacen.", "Dependes de plugins que fallan y seguridad vulnerable."].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-full"><XCircle className="h-5 w-5 text-red-500" /></div>
                      <p className="text-text-muted text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-gradient-to-br from-surface to-surface-hover border-border relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-32 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-all duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-8">La Solución Vibe</h3>
                  <div className="space-y-6">
                    {[
                      "Desarrollo a medida con Next.js",
                      "Analítica integrada (GA4) para medir leads",
                      "Sin mantenimiento técnico complejo"
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <div className="mt-1 bg-green-500/10 p-2 rounded-full"><CheckCircle2 className="h-5 w-5 text-green-500" /></div>
                        <p className="text-foreground text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section id="servicios" className="py-24 bg-surface/20">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Nuestros Servicios</h2>
            <p className="text-text-muted max-w-2xl mx-auto">Soluciones claras para cada etapa de tu negocio digital.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 100}>
                <Card className={`h-full flex flex-col ${service.featured ? 'border-accent/40 shadow-[0_0_30px_-10px_var(--color-accent-glow)]' : ''}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-text-muted mb-8 flex-grow">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-text-muted">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button onClick={openModal} variant={service.featured ? 'primary' : 'outline'} fullWidth>
                    Más información
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="py-24">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Cómo Trabajamos</h2>
            <p className="text-text-muted">Proceso lineal y transparente.</p>
          </ScrollReveal>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative group">
                  <div className="bg-surface hover:bg-surface-hover border border-white/5 p-8 rounded-2xl transition-colors duration-300">
                    <div className="w-12 h-12 bg-surface-hover rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-text-muted">{step.text}</p>
                  </div>
                  {i < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/10 z-0"></div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-surface/20">
        <div className="container mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Inversión Transparente</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {pricing.map((plan, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className={`text-center ${plan.featured ? 'border-accent/40 bg-accent/5' : ''}`}>
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-accent mb-2">{plan.price}</div>
                  <p className="text-sm text-text-muted mb-6">{plan.description}</p>
                  <Button onClick={openModal} variant={plan.featured ? 'primary' : 'outline'} fullWidth size="sm">
                    Empezar ahora
                  </Button>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="container mx-auto px-6 max-w-3xl">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6">Preguntas Frecuentes</h2>
          </ScrollReveal>

          <div className="space-y-4">
            {[
              { q: "¿Cuánto tardan?", a: "Para un plan Launch, entre 2 y 3 semanas. Proyectos a medida, 4-6 semanas." },
              { q: "¿Tengo que pagar mantenimiento?", a: "No es obligatorio, pero sí recomendable para seguridad y rendimiento." },
              { q: "¿La web será mía?", a: "Sí, 100%. Código y propiedad intelectual son tuyos tras el pago final." },
              { q: "¿Cómo funciona el pago?", a: "50% inicio, 50% entrega. Factura oficial." }
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <details className="group bg-surface border border-border rounded-xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-surface-hover transition-colors">
                    <span className="font-medium text-foreground">{faq.q}</span>
                    <ChevronDown className="w-5 h-5 text-text-muted group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-text-muted text-sm">
                    {faq.a}
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="container mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">¿Listo para el siguiente nivel?</h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
              Agenda una consultoría gratuita y veamos cómo podemos ayudarte a crecer.
            </p>
            <Button onClick={openModal} size="lg" className="min-w-[200px] text-lg">
              Pedir presupuesto
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
