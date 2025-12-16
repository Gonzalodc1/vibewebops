import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Política de Cookies | Vibe Web Ops" };

export default function Cookies() {
    return (
        <LegalLayout title="Política de Cookies">
            <p>Esta web utiliza cookies para mejorar la experiencia de usuario y analizar el tráfico.</p>
            <h2>1. ¿Qué son las cookies?</h2>
            <p>Pequeños archivos de texto...</p>
            <h2>2. Tipos de cookies</h2>
            <ul>
                <li><strong>Técnicas:</strong> Necesarias para el funcionamiento.</li>
                <li><strong>Analíticas (GA4):</strong> Nos ayudan a entender cómo usas la web. Solo se activan si nos das permiso.</li>
            </ul>
            <h2>3. Desactivar cookies</h2>
            <p>Puedes configurar tu navegador para bloquearlas...</p>
        </LegalLayout>
    );
}
