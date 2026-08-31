import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/emergency-car-recovery")({
  head: () => ({
    meta: pageMeta({ title: "24/7 Emergency Car Recovery | Quick Auto Recovery", description: "Round-the-clock emergency vehicle recovery. One call gets a fully-equipped truck moving towards you immediately, day or night.", path: "/emergency-car-recovery", image: IMG.emergencyCarRecovery }),
    links: [{ rel: "canonical", href: "/emergency-car-recovery" }],
  }),
  component: EmergencyCarRecovery,
});

function EmergencyCarRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="24/7 Emergency Car Recovery" hero={IMG.emergencyCarRecovery}
        description="Whatever's happened and whenever it happens, our emergency recovery team is on standby 24 hours a day, 7 days a week. One call gets a fully-equipped truck moving towards you immediately."
        benefits={["Live 24/7/365 dispatch, including nights and holidays", "Average response inside 20-40 minutes", "GPS-tracked trucks sent to your exact location", "Covers breakdowns, accidents, and non-drivable vehicles", "Clear, upfront pricing before we roll out", "Friendly, uniformed operators every time"]}
        why={[
          { title: "Always On", desc: "Our phones and trucks never sleep — call any hour." },
          { title: "Rapid Dispatch", desc: "The nearest available truck is sent the moment you call." },
          { title: "No Surprises", desc: "You get a fixed quote before any work begins." },
        ]}
        faqs={[
          { q: "Is emergency recovery really available at 3am?", a: "Yes — our dispatch line and trucks run 24/7, every day of the year." },
          { q: "How fast can you reach me?", a: "Typically 20-40 minutes depending on your location and traffic." },
          { q: "Do you charge extra for night call-outs?", a: "No — our pricing is transparent and fixed regardless of the hour." },
        ]}
      />
    </SiteLayout>
  );
}
