import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/luxury-exotic-car-towing")({
  head: () => ({
    meta: pageMeta({ title: "Luxury & Exotic Car Towing | Quick Auto Recovery", description: "Specialist towing for rare and exotic vehicles, planned individually around each model's needs.", path: "/luxury-exotic-car-towing", image: IMG.luxuryExoticCarTowing }),
    links: [{ rel: "canonical", href: "/luxury-exotic-car-towing" }],
  }),
  component: LuxuryExoticCarTowing,
});

function LuxuryExoticCarTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Luxury & Exotic Car Towing" hero={IMG.luxuryExoticCarTowing}
        description="Exotic and rare vehicles often have unique clearance, weight and handling needs. We plan each exotic car tow individually, with the right ramps and securing method for that specific model."
        benefits={["Pre-tow assessment of clearance and securing points", "Extra-low ramps for supercars and classics", "Manufacturer-aware loading and securing techniques", "Options for enclosed or covered transport on request", "Experienced, vetted operators only", "Fully insured for high-value vehicles"]}
        why={[
          { title: "Model-Specific Care", desc: "We plan the tow around your exact vehicle's needs." },
          { title: "Rare Vehicle Experience", desc: "Trusted with classic, limited-edition and exotic cars." },
          { title: "Insured for Value", desc: "Cover appropriate to genuinely high-value vehicles." },
        ]}
        faqs={[
          { q: "Do you tow limited-edition or classic cars?", a: "Yes, we regularly handle rare and classic vehicles with extra care." },
          { q: "Can you arrange enclosed transport?", a: "Enclosed or covered transport can be arranged on request." },
          { q: "How do you avoid damaging low-clearance exotics?", a: "We use extra-low ramps and plan the approach angle before loading." },
        ]}
      />
    </SiteLayout>
  );
}
