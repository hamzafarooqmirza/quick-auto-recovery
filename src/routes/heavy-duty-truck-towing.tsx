import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/heavy-duty-truck-towing")({
  head: () => ({
    meta: pageMeta({ title: "Heavy-Duty & Truck Towing | Quick Auto Recovery", description: "Rated equipment and experienced crews for trucks, lorries and heavy commercial vehicles.", path: "/heavy-duty-truck-towing", image: IMG.heavyDutyTruckTowing }),
    links: [{ rel: "canonical", href: "/heavy-duty-truck-towing" }],
  }),
  component: HeavyDutyTruckTowing,
});

function HeavyDutyTruckTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Heavy-Duty & Truck Towing" hero={IMG.heavyDutyTruckTowing}
        description="Heavier vehicles need heavier-rated equipment. Our heavy-duty towing service is built around the size, weight and complexity of trucks and large commercial vehicles."
        benefits={["Heavy-duty tow trucks rated for large commercial vehicles", "Experienced crews trained on truck and lorry recoveries", "Suitable for breakdowns, accidents and abandoned heavy vehicles", "Load-securing appropriate to vehicle size and cargo", "Coordination with hauliers and fleet operators", "Available for scheduled and emergency heavy recoveries"]}
        why={[
          { title: "Rated for Heavy Loads", desc: "Equipment matched to truck and lorry weights, not passenger cars." },
          { title: "Fleet Experience", desc: "Comfortable coordinating with hauliers and logistics teams." },
          { title: "Safety First", desc: "Heavy recoveries are planned carefully to protect crew and cargo." },
        ]}
        faqs={[
          { q: "Can you tow a fully loaded truck?", a: "We assess the load and vehicle before confirming the right equipment for the job." },
          { q: "Do you work with haulage companies?", a: "Yes, we regularly support hauliers and fleet operators." },
          { q: "Is heavy-duty towing available 24/7?", a: "Yes, emergency heavy vehicle recovery is available around the clock." },
        ]}
      />
    </SiteLayout>
  );
}
