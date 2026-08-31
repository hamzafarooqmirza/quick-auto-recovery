import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/vehicle-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Towing & Recovery — 24/7 Tow Truck UK | Quick Auto Recovery", description: "Professional 24/7 vehicle recovery and tow truck service across West Yorkshire. Fast response, fixed fair pricing, fully insured.", path: "/vehicle-recovery", image: IMG.carTowing }),
    links: [{ rel: "canonical", href: "/vehicle-recovery" }],
  }),
  component: VehicleRecovery,
});

function VehicleRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Towing & Recovery" hero={IMG.carTowing}
        description="Whether you've broken down, been in an accident, or need a vehicle transported across the country, our tilt-and-slide tow trucks handle every job with care."
        benefits={["24/7 emergency vehicle recovery", "Tilt-and-slide flatbed trucks for safe loading", "Cars, vans, classics and prestige vehicles", "Accident recovery and insurance work", "Nationwide transport across West Yorkshire and beyond", "Fully insured and fair fixed pricing"]}
        why={[
          { title: "Fastest Response", desc: "Our nearest truck rolls within minutes of your call." },
          { title: "Damage-Free Loading", desc: "Modern hydraulic flatbeds protect your vehicle." },
          { title: "Transparent Pricing", desc: "You'll know the price before we leave the depot." },
        ]}
        faqs={[
          { q: "Can you recover from anywhere in West Yorkshire?", a: "Yes, we offer nationwide recovery 24/7." },
          { q: "Do you handle insurance jobs?", a: "Absolutely — we work with most major insurers." },
          { q: "Can you transport classic or prestige cars?", a: "Yes — our flatbeds are ideal for low-clearance and high-value vehicles." },
        ]}
      />
    </SiteLayout>
  );
}