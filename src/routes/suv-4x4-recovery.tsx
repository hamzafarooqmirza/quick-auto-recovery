import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/suv-4x4-recovery")({
  head: () => ({
    meta: pageMeta({ title: "SUV & 4x4 Recovery | Quick Auto Recovery", description: "Heavier-duty recovery equipment sized correctly for SUVs, pickups and 4x4s, on-road or off it.", path: "/suv-4x4-recovery", image: IMG.suv4x4Recovery }),
    links: [{ rel: "canonical", href: "/suv-4x4-recovery" }],
  }),
  component: Suv4x4Recovery,
});

function Suv4x4Recovery() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="SUV & 4x4 Recovery" hero={IMG.suv4x4Recovery}
        description="SUVs and 4x4s are heavier and wider than standard cars, so we use trucks and ramps rated for their extra size and weight, on-road or off it."
        benefits={["Recovery equipment rated for SUV and 4x4 weights", "Wider ramps and stronger winches", "On-road breakdown and accident recovery", "Off-road recovery for stuck or bogged vehicles", "Suitable for pickups, vans and large SUVs", "Nationwide coverage for 4x4 owners"]}
        why={[
          { title: "Right-Sized Equipment", desc: "Our trucks and ramps are rated for heavier 4x4s and SUVs." },
          { title: "On- and Off-Road", desc: "We recover vehicles stuck off-road, not just on the tarmac." },
          { title: "Experienced Crews", desc: "Trained specifically on larger, heavier vehicle recoveries." },
        ]}
        faqs={[
          { q: "Can you recover a large pickup truck?", a: "Yes, our equipment is rated for SUVs, 4x4s and pickups." },
          { q: "What if my 4x4 is stuck off-road?", a: "We carry winching equipment for safely recovering stuck vehicles." },
          { q: "Is there an extra charge for larger vehicles?", a: "Pricing reflects vehicle size and job complexity, always agreed upfront." },
        ]}
      />
    </SiteLayout>
  );
}
