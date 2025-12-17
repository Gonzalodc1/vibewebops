'use client';

import React from 'react';
import {
  Activity, Layers, Zap, CheckCircle2,
  XCircle, Palette, Smartphone, BarChart3, ChevronDown
} from "lucide-react";
import Card from "@/components/ui/Card";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { OpenModalButton, WhatsAppButton } from "@/components/home/HomeClientComponents";
import PricingIncludesModal from '@/components/PricingIncludesModal';
import { Button } from "@/components/Button";
import { useState } from "react";

export default function Home() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const [includesModalOpen, setIncludesModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'launch' | 'upgrade' | 'maintenance'>('launch');

  const handleOpenIncludes = (tab: 'launch' | 'upgrade' | 'maintenance') => {
    setActiveTab(tab);
    setIncludesModalOpen(true);
  };

  // Data
  const services = [
    {
      title: "Launch",
      description: "Ideal si necesitas una web lista para captar desde ya. Profesional, rápida y sin complicaciones.",
      features: ["Diseño UX/UI Personalizado", "Desarrollo Next.js + Tailwind", "WhatsApp + llamada 1-click", "GA4 + eventos"]
    },
    {
      title: "Upgrade",
      description: "Ideal si tu web existe pero no convierte. Rediseño completo para escalar resultados.",
      features: ["Auditoría de Conversión", "Diseño Premium Animado", "Integraciones (CRM/Email)", "Dashboard de Métricas"],
      featured: true
    },
    {
      title: "Mantenimiento",
      description: "Ideal si no quieres tocar nada técnico. Tu negocio siempre online.",
      features: ["Monitorización 24/7", "Cambios de contenido", "Informe mensual", "Soporte Prioritario"]
    }
  ];

  const processSteps = [
    { title: "1. Auditoría", icon: Activity, text: "Detectamos fricción y oportunidades en tu web/Maps." },
    { title: "2. Propuesta", icon: Layers, text: "Definimos páginas, copy y CTAs." },
    { title: "3. Build", icon: Zap, text: "Te pasamos preview y ajustamos 1 ronda." },
    { title: "4. Go-Live", icon: CheckCircle2, text: "Publicación + tracking + checklist final." },
  ];

  const pricing = [
    {
      name: "Launch",
      description: "Depende de páginas y contenido.",
      price: "Desde 950€",
      features: ["Web One-Page o Multi-page", "Dominio + SSL 1 año", "Entrega 7-10 días"]
    },
    {
      name: "Upgrade",
      description: "Depende de funcionalidades.",
      price: "Desde 1800€",
      features: ["Arquitectura a medida", "CMS autogestionable", "SEO Técnico Avanzado"],
      featured: true
    },
    {
      name: "Mantenimiento",
      description: "Depende del volumen de cambios.",
      price: "Desde 50€/mes",
      features: ["Hosting alto rendimiento", "Copias de seguridad", "Cambios mensuales"]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden z-20">
        {/* Visual Focus Overlay */}
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-0 pointer-events-none"></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-8 leading-[1.1] text-shadow">
              Tu web lista para <br className="hidden md:block" />
              <span className="text-gradient">generar clientes.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed font-medium">
              Diseño y desarrollo con Next.js: rápido, claro y optimizado para convertir en móvil.
              <br className="hidden md:block" /> WhatsApp, llamadas y medición incluida.
            </p>

            {/* Value Chips */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["Mobile-first", "Entrega 7–10 días", "WhatsApp 1-click", "Tracking básico"].map((chip, i) => (
                <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-text-muted backdrop-blur-sm">
                  {chip}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <OpenModalButton size="lg" className="min-w-[200px] shadow-[0_0_40px_-10px_var(--color-accent-glow)]">
                Pedir presupuesto
              </OpenModalButton>
              <WhatsAppButton number={whatsappNumber} className="min-w-[200px] bg-transparent border-2 border-white/10 hover:bg-white/5" text="Consultar por WhatsApp" />
            </div>
            <p className="mt-4 text-xs text-text-muted opacity-60">
              Respuesta en menos de 24h.
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
                  {["Lenta, diseño anticuado y difícil de navegar.", "Instalamos medición de clicks a WhatsApp, llamadas y formularios.", "Dependes de plugins que fallan y seguridad vulnerable."].map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="mt-1 bg-red-500/10 p-2 rounded-full"><XCircle className="h-5 w-5 text-red-500" /></div>
                      <p className="text-text-muted text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Card className="bg-gradient-to-br from-surface to-surface-hover border-accent/20 relative overflow-hidden group shadow-[0_0_50px_-20px_var(--color-accent-glow)]">
                <div className="absolute top-0 right-0 p-32 bg-accent/5 blur-[100px] rounded-full group-hover:bg-accent/10 transition-all duration-700"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold text-foreground mb-8">La Solución Levely</h3>
                  <div className="space-y-6">
                    {[
                      "Desarrollo a medida con Next.js",
                      "Analítica integrada (GA4) para medir leads",
                      "Te lo dejamos estable y fácil de mantener (o lo gestionamos)"
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

                  <Button
                    variant={service.featured ? 'primary' : 'outline'}
                    size="md"
                    className="w-full mt-auto"
                    onClick={() => handleOpenIncludes(service.title.toLowerCase() as any)}
                  >
                    Ver qué incluye
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
                <div className="relative group h-full">
                  <div className="bg-surface hover:bg-surface-hover border border-white/5 p-8 rounded-2xl transition-colors duration-300 h-full flex flex-col">
                    <div className="w-12 h-12 bg-surface-hover rounded-xl flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-300 shrink-0">
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
          <p className="text-center text-xs text-text-muted mt-12 opacity-60">
            Ventana de respuesta: 24–48h laborables (equipo part-time).
          </p>
        </div>
      </section >

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
                  <OpenModalButton variant={plan.featured ? 'primary' : 'outline'} fullWidth size="sm">
                    Pedir presupuesto
                  </OpenModalButton>
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
              { q: "¿Cuánto tardan?", a: "7–10 días para Launch (depende del contenido). Proyectos a medida, 3-4 semanas." },
              { q: "¿Tengo que pagar mantenimiento?", a: "No si lo gestionas tú. Si lo gestionamos nosotros, es mensual." },
              { q: "¿La web será mía?", a: "Sí. Código y propiedad del proyecto son tuyos tras el pago final." },
              { q: "¿Cómo funciona el pago?", a: "50% inicio / 50% antes de publicar. Factura oficial." },
              { q: "¿Incluye hosting y dominio?", a: "Launch incluye 1 año de dominio/SSL. El hosting podemos gestionarlo o usar el tuyo." }
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
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">¿Hablamos 10 minutos?</h2>
            <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto">
              Te decimos qué cambiar para captar más WhatsApps/llamadas y si merece la pena rehacer la web.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <OpenModalButton size="lg" className="min-w-[200px] text-lg shadow-[0_0_40px_-10px_var(--color-accent-glow)]">
                Pedir presupuesto
              </OpenModalButton>
              <WhatsAppButton number={whatsappNumber} className="min-w-[200px] bg-transparent border-2 border-white/10 hover:bg-white/5" text="Consultar por WhatsApp" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <PricingIncludesModal
        isOpen={includesModalOpen}
        onClose={() => setIncludesModalOpen(false)}
        defaultTab={activeTab}
      />
    </>
  );
}
