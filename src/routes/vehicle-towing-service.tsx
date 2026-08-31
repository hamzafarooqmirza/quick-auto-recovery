import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/vehicle-towing-service")({
  head: () => ({
    meta: pageMeta({ title: "Vehicle Towing Service | Quick Auto Recovery", description: "Safe, reliable towing for cars, vans and light vehicles wherever you've stopped, with fixed-fee quotes.", path: "/vehicle-towing-service", image: IMG.vehicleTowingService }),
    links: [{ rel: "canonical", href: "/vehicle-towing-service" }],
  }),
  component: VehicleTowingService,
});

function VehicleTowingService() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Vehicle Towing Service" hero={IMG.vehicleTowingService}
        description="From a quick tow around the corner to a longer trip across town, our towing service moves your vehicle safely using the right equipment for the job."
        benefits={["Suitable for cars, vans and light commercial vehicles", "Wheel-lift and flatbed options available", "Careful handling to avoid further damage", "Local and long-distance towing", "Fully insured drivers and equipment", "Simple, fixed-fee quotes"]}
        why={[
          { title: "Right Equipment", desc: "We match the tow method to your vehicle type." },
          { title: "Careful Handling", desc: "Trained operators secure your vehicle properly every time." },
          { title: "Fair Pricing", desc: "One clear price, agreed before we start." },
        ]}
        faqs={[
          { q: "What vehicles can you tow?", a: "Cars, vans, and most light commercial vehicles." },
          { q: "Can you tow automatic transmission cars?", a: "Yes — we use flatbed or wheel-lift methods that are safe for automatics." },
          { q: "Do you tow long distance?", a: "Yes, both local and long-distance towing are available." },
        ]}
      />
    </SiteLayout>
  );
}
