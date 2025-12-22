"use client";

import React, { Fragment, useState } from 'react';
import { Dialog, Transition, Tab } from '@headlessui/react';
import { X, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';
import { useModal } from '@/context/ModalContext';

type TabType = 'launch' | 'upgrade' | 'maintenance';

interface PricingIncludesModalProps {
    isOpen: boolean;
    onClose: () => void;
    defaultTab: TabType;
}

export default function PricingIncludesModal({ isOpen, onClose, defaultTab }: PricingIncludesModalProps) {
    const { openModal: openContactModal } = useModal();
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "34711245655";

    // Map defaultTab prop to index if needed, or controlled state
    // Headless UI Tab.Group uses index (0, 1, 2)
    const tabIndexMap: Record<TabType, number> = {
        launch: 0,
        upgrade: 1,
        maintenance: 2
    };

    const [selectedIndex, setSelectedIndex] = useState(tabIndexMap[defaultTab]);

    // Update index when prop changes (effect usually needed if modal stays mounted)
    React.useEffect(() => {
        setSelectedIndex(tabIndexMap[defaultTab]);
    }, [defaultTab]);

    const tabs = [
        {
            key: 'launch',
            name: 'Launch',
            description: 'Ideal si necesitas una web lista para captar desde ya.',
            features: [
                'Diseño UX/UI Personalizado',
                'Desarrollo Next.js + Tailwind',
                'WhatsApp + Llamada 1-click',
                'GA4 + eventos'
            ],
            note: 'Alcance exacto se concreta en la propuesta.',
        },
        {
            key: 'upgrade',
            name: 'Upgrade',
            description: 'Ideal si tu web existe pero no convierte. Rediseño completo para escalar resultados.',
            features: [
                'Auditoría de Conversión',
                'Diseño Premium Animado',
                'Integraciones (CRM/Email)',
                'Dashboard de Métricas'
            ],
            note: 'Integraciones y métricas según herramientas del cliente.',
        },
        {
            key: 'maintenance',
            name: 'Mantenimiento',
            description: 'Ideal si no quieres tocar nada técnico. Tu negocio siempre online.',
            features: [
                'Monitorización 24/7',
                'Cambios de contenido',
                'Informe mensual',
                'Soporte prioritario'
            ],
            note: 'Ritmo y alcance de cambios según plan acordado.',
        }
    ];

    const handleBudgetClick = () => {
        onClose(); // Close this modal
        setTimeout(() => openContactModal(), 300); // Wait for animation then open contact
    };

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${whatsappNumber}`, '_blank');
    };

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[60]" onClose={onClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-surface border border-white/10 p-6 text-left align-middle shadow-xl transition-all">
                                <div className="flex justify-between items-center mb-6">
                                    <Dialog.Title as="h3" className="text-lg font-bold leading-6 text-foreground">
                                        ¿Qué incluye cada plan?
                                    </Dialog.Title>
                                    <button
                                        onClick={onClose}
                                        className="text-text-muted hover:text-foreground transition-colors outline-none focus:ring-2 focus:ring-accent rounded-full p-1"
                                    >
                                        <X size={20} />
                                    </button>
                                </div>

                                <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                                    <Tab.List className="flex space-x-1 rounded-xl bg-surface-hover p-1 mb-6">
                                        {tabs.map((tab) => (
                                            <Tab
                                                key={tab.key}
                                                className={({ selected }) =>
                                                    cn(
                                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 transition-all duration-200 ring-offset-2 ring-offset-surface focus:outline-none focus:ring-2 focus:ring-accent',
                                                        selected
                                                            ? 'bg-accent text-white shadow-md'
                                                            : 'text-text-muted hover:bg-white/[0.05] hover:text-foreground'
                                                    )
                                                }
                                            >
                                                {tab.name}
                                            </Tab>
                                        ))}
                                    </Tab.List>

                                    <Tab.Panels>
                                        {tabs.map((tab) => (
                                            <Tab.Panel
                                                key={tab.key}
                                                className={cn(
                                                    'rounded-xl bg-surface p-1 focus:outline-none focus:ring-2 focus:ring-accent ring-offset-2 ring-offset-surface transition-opacity duration-300'
                                                )}
                                            >
                                                <div className="space-y-6">
                                                    <div>
                                                        <p className="text-lg text-foreground font-medium mb-4">
                                                            {tab.description}
                                                        </p>
                                                        <ul className="space-y-3">
                                                            {tab.features.map((feature, idx) => (
                                                                <li key={idx} className="flex items-start gap-3">
                                                                    <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                                                    <span className="text-text-muted">{feature}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {tab.note && (
                                                        <p className="text-xs text-text-muted opacity-60 italic border-l-2 border-accent/20 pl-3">
                                                            {tab.note}
                                                        </p>
                                                    )}

                                                    <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                                                        <Button
                                                            onClick={handleBudgetClick}
                                                            className="flex-1"
                                                            size="lg"
                                                            variant="primary"
                                                        >
                                                            Pedir presupuesto
                                                        </Button>
                                                        <Button
                                                            onClick={handleWhatsAppClick}
                                                            variant="outline"
                                                            className="flex-1 sm:flex-none border-white/10 hover:border-accent"
                                                            size="lg"
                                                        >
                                                            <MessageCircle className="mr-2 h-5 w-5" />
                                                            WhatsApp
                                                        </Button>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}
