import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/recovery-to-mechanic")({
  head: () => ({
    meta: pageMeta({ title: "Recovery to Mechanic | Quick Auto Recovery", description: "Fast recovery to an independent mechanic of your choice, anywhere you need.", path: "/recovery-to-mechanic", image: IMG.recoveryToMechanic }),
    links: [{ rel: "canonical", href: "/recovery-to-mechanic" }],
  }),
  component: RecoveryToMechanic,
});

function RecoveryToMechanic() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Recovery to Mechanic" hero={IMG.recoveryToMechanic}
        description="If you'd rather use a specific mechanic instead of a garage chain, we'll recover your car straight to them — no matter where they're based."
        benefits={["Transport to any independent mechanic you choose", "Ideal for regular customers of a trusted local mechanic", "Suitable for non-runners and drivable vehicles alike", "Flexible scheduling around your mechanic's availability", "Careful handling from pickup to drop-off", "Clear communication with you throughout"]}
        why={[
          { title: "Total Flexibility", desc: "We recover to whichever mechanic you already trust." },
          { title: "Reliable Timing", desc: "We aim to arrive within your agreed window." },
          { title: "Careful Handover", desc: "Your mechanic gets the full story on how the vehicle was picked up." },
        ]}
        faqs={[
          { q: "Can I choose which mechanic you take my car to?", a: "Yes, you decide — we simply deliver it there." },
          { q: "What if my mechanic works from home?", a: "That's no problem, we can recover to residential workshops too." },
          { q: "Do you speak to the mechanic directly?", a: "If needed, we can coordinate arrival details directly with them." },
        ]}
      />
    </SiteLayout>
  );
}
