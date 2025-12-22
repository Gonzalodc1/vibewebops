import { ServiceCard } from "./ServiceCard";

interface Plan {
    name: string;
    description: string;
    price: string;
    features: string[];
    ctaLink: string;
    isPopular?: boolean;
}

export function PricingTable({ plans }: { plans: Plan[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
                <ServiceCard
                    key={index}
                    title={plan.name}
                    description={plan.description}
                    price={plan.price}
                    features={plan.features}
                    ctaLink={plan.ctaLink}
                    isPopular={plan.isPopular}
                    ctaText="Empezar ahora"
                />
            ))}
        </div>
    );
}
