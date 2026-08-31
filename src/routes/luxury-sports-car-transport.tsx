import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/luxury-sports-car-transport")({
  head: () => ({
    meta: pageMeta({ title: "Luxury & Sports Car Transport | Quick Auto Recovery", description: "Soft-tie flatbed transport built around high-value performance and luxury cars.", path: "/luxury-sports-car-transport", image: IMG.luxurySportsCarTransport }),
    links: [{ rel: "canonical", href: "/luxury-sports-car-transport" }],
  }),
  component: LuxurySportsCarTransport,
});

function LuxurySportsCarTransport() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Luxury & Sports Car Transport" hero={IMG.luxurySportsCarTransport}
        description="Prestige and performance cars need more than a standard tow. We use soft-tie flatbed transport and extra care at every step to move your luxury or sports car without a mark."
        benefits={["Soft-tie strapping to protect bodywork and wheels", "Low-clearance-friendly loading ramps", "Experienced operators trained on high-value vehicles", "Point-to-point transport for sales, shows or storage", "Discreet, professional service", "Optional photo check-in before transport"]}
        why={[
          { title: "Specialist Care", desc: "We treat every prestige vehicle like it's our own." },
          { title: "Damage-Free Loading", desc: "Soft ties and low ramps protect delicate trims and splitters." },
          { title: "Trusted by Owners", desc: "Regularly chosen for classic, sports and luxury car moves." },
        ]}
        faqs={[
          { q: "Do you have experience with supercars?", a: "Yes, our team regularly transports luxury and performance vehicles." },
          { q: "Will my car be towed on its wheels?", a: "No — luxury and sports cars are moved on a flatbed, never towed on their own wheels." },
          { q: "Can you transport to a dealership or show?", a: "Yes, we offer point-to-point transport for sales, shows and events." },
        ]}
      />
    </SiteLayout>
  );
}
