import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { IMG } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: pageMeta({ title: "Service Areas — Quick Auto Recovery", description: "We cover Bradford, Leeds, Halifax, Huddersfield, Dewsbury, Wakefield, York, Hull, Doncaster, Middlesbrough and Oldham, with nationwide recovery available 24/7.", path: "/service-areas", image: IMG.roadsideAssistance }),
    links: [{ rel: "canonical", href: "/service-areas" }],
  }),
  component: AreasPage,
});

const areas = ["Bradford", "Leeds", "Halifax", "Huddersfield", "Dewsbury", "Wakefield", "York", "Hull", "Doncaster", "Middlesbrough", "Oldham", "Nationwide on request"];

function AreasPage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Service Areas" title="Covering West Yorkshire, day and night" subtitle="Based in Bradford and covering Leeds, Halifax, Huddersfield, Dewsbury, Wakefield, York, Hull, Doncaster, Middlesbrough and Oldham, with long-distance recovery available nationwide across the UK." image={IMG.roadsideAssistance} />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {areas.map((a) => (
            <div key={a} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl">
              <MapPin className="h-5 w-5 text-primary" /> <span className="font-semibold">{a}</span>
            </div>
          ))}
        </div>
      </section>
      <EmergencyCTA />
    </SiteLayout>
  );
}