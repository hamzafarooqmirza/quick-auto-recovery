import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/breakdown-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Breakdown Recovery | Quick Auto Recovery", description: "Engine trouble, flat battery, or a car that won't start — we'll get you and your vehicle home safely.", path: "/breakdown-recovery", image: IMG.breakdownRecovery }),
    links: [{ rel: "canonical", href: "/breakdown-recovery" }],
  }),
  component: BreakdownRecovery,
});

function BreakdownRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Breakdown Recovery" hero={IMG.breakdownRecovery}
        description="Breakdowns rarely happen at a convenient time. Our recovery team reaches stranded drivers quickly and takes both you and your vehicle to safety."
        benefits={["Roadside diagnosis where possible", "Recovery to your home, garage or a safe location", "Space for driver and passengers in the truck", "Support for mechanical, electrical and tyre-related breakdowns", "Available on motorways, city streets and rural roads", "No obligation, no-fix-no-fee assessment"]}
        why={[
          { title: "Reassuring Support", desc: "We keep you informed from the first call until you're safe." },
          { title: "Anywhere, Anytime", desc: "Motorway hard shoulder or quiet country lane — we'll find you." },
          { title: "One Simple Call", desc: "We handle the recovery so you don't have to worry." },
        ]}
        faqs={[
          { q: "My car won't start, what should I do?", a: "Call us with your location — we'll dispatch a truck and take it from there." },
          { q: "Can you take me and my passengers too?", a: "Yes, our trucks have seating for the driver and passengers." },
          { q: "Do you recover from motorways?", a: "Yes, including hard shoulders, safely and quickly." },
        ]}
      />
    </SiteLayout>
  );
}
