'use client';

import React from 'react';
import Button from '../ui/Button';
import { useModal } from '@/context/ModalContext';
import { MessageCircle } from 'lucide-react';

interface OpenModalButtonProps {
    className?: string;
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'text';
    size?: 'sm' | 'md' | 'lg';
    fullWidth?: boolean;
}

export function OpenModalButton({
    className,
    children,
    variant = 'primary',
    size = 'md',
    fullWidth = false
}: OpenModalButtonProps) {
    const { openModal } = useModal();

    return (
        <Button
            onClick={openModal}
            className={className}
            variant={variant}
            size={size}
            fullWidth={fullWidth}
        >
            {children}
        </Button>
    );
}

export function WhatsAppButton({ number }: { number: string }) {
    return (
        <Button
            href={`https://wa.me/${number}`}
            external
            variant="text"
            className="gap-2 text-text-muted hover:text-white"
        >
            <MessageCircle className="h-5 w-5" />
            Consultar por WhatsApp
        </Button>
    );
}
