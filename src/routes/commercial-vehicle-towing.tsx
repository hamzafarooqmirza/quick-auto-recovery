import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServicePageTemplate } from "@/components/site/ServicePageTemplate";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/commercial-vehicle-towing")({
  head: () => ({
    meta: pageMeta({ title: "Commercial Vehicle Towing | Quick Auto Recovery", description: "Reliable towing for vans, fleet vehicles and business-critical transport, minimising downtime.", path: "/commercial-vehicle-towing", image: IMG.commercialVehicleTowing }),
    links: [{ rel: "canonical", href: "/commercial-vehicle-towing" }],
  }),
  component: CommercialVehicleTowing,
});

function CommercialVehicleTowing() {
  return (
    <SiteLayout>
      <ServicePageTemplate
        eyebrow="Service" title="Commercial Vehicle Towing" hero={IMG.commercialVehicleTowing}
        description="Downtime costs money. Our commercial towing service gets your van or fleet vehicle moved quickly and professionally, minimising disruption to your business."
        benefits={["Towing for vans, minibuses and light commercial vehicles", "Fleet account options for repeat business customers", "Fast response to minimise business downtime", "Recovery to your depot, garage or preferred location", "Careful handling of vehicles carrying tools or stock", "Clear invoicing suitable for business accounts"]}
        why={[
          { title: "Business-Ready", desc: "We understand that downtime affects your bottom line." },
          { title: "Fleet Friendly", desc: "Comfortable working with businesses running multiple vehicles." },
          { title: "Fast Turnaround", desc: "We prioritise getting commercial vehicles moving again quickly." },
        ]}
        faqs={[
          { q: "Do you offer accounts for fleet customers?", a: "Yes, we can arrange fleet account options for regular business customers." },
          { q: "Can you tow a van full of equipment?", a: "Yes, we take care to secure both the vehicle and its contents." },
          { q: "How quickly can you respond for a business vehicle?", a: "We prioritise fast response to keep business disruption to a minimum." },
        ]}
      />
    </SiteLayout>
  );
}
