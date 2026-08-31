import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/vehicle-storage")({
  head: () => ({
    meta: pageMeta({ title: "Secure Vehicle Storage | Quick Auto Recovery", description: "Safe, secure short and long-term vehicle storage in West Yorkshire. Ideal for classics, project cars, and seasonal storage.", path: "/vehicle-storage", image: IMG.carTowing }),
    links: [{ rel: "canonical", href: "/vehicle-storage" }],
  }),
  component: VehicleStorage,
});

function VehicleStorage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Vehicle Storage" hero={IMG.carTowing}
        description="Going away, restoring a classic or simply need somewhere safe to park your pride and joy? Our secure indoor storage units keep your vehicle protected."
        benefits={["Secure indoor storage units", "Short-term and long-term options", "Ideal for classics, project cars and seasonal storage", "Dry, ventilated, alarmed facility", "Collection and delivery service available", "Flexible weekly and monthly rates"]}
        why={[
          { title: "Safe Facility", desc: "Alarmed, monitored and access-controlled." },
          { title: "Vehicle Friendly", desc: "Dry and ventilated to protect bodywork and interiors." },
          { title: "Easy Logistics", desc: "Combine with our recovery service for door-to-storage delivery." },
        ]}
        faqs={[
          { q: "What's the minimum storage period?", a: "We offer flexible weekly rates with no long-term commitment." },
          { q: "Is the facility insured?", a: "Yes, the storage facility is fully insured and access-controlled." },
          { q: "Can you collect my car?", a: "Yes — we'll recover and transport it directly into storage." },
        ]}
      />
    </SiteLayout>
  );
}