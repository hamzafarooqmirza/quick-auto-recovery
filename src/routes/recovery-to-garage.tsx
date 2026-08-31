import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/recovery-to-garage")({
  head: () => ({
    meta: pageMeta({ title: "Recovery to Garage/Workshop | Quick Auto Recovery", description: "We'll take your vehicle straight to your trusted garage or workshop for repair.", path: "/recovery-to-garage", image: IMG.recoveryToGarage }),
    links: [{ rel: "canonical", href: "/recovery-to-garage" }],
  }),
  component: RecoveryToGarage,
});

function RecoveryToGarage() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Recovery to Garage/Workshop" hero={IMG.recoveryToGarage}
        description="Already have a garage you trust? We'll recover your vehicle directly to their workshop, coordinating timing so it arrives when they're ready for it."
        benefits={["Direct transport to any garage or workshop nationwide", "Timing coordinated with your mechanic where possible", "Suitable for breakdowns, accidents and scheduled repairs", "Careful loading to avoid further damage in transit", "Drop-off confirmation once delivered", "Works with independent garages and franchised workshops"]}
        why={[
          { title: "Your Choice of Garage", desc: "We go wherever you trust your vehicle to be repaired." },
          { title: "Coordinated Handover", desc: "We can time delivery around your workshop's schedule." },
          { title: "No Detours", desc: "Straight from pickup point to your garage door." },
        ]}
        faqs={[
          { q: "Can you take my car to my own mechanic?", a: "Yes, we'll transport it directly to any garage you choose." },
          { q: "Do you need my garage's address in advance?", a: "Yes, just let our dispatcher know when you call and we'll head straight there." },
          { q: "Can you deliver outside normal opening hours?", a: "We can arrange safe drop-off even if the workshop is closed, subject to their access policy." },
        ]}
      />
    </SiteLayout>
  );
}
