'use client';

import React, { useState } from 'react';
import { Input, Textarea } from './ui/Input';
import CustomSelect from './ui/CustomSelect';
import Button from './ui/Button';

export default function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        nombre: '',
        empresa: '',
        contacto: '', // Email or phone
        servicio: 'Launch',
        mensaje: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const scriptURL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

        if (!scriptURL) {
            // Fallback for demo/dev if no URL set
            console.warn("NEXT_PUBLIC_APPS_SCRIPT_URL not set");
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                if (onSuccess) setTimeout(onSuccess, 2000);
            }, 1000);
            return;
        }

        try {
            // POST formatting for Google Apps Script standard
            const response = await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors', // standard hack for GAS
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // With no-cors we can't check response.ok, we assume success if no network error
            setLoading(false);
            setSuccess(true);
            if (onSuccess) setTimeout(onSuccess, 2000);

        } catch (err) {
            console.error(err);
            setError('Hubo un error al enviar. Por favor intenta de nuevo o usa WhatsApp.');
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                <p className="text-text-muted">Te responderemos en breve.</p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                name="nombre"
                placeholder="Tu nombre"
                label="Nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
            />

            <div className="grid grid-cols-2 gap-4">
                <Input
                    name="empresa"
                    placeholder="Nombre de tu negocio"
                    label="Empresa (Opcional)"
                    value={formData.empresa}
                    onChange={handleChange}
                />
                <CustomSelect
                    label="Servicio de interés"
                    options={[
                        { value: 'Launch', label: 'Plan Launch' },
                        { value: 'Upgrade', label: 'Plan Upgrade' },
                        { value: 'Mantenimiento', label: 'Mantenimiento' },
                        { value: 'Consultoria', label: 'Consultoría / Otro' },
                    ]}
                    value={formData.servicio}
                    onChange={(val) => setFormData(prev => ({ ...prev, servicio: val }))}
                />
            </div>

            <Input
                name="contacto"
                placeholder="tu@email.com o teléfono"
                label="Contacto"
                required
                value={formData.contacto}
                onChange={handleChange}
            />

            <Textarea
                name="mensaje"
                placeholder="Cuéntanos brevemente sobre tu proyecto..."
                label="Mensaje"
                rows={4}
                required
                value={formData.mensaje}
                onChange={handleChange}
            />

            {error && <p className="text-sm text-red-500">{error}</p>}

            <Button type="submit" fullWidth disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Solicitud'}
            </Button>

            <p className="text-xs text-center text-text-muted opacity-50">
                Tus datos están seguros. Cero spam.
            </p>
        </form>
    );
}
