import Link from "next/link";
import { ArrowRight, Building2, ClipboardCheck, Compass, HardHat, ShieldCheck, Wrench } from "lucide-react";
import { PageShell } from "@/components/page-shell";

const services = [
  { icon: HardHat, title: "Oil & Gas Construction", text: "Practical construction support for facilities, civil works, installations, maintenance, and project delivery." },
  { icon: ClipboardCheck, title: "Contract Services", text: "Dependable contract execution built around safety, quality control, clear reporting, and schedule discipline." },
  { icon: Compass, title: "Industry Consultancy", text: "Commercial and technical guidance that helps clients plan projects, manage risk, and make informed decisions." },
];

export default function Home() {
  return <PageShell>
    <section className="hero home-hero"><div className="hero-grid" aria-hidden="true"/><div className="container hero-content">
      <p className="eyebrow light">Nigerian oil & gas solutions</p><h1>Building dependable energy infrastructure.</h1>
      <p className="hero-copy">Inemwills Enterprise delivers construction, contract, and consultancy services for oil and gas projects across Nigeria.</p>
      <div className="hero-actions"><Link className="button button-primary" href="/services">Explore our services <ArrowRight size={18}/></Link><Link className="button button-ghost" href="/contact">Discuss a project</Link></div>
    </div><div className="hero-rail"><span>Construction</span><span>Contracts</span><span>Consultancy</span></div></section>
    <section className="section intro-section"><div className="container split-intro"><div><p className="eyebrow">Why Inemwills</p><h2>Local understanding. Professional delivery.</h2></div><div><p className="lead">From our base in Yenagoa, Bayelsa State, we support clients with responsive execution and solutions grounded in the realities of Nigeria's energy sector.</p><Link className="text-link" href="/about">Who we are <ArrowRight size={18}/></Link></div></div></section>
    <section className="section services-preview"><div className="container"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Services designed around project outcomes</h2></div><Link className="text-link" href="/services">View all services <ArrowRight size={18}/></Link></div><div className="service-grid">{services.map(({icon:Icon,title,text},i)=><article className="service-card" key={title}><span className="service-number">0{i+1}</span><Icon size={28}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="section commitment"><div className="container commitment-grid"><div className="commitment-art"><Building2 size={62}/><div><strong>Bayelsa-based</strong><span>Serving Nigeria's energy sector</span></div></div><div><p className="eyebrow light">Our commitment</p><h2>Safe work. Clear accountability. Lasting value.</h2><div className="principles"><span><ShieldCheck/> Safety-led execution</span><span><Wrench/> Fit-for-purpose solutions</span></div></div></div></section>
    <section className="cta"><div className="container cta-inner"><div><p className="eyebrow">Start a conversation</p><h2>Have an oil and gas project in view?</h2></div><Link className="button button-dark" href="/contact">Contact our team <ArrowRight size={18}/></Link></div></section>
  </PageShell>;
}
