import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/desert-offroad-recovery")({
  head: () => ({
    meta: pageMeta({ title: "Desert & Off-Road Recovery / Winching | Quick Auto Recovery", description: "Winch-equipped recovery for vehicles stuck in sand, mud or rough, unpaved terrain.", path: "/desert-offroad-recovery", image: IMG.desertOffroadRecovery }),
    links: [{ rel: "canonical", href: "/desert-offroad-recovery" }],
  }),
  component: DesertOffroadRecovery,
});

function DesertOffroadRecovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Desert & Off-Road Recovery / Winching" hero={IMG.desertOffroadRecovery}
        description="Stuck off the beaten track? Our winch-equipped trucks and recovery gear are built to pull vehicles free from sand, mud and rugged, off-road terrain."
        benefits={["Heavy-duty winching equipment on board", "Recovery from sand, mud and loose or rough terrain", "Snatch straps, shackles and traction boards carried as standard", "Suitable for 4x4s, SUVs and off-road vehicles", "Careful assessment before any pull to avoid further damage", "Follow-on tow available once vehicle is freed"]}
        why={[
          { title: "Purpose-Built Gear", desc: "Winches and recovery boards made for tough terrain." },
          { title: "Careful Recovery", desc: "We assess the ground and angle before winching, protecting your vehicle." },
          { title: "One Call, Full Recovery", desc: "We free the vehicle and, if needed, tow it onward too." },
        ]}
        faqs={[
          { q: "My car is stuck in sand, can you help?", a: "Yes, our winching equipment is built for exactly this kind of recovery." },
          { q: "Do you recover from muddy fields or tracks?", a: "Yes, mud and loose terrain recoveries are part of our regular work." },
          { q: "Will winching damage my vehicle?", a: "We assess the situation carefully and use the right attachment points to avoid damage." },
        ]}
      />
    </SiteLayout>
  );
}
