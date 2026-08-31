import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/accident-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Accident Recovery | Quick Auto Recovery", description: "Sensitive, professional recovery after a collision, coordinated with insurers when needed.", path: "/accident-recovery", image: IMG.accidentRecovery }),
    links: [{ rel: "canonical", href: "/accident-recovery" }],
  }),
  component: AccidentRecovery,
});

function AccidentRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Accident Recovery" hero={IMG.accidentRecovery}
        description="After an accident, our team recovers your vehicle safely and sensitively, working alongside insurers and repairers so you can focus on what matters."
        benefits={["Available 24/7 for accident scenes", "Experience working with insurance companies", "Safe recovery of damaged or non-drivable vehicles", "Secure transport to a garage, compound or home", "Clear communication throughout the process", "Compassionate, professional operators"]}
        why={[
          { title: "Insurance-Ready", desc: "We provide the documentation insurers usually ask for." },
          { title: "Calm Under Pressure", desc: "Our crews are experienced with accident scenes of all sizes." },
          { title: "Secure Transport", desc: "Damaged vehicles are loaded and secured with extra care." },
        ]}
        faqs={[
          { q: "Can you attend an accident scene directly?", a: "Yes — call us and we'll dispatch a truck straight to the scene." },
          { q: "Do you work with insurance companies?", a: "Yes, we regularly coordinate directly with insurers and assessors." },
          { q: "Can you take my car to a specific garage?", a: "Absolutely — we'll take it to your preferred garage or a secure compound." },
        ]}
      />
    </SiteLayout>
  );
}
