import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Aviso Legal | Levely Creative" };

export default function AvisoLegal() {
    return (
        <LegalLayout title="Aviso Legal">
            <p className="mb-4">
                En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSICE), informamos a los usuarios de los datos identificativos y condiciones de uso de este sitio web.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">1. Titularidad del Sitio Web</h2>
            <p className="mb-4">
                El titular de este sitio web es <strong>Levely Creative</strong>, operando como profesional independiente / agencia digital.
                <br />
                <strong>Contacto:</strong> contacto@levelycreative.com
                <br />
                <strong>Actividad:</strong> Diseño y desarrollo de sitios web y aplicaciones.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">2. Objeto</h2>
            <p className="mb-4">
                El presente Aviso Legal regula el acceso y la utilización del sitio web, cuyo objetivo es informar sobre los servicios de diseño y desarrollo web ofrecidos por Levely Creative. El acceso y navegación por el sitio web implica la aceptación sin reservas de las presentes condiciones.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">3. Propiedad Intelectual e Industrial</h2>
            <p className="mb-4">
                Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, tecnología, software, diseño gráfico y códigos fuente) son propiedad intelectual de Levely Creative o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación sobre los mismos más allá de lo estrictamente necesario para el correcto uso de la web.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">4. Exención de Responsabilidad</h2>
            <p className="mb-4">
                Levely Creative no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitarlo.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">5. Modificaciones</h2>
            <p className="mb-4">
                Levely Creative se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que éstos aparezcan presentados.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">6. Legislación Aplicable</h2>
            <p className="mb-4">
                La relación entre Levely Creative y el usuario se regirá por la normativa española vigente. Cualquier controversia se someterá a los Juzgados y tribunales competentes.
            </p>
        </LegalLayout>
    );
}
