import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { FAQ } from "@/components/site/FAQ";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

const faqs = [
  { q: "Are you really available 24/7?", a: "Yes — our phone and WhatsApp lines are answered day or night, including weekends and bank holidays." },
  { q: "How quickly can you arrive?", a: "Our average response time in the Bradford and Leeds area is 15 minutes. Times vary by location and traffic." },
  { q: "How much does recovery cost?", a: "Call us with your location and we'll give you an upfront fixed price — no hidden fees." },
  { q: "Do you cover long-distance recovery?", a: "Yes, we offer nationwide recovery and vehicle transport across West Yorkshire and beyond." },
  { q: "Do you accept card payments?", a: "Yes — we accept cash, card and bank transfer on the spot." },
  { q: "Are you insured?", a: "Absolutely. We are fully insured for vehicle recovery and transport." },
];

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: pageMeta({ title: "FAQs — Quick Auto Recovery", description: "Answers to common questions about our 24/7 roadside assistance, recovery and storage services.", path: "/faqs", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }) }],
  }),
  component: FaqsPage,
});

function FaqsPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="FAQs" title="Frequently Asked Questions" image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16"><FAQ items={faqs} /></section>
      <EmergencyCTA />
    </SiteLayout>
  );
}