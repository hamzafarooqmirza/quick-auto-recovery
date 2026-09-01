import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { ServiceCard } from "@/components/site/ServiceCard";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { ContactForm } from "@/components/site/ContactForm";
import { SERVICES } from "@/lib/services";
import { IMG, PHONE, PHONE_DISPLAY, WHATSAPP } from "@/lib/assets";
import { pageMeta } from "@/lib/seo";
import { Phone, MessageCircle, Clock, Zap, Users, Banknote, ShieldCheck, Star, PhoneCall, Truck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Quick Auto Recovery — 24/7 Roadside Assistance West Yorkshire",
      description: "West Yorkshire's trusted 24/7 emergency recovery, towing, accident recovery and specialist vehicle transport. Fast response, fair prices.",
      path: "/",
      image: "/og-image.webp",
    }),
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={IMG.hero} alt="Quick Auto Recovery tow truck recovering a vehicle in West Yorkshire" className="h-full w-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" /> Available 24/7 · Nationwide
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tight leading-[1.05]">
            24/7 Emergency<br />
            <span className="bg-gradient-to-r from-primary to-yellow-200 bg-clip-text text-transparent">Car Recovery</span><br />
            & Towing
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">
            Stuck on the road? Quick Auto Recovery is West Yorkshire's go-to team for fast, professional roadside help — anywhere, anytime.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-xl shadow-primary/40 hover:scale-[1.02] transition">
              <Phone className="h-5 w-5" /> Call {PHONE_DISPLAY}
            </a>
            <a href={WHATSAPP} className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-semibold text-white shadow-xl hover:scale-[1.02] transition">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            {[
              { k: "24/7", v: "Always Open" },
              { k: "15-30min", v: "Avg Response" },
              { k: "10k+", v: "Jobs Done" },
              { k: "5★", v: "Customer Rated" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/60 px-4 py-3 backdrop-blur-xl">
                <div className="text-2xl font-black text-primary">{s.k}</div>
                <div className="text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">What we do</p>
            <h2 className="mt-3 text-4xl md:text-5xl font-black">Our Services</h2>
          </div>
          <Link to="/services" className="text-sm font-semibold text-primary hover:underline">View all services →</Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} to={s.slug} image={s.image} title={s.title} desc={s.desc} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">Why Choose Us</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">Premium service, transparent pricing and a team that genuinely cares.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { i: Clock, t: "Available 24/7", d: "Day or night, weekend or holiday — we're always one call away." },
            { i: Zap, t: "Fast Response", d: "Average 20-40min arrival across Bradford, Leeds and the wider West Yorkshire area." },
            { i: Users, t: "Experienced Team", d: "Trained operators who handle your vehicle with the utmost care." },
            { i: Banknote, t: "Affordable Prices", d: "Fair, transparent pricing with no hidden fees, ever." },
            { i: ShieldCheck, t: "Reliable Service", d: "Modern fleet, full insurance and a track record you can trust." },
            { i: Star, t: "Customer Satisfaction", d: "Hundreds of five-star reviews from happy customers across West Yorkshire." },
          ].map((w) => (
            <div key={w.t} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl transition hover:border-primary/50">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-primary"><w.i className="h-6 w-6" /></div>
              <h3 className="mt-5 text-lg font-bold">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">How It Works</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "01", i: PhoneCall, t: "Call Us", d: "Phone or WhatsApp our 24/7 line and tell us your location." },
            { n: "02", i: Truck, t: "We Dispatch", d: "Our nearest truck or van is dispatched within minutes." },
            { n: "03", i: CheckCircle2, t: "Problem Solved", d: "We get you back on the road or safely transport your vehicle." },
          ].map((s) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-card/60 p-8 backdrop-blur-xl">
              <div className="absolute -top-4 right-6 text-5xl font-black text-primary/30">{s.n}</div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground"><s.i className="h-6 w-6" /></div>
              <h3 className="mt-5 text-xl font-bold">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <EmergencyCTA />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">What Our Customers Say</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { n: "Sarah Whitfield", l: "Bradford", t: "Broke down on the ring road at 11pm — they were with me in 12 minutes. Professional and so kind." },
            { n: "Imran Hussain", l: "Leeds", t: "Best price I got for a long-distance recovery. Friendly driver, no nonsense. Highly recommend." },
            { n: "Fatima Khan", l: "Huddersfield", t: "Flat tyre on the school run. They came out, swapped it, and I was sorted in 20 minutes. Lifesavers." },
          ].map((r) => (
            <div key={r.n} className="rounded-3xl border border-border bg-card/60 p-7 backdrop-blur-xl">
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <p className="mt-4 text-sm text-muted-foreground">"{r.t}"</p>
              <div className="mt-5 text-sm font-semibold">{r.n}<span className="text-muted-foreground"> · {r.l}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-black text-center">Our Fleet in Action</h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {[IMG.hero, IMG.roadsideAssistance, IMG.carTowing, IMG.carAndTowingVan, IMG.breakdownRecoveryAlt, IMG.emergencyCarRecovery].map((src, i) => (
            <div key={i} className="overflow-hidden rounded-2xl border border-border aspect-square">
              <img src={src} alt={`Quick Auto Recovery fleet photo ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition hover:scale-105 duration-700" />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/gallery" className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-secondary">View full gallery</Link>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 grid gap-10 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get in touch</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black">Need help right now?</h2>
          <p className="mt-4 text-muted-foreground">Send us a message or call directly. Our dispatchers are standing by 24/7.</p>
          <div className="mt-8 overflow-hidden rounded-3xl border border-border aspect-[4/3]">
            <iframe title="Service area map" src="https://www.openstreetmap.org/export/embed.html?bbox=-2.15%2C53.45%2C-0.30%2C54.65&layer=mapnik" className="h-full w-full" loading="lazy" />
          </div>
        </div>
        <ContactForm />
      </section>
    </SiteLayout>
  );
}