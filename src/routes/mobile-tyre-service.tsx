import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/mobile-tyre-service")({
  head: () => ({
    meta: pageMeta({ title: "Mobile Tyre Service | Quick Auto Recovery", description: "Flat tyre or blowout? Our fully-equipped mobile tyre van comes to you — replacements, repairs and wheel changes 24/7.", path: "/mobile-tyre-service", image: IMG.carAndTowingVan }),
    links: [{ rel: "canonical", href: "/mobile-tyre-service" }],
  }),
  component: MobileTyre,
});

function MobileTyre() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Mobile Tyre Service" hero={IMG.carAndTowingVan}
        description="Our fully-kitted mobile tyre van brings the workshop to you — we balance, fit and swap tyres anywhere across West Yorkshire."
        benefits={["Flat tyre assistance, 24/7", "On-site tyre replacement and fitting", "Wheel changing and rotation", "Full tyre balancing with mobile equipment", "Suits cars, vans and light commercials", "Save the cost and hassle of being towed"]}
        why={[
          { title: "Fully Mobile Workshop", desc: "Professional tyre changer and balancer onboard." },
          { title: "Quality Tyres", desc: "Major brands available — fitted on the spot." },
          { title: "Always Available", desc: "Day or night, motorway or driveway." },
        ]}
        faqs={[
          { q: "Do you carry all tyre sizes?", a: "We carry common sizes and can source any tyre quickly for delivery." },
          { q: "Can you fit run-flat tyres?", a: "Yes — our equipment handles run-flats and low-profile tyres." },
          { q: "Will you come to a motorway?", a: "Yes, we attend safe motorway shoulders and service areas 24/7." },
        ]}
      />
    </SiteLayout>
  );
}