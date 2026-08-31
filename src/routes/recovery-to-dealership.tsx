import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/recovery-to-dealership")({
  head: () => ({
    meta: pageMeta({ title: "Recovery to Dealership | Quick Auto Recovery", description: "Vehicle recovery straight to your dealership for warranty work, service, or diagnostics.", path: "/recovery-to-dealership", image: IMG.recoveryToDealership }),
    links: [{ rel: "canonical", href: "/recovery-to-dealership" }],
  }),
  component: RecoveryToDealership,
});

function RecoveryToDealership() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Recovery to Dealership" hero={IMG.recoveryToDealership}
        description="Under warranty or need dealer-specific diagnostics? We'll recover your vehicle directly to the dealership, handled the way manufacturers expect."
        benefits={["Direct transport to any franchised dealership", "Careful loading suited to warranty vehicle requirements", "Support for service, recall and diagnostic visits", "Coordination with dealership service reception", "Suitable for new and used dealer vehicles", "Documentation available on request"]}
        why={[
          { title: "Warranty-Aware", desc: "We handle vehicles the way dealerships expect for warranty work." },
          { title: "Direct Delivery", desc: "No stops in between — straight to the dealership bay." },
          { title: "Professional Handover", desc: "We liaise with service reception so nothing gets lost in translation." },
        ]}
        faqs={[
          { q: "Will recovery affect my car's warranty?", a: "No, professional recovery to a dealership is standard and won't affect your warranty." },
          { q: "Can you take my car to any dealership brand?", a: "Yes, we recover to all makes and dealership networks." },
          { q: "Do you provide paperwork for the dealership?", a: "Yes, documentation can be provided on request." },
        ]}
      />
    </SiteLayout>
  );
}
