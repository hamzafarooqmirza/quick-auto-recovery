import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/battery-replacement")({
  head: () => ({
    meta: pageMeta({ title: "Mobile Battery Replacement | Quick Auto Recovery", description: "On-site car battery testing and replacement across West Yorkshire. Quality batteries fitted at your home, workplace or roadside.", path: "/battery-replacement", image: IMG.breakdownRecoveryAlt }),
    links: [{ rel: "canonical", href: "/battery-replacement" }],
  }),
  component: BatteryReplacement,
});

function BatteryReplacement() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Battery Replacement" hero={IMG.breakdownRecoveryAlt}
        description="If your battery is past saving, we replace it on the spot with a quality, warrantied unit suited to your vehicle. No tow needed."
        benefits={["On-site battery testing with professional equipment", "Quality replacement batteries fitted on the spot", "Emergency battery replacement, 24/7", "Old battery recycled responsibly", "Suitable for cars, vans, 4x4s and light commercials", "Manufacturer warranty included"]}
        why={[
          { title: "Tested First", desc: "We confirm the battery is the issue before replacing." },
          { title: "Quality Batteries", desc: "Reliable, warrantied units matched to your car." },
          { title: "Mobile Service", desc: "We come to your home, work or roadside." },
        ]}
        faqs={[
          { q: "How long do car batteries last?", a: "Typically 4–6 years, but cold weather, short trips and accessories can shorten that." },
          { q: "Is the warranty included?", a: "Yes — all batteries come with a manufacturer warranty, often 2–4 years." },
          { q: "Do you take the old battery?", a: "Yes, we recycle it responsibly at no extra cost." },
        ]}
      />
    </SiteLayout>
  );
}