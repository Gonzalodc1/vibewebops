import { Container } from "@/components/Container";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="pt-32 pb-24">
            <Container className="prose dark:prose-invert max-w-4xl">
                <h1>{title}</h1>
                {children}
            </Container>
        </div>
    );
}
