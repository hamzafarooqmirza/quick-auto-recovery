import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/flatbed-towing")({
  head: () => ({
    meta: pageMeta({ title: "Flatbed Towing Service | Quick Auto Recovery", description: "Zero-contact, wheels-off-the-ground transport for vehicles that need the gentlest ride.", path: "/flatbed-towing", image: IMG.flatbedTowing }),
    links: [{ rel: "canonical", href: "/flatbed-towing" }],
  }),
  component: FlatbedTowing,
});

function FlatbedTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Flatbed Towing Service" hero={IMG.flatbedTowing}
        description="Our tilt-and-slide flatbed trucks load your vehicle without towing it on its own wheels, making this the safest option for low vehicles, non-runners and high-value cars."
        benefits={["Hydraulic tilt-and-slide loading", "No wheels-on-road towing, reducing wear and risk", "Ideal for low-clearance and non-running vehicles", "Secure strapping and soft-tie systems", "Suitable for local and long-distance moves", "Ramps rated for a wide range of vehicle weights"]}
        why={[
          { title: "Gentlest Transport", desc: "Your vehicle rides fully off the ground, not dragged on its wheels." },
          { title: "Handles Non-Runners", desc: "Perfect for vehicles that can't be safely driven onto a truck." },
          { title: "Secure Load", desc: "Multi-point strapping keeps your vehicle stable in transit." },
        ]}
        faqs={[
          { q: "What's the benefit of flatbed over a normal tow?", a: "The vehicle is fully lifted off the road, avoiding wear and damage from being towed on its wheels." },
          { q: "Can you flatbed a car that won't start?", a: "Yes — flatbeds are ideal for vehicles that can't be driven." },
          { q: "Is flatbed towing safe for low sports cars?", a: "Yes, tilt-and-slide ramps are designed for low-clearance vehicles." },
        ]}
      />
    </SiteLayout>
  );
}
