'use client';

import React, { createContext, useContext, useState } from 'react';
import Modal from '@/components/ui/Modal';
import ContactForm from '@/components/ContactForm';

interface ModalContextType {
    openModal: () => void;
    closeModal: () => void;
    isModalOpen: boolean;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <ModalContext.Provider value={{ openModal, closeModal, isModalOpen }}>
            {children}
            <Modal isOpen={isModalOpen} onClose={closeModal} title="Cuéntanos tu proyecto">
                <ContactForm onSuccess={closeModal} />
            </Modal>
        </ModalContext.Provider>
    );
}

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
