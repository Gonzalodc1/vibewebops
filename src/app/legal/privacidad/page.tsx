import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Política de Privacidad | Vibe Web Ops" };

export default function Privacidad() {
    return (
        <LegalLayout title="Política de Privacidad">
            <p>En Vibe Web Ops nos tomamos muy en serio su privacidad...</p>
            <h2>1. Responsable del Tratamiento</h2>
            <p>Vibe Web Ops...</p>
            <h2>2. Finalidad</h2>
            <p>Gestionar las solicitudes de información recibidas a través del formulario web y facilitar el contacto.</p>
            <h2>3. Legitimación</h2>
            <p>Consentimiento del interesado al enviar el formulario.</p>
        </LegalLayout>
    );
}
