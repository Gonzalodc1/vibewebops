'use client';

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
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
        if (error) setError(''); // Clear error on type
    };

    const validateForm = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9+\s-]{9,}$/; // At least 9 chars, nums, +, space, dash

        // Check if input looks like email OR phone
        const isEmail = emailRegex.test(formData.contacto);
        const isPhone = phoneRegex.test(formData.contacto);

        if (!formData.nombre.trim()) return "El nombre es obligatorio.";
        if (!formData.mensaje.trim()) return "El mensaje es obligatorio.";
        if (!isEmail && !isPhone) return "Introduce un email o teléfono válido.";

        return null;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError('');

        const scriptURL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

        if (!scriptURL) {
            console.warn("NEXT_PUBLIC_APPS_SCRIPT_URL not set");
            // Simulate success for dev
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                if (onSuccess) setTimeout(onSuccess, 2000);
            }, 1000);
            return;
        }

        try {
            // Sanitize Payload for Sheets
            const payload = { ...formData };
            if (payload.contacto.trim().startsWith('+')) {
                // Add apostrophe to force string in Sheets (prevents formula error)
                payload.contacto = "'" + payload.contacto;
            }

            await fetch(scriptURL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            setLoading(false);
            setSuccess(true);
            if (onSuccess) setTimeout(onSuccess, 2000);

        } catch (err) {
            console.error(err);
            setError('Error al enviar. Inténtalo de nuevo o usa WhatsApp.');
            setLoading(false);
        }
    };

    if (success) {
        return (
            <div className="text-center py-12 animate-fade-in">
                <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
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
                    placeholder="Tu negocio (Opcional)"
                    label="Empresa"
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
                placeholder="Email o Teléfono"
                label="Contacto"
                required
                value={formData.contacto}
                onChange={handleChange}
                error={error && error.includes('válido') ? error : undefined}
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

            {error && !error.includes('válido') && <p className="text-sm text-red-500 font-medium">{error}</p>}

            <Button type="submit" fullWidth disabled={loading} className="relative">
                {loading ? (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                    </>
                ) : (
                    'Enviar Solicitud'
                )}
            </Button>

            <p className="text-xs text-center text-text-muted opacity-50">
                Tus datos están seguros. Cero spam.
            </p>
        </form>
    );
}
