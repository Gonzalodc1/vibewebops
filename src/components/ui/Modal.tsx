'use client';

import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import Button from './Button';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            // Animate In
            anime({
                targets: overlayRef.current,
                opacity: [0, 1],
                duration: 300,
                easing: 'easeOutQuad',
            });

            anime({
                targets: modalRef.current,
                opacity: [0, 1],
                translateY: [20, 0],
                scale: [0.95, 1],
                delay: 50,
                duration: 400,
                easing: 'cubicBezier(0.16, 1, 0.3, 1)',
            });
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const handleClose = () => {
        // Animate Out manually could be done here, but for React state simplicity just calling onClose commonly rerenders null.
        // For a purely sweet exit animation, we'd need a transition group or similar.
        // For now, instantaneous close or simple CSS transition is acceptable, but let's try to be smooth if possible.
        // We will just callback.
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Overlay */}
            <div
                ref={overlayRef}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* Content */}
            <div
                ref={modalRef}
                className="relative w-full max-w-lg bg-surface border border-border rounded-xl shadow-2xl overflow-hidden glass opacity-0"
            >
                <div className="flex items-center justify-between p-6 border-b border-white/5">
                    {title && <h3 className="text-xl font-medium text-foreground">{title}</h3>}
                    <button
                        onClick={handleClose}
                        className="text-text-muted hover:text-foreground transition-colors"
                    >
                        ✕
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
}
