import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Aviso Legal | Vibe Web Ops" };

export default function AvisoLegal() {
    return (
        <LegalLayout title="Aviso Legal">
            <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico...</p>
            <h2>1. Datos Identificativos</h2>
            <p>Nombre Comercial: Vibe Web Ops<br />Domicilio: [Dirección]<br />Email: contacto@vibewebops.com</p>
            <h2>2. Propiedad Intelectual</h2>
            <p>Todos los contenidos de este sitio web...</p>
            {/* More placeholder text */}
        </LegalLayout>
    );
}
