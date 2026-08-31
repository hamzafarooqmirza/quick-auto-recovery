import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({ title: "About Us — Quick Auto Recovery", description: "Learn about Quick Auto Recovery, West Yorkshire's trusted 24/7 roadside assistance and vehicle transport company.", path: "/about", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <PageHero eyebrow="About Us" title="Built on trust, driven by service" subtitle="Quick Auto Recovery is a family-run West Yorkshire company built on punctuality, transparency and care for every vehicle we handle." image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div className="overflow-hidden rounded-3xl border border-border shadow-2xl">
          <img src={IMG.carTowing} alt="Quick Auto Recovery tow truck recovering a classic car" className="h-full w-full object-cover aspect-[4/3]" />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-black">Our Story</h2>
          <p className="mt-4 text-muted-foreground">What started as a single tow truck has grown into a fully-equipped fleet serving drivers across Bradford, Leeds and the wider West Yorkshire area. We've recovered everything from family hatchbacks to rare classics, and we treat every job with the same level of professionalism.</p>
          <p className="mt-4 text-muted-foreground">Our mission is simple: get you back on the road — or get your vehicle safely where it needs to go — quickly, affordably and without stress.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10 grid gap-6 md:grid-cols-3">
        {[
          { t: "Our Mission", d: "Deliver fast, honest, professional roadside help to every driver across West Yorkshire." },
          { t: "Our Promise", d: "Transparent pricing, no hidden fees, and a real human on every call." },
          { t: "Our Team", d: "Trained, insured operators who treat your vehicle like their own." },
        ].map((b) => (
          <div key={b.t} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-primary">{b.t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}