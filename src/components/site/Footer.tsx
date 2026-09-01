import { Link } from "@tanstack/react-router";
import { IMG, PHONE, PHONE_DISPLAY, WHATSAPP, EMAIL, ADDRESS, BRAND } from "@/lib/assets";
import { SERVICES } from "@/lib/services";
import { Phone, Mail, MapPin, MessageCircle, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-card/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="space-y-4">
          <img src={IMG.logo} alt={`${BRAND} logo`} className="h-24 w-auto" />
          <p className="text-sm text-muted-foreground">West Yorkshire's trusted 24/7 roadside assistance, vehicle recovery and transport specialists.</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Services</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to={s.slug} className="hover:text-primary">{s.title.split(" (")[0]}</Link></li>
            ))}
            <li><Link to="/services" className="font-semibold text-primary hover:underline">View all services →</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Company</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
            <li><Link to="/service-areas" className="hover:text-primary">Service Areas</Link></li>
            <li><Link to="/faqs" className="hover:text-primary">FAQs</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /><a href={`tel:${PHONE}`} className="hover:text-primary">{PHONE_DISPLAY}</a></li>
            <li className="flex items-start gap-2"><MessageCircle className="h-4 w-4 mt-0.5 text-primary" /><a href={WHATSAPP} className="hover:text-primary">WhatsApp</a></li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /><a href={`mailto:${EMAIL}`} className="hover:text-primary">{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" />{ADDRESS}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 px-4 py-6 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        Design with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> by{" "}
        <a href="https://linkedo.co.uk/" target="_blank" rel="noopener noreferrer nofollow" className="font-semibold text-primary hover:underline">
          Linkedo
        </a>
      </div>
    </footer>
  );
}