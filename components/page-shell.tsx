import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Menu, Phone } from "lucide-react";

const nav = [{href:"/",label:"Home"},{href:"/about",label:"About Us"},{href:"/services",label:"Services"},{href:"/contact",label:"Contact Us"}];

export function PageShell({children}:{children:React.ReactNode}) {
  return <>
    <header className="site-header"><div className="container nav-wrap">
      <Link href="/" className="brand" aria-label="Inemwills Enterprise home"><span className="brand-mark"><i/><i/><i/></span><span><strong>INEMWILLS</strong><small>ENTERPRISE</small></span></Link>
      <nav aria-label="Main navigation">{nav.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</nav>
      <Link href="/contact" className="nav-cta">Request a consultation <ArrowUpRight size={17}/></Link>
      <details className="mobile-menu"><summary aria-label="Open navigation"><Menu/></summary><div>{nav.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div></details>
    </div></header>
    <main>{children}</main>
    <footer className="site-footer"><div className="container footer-top">
      <div className="footer-brand"><Link href="/" className="brand brand-light"><span className="brand-mark"><i/><i/><i/></span><span><strong>INEMWILLS</strong><small>ENTERPRISE</small></span></Link><p>Construction, contracts, and consultancy for Nigeria's oil and gas industry.</p></div>
      <div><h3>Company</h3>{nav.map(item=><Link key={item.href} href={item.href}>{item.label}</Link>)}</div>
      <div><h3>Contact</h3><a href="tel:+2347031216293"><Phone/>0703 121 6293</a><a href="tel:+2348083978685"><Phone/>0808 397 8685</a><a href="mailto:info@inemwills.com"><Mail/>info@inemwills.com</a></div>
      <div><h3>Office</h3><p className="address"><MapPin/>Bakery Road, Azikoro Town, Yenagoa, Bayelsa State, Nigeria.</p></div>
    </div><div className="container footer-bottom"><span>© 2026 Inemwills Enterprise. All rights reserved.</span><span>Built for reliable delivery.</span></div></footer>
  </>;
}
