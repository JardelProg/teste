import { useState } from 'react';
import { assets, nav, stats, benefits, steps, hood, people, plans, faqs, TRIAL } from './data';

const Btn = ({ href, children, ghost = false }: any) => (
  <a className={'btn' + (ghost ? ' ghost' : '')} href={href}>{children}</a>
);
const Head = ({ eyebrow, title, sub }: any) => (
  <div className="head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</div>
);

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#hero" className="logo"><i />SecureBase</a>
      <nav className={open ? 'open' : ''}>
        {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
      </nav>
      <Btn href={TRIAL}>Free Trial</Btn>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <video autoPlay muted loop playsInline src={assets.heroVideo} />
      <div className="shade" />
      <div className="wrap fade">
        <span className="pill">AI-Powered Cyber Defense</span>
        <h1>Outsmart<br />every threat.</h1>
        <p>Real-time AI defense that acts before you even know you're under attack.</p>
        <div className="row"><Btn href={TRIAL}>Start free trial</Btn><Btn href={TRIAL} ghost>See the dashboard</Btn></div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="wrap sec">
      <Head eyebrow="Built for businesses where security matters" title="Built to protect. Designed to scale." />
      <div className="stats">{stats.map(([n, l]) => <div key={l}><b>{n}</b><span>{l}</span></div>)}</div>
      <div className="grid3">{benefits.map(([t, d]) => <article className="card" key={t}><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>
  );
}

function Dashboard() {
  const events = [['Brute force attempt','192.168.1.44','high'],['Anomalous API call','service-prod-7','mid'],['Policy change detected','IAM role updated','low']];
  return (
    <section className="wrap sec split">
      <div>
        <span className="eyebrow">Core Capabilities</span>
        <h2>Threats surface instantly.</h2>
        <p className="muted">A single pane of glass for your entire security posture. Real-time event streams, asset risk scoring, and active incident timelines, all AI-triaged and prioritized by true impact.</p>
        <Btn href={TRIAL}>Explore the Dashboard</Btn>
      </div>
      <div className="win">
        <div className="bar"><span /><span /><span /><em>securebase.ai/dashboard/live</em></div>
        <div className="shot" style={{ backgroundImage: `url(${assets.dashboard})` }}>
          <div className="panel">
            <div className="ph"><b>Security Operations Center</b><span className="live">● LIVE</span></div>
            <div className="kpis"><div><b>1,284</b><small>Assets Monitored</small></div><div><b>3</b><small>Active Incidents</small></div><div><b>847</b><small>Events/min</small></div></div>
            {events.map(([a, b, s]) => <div className="ev" key={a}><i className={s} /><div><b>{a}</b><small>{b}</small></div><small>0:12s</small></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const [i, setI] = useState(0);
  const [k, t, d] = steps[i];
  return (
    <section className="wrap sec">
      <Head eyebrow="The Process" title="Three steps to absolute control." />
      <div className="tabs">{steps.map(([l, n], j) => <button key={n} className={j === i ? 'on' : ''} onClick={() => setI(j)}>{l} — {n}</button>)}</div>
      <div className="step" style={{ backgroundImage: `url(${assets.process})` }}>
        <div className="glass"><span className="big">{k}</span><h3>{t}</h3><p>{d}</p></div>
      </div>
    </section>
  );
}

function Hood() {
  return (
    <section className="wrap sec">
      <Head eyebrow="Under the Hood" title="Invisible power at your side, delivering certainty." />
      <div className="grid2">{hood.map(([t, d], j) => <article className="card" key={t}><span className="num">0{j + 1}</span><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const p = people[i];
  return (
    <section id="testimonials" className="wrap sec">
      <Head eyebrow="Testimonials" title="What others whisper about the experience." />
      <div className="quote">
        <blockquote>“{p.quote}”</blockquote>
        <div className="who">
          {p.img ? <img src={p.img} alt={p.name} /> : <div className="av">{p.name[0]}</div>}
          <div><b>{p.name}</b><small>{p.role}</small></div>
        </div>
      </div>
      <div className="tabs">{people.map((x, j) => <button key={x.name} className={j === i ? 'on' : ''} onClick={() => setI(j)}>{x.name}</button>)}</div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="wrap sec">
      <Head eyebrow="Pricing" title="Simple pricing, built to scale." />
      <div className="toggle">
        <button className={!annual ? 'on' : ''} onClick={() => setAnnual(false)}>Monthly</button>
        <button className={annual ? 'on' : ''} onClick={() => setAnnual(true)}>Annual <em>Save 20%</em></button>
      </div>
      <div className="grid3 plans">
        {plans.map((p: any) => (
          <article className={'card plan' + (p.popular ? ' pop' : '')} key={p.name}>
            {p.popular && <span className="badge">MOST POPULAR</span>}
            <small className="eyebrow">{p.name}</small>
            <div className="price">{p.custom ? 'Custom' : <><sup>$</sup>{annual ? p.annual : p.monthly}<small>/mo</small></>}</div>
            <p>{p.desc}</p>
            <Btn href={p.href} ghost={!p.popular}>{p.cta}</Btn>
            <ul>{p.items.map((x: string) => <li key={x}>{x}</li>)}</ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQ() {
  const [o, setO] = useState<number | null>(0);
  return (
    <section id="faq" className="wrap sec faq">
      <Head eyebrow="FAQ" title="Your questions, answered." sub="Everything you need to know about getting started with SecureBase and what to expect from day one." />
      {faqs.map(([q, a], j) => (
        <div className={'acc' + (o === j ? ' open' : '')} key={q}>
          <button onClick={() => setO(o === j ? null : j)}>{q}<span>{o === j ? '−' : '+'}</span></button>
          {o === j && <p>{a}</p>}
        </div>
      ))}
    </section>
  );
}

function CTA() {
  return (
    <section className="wrap sec">
      <div className="cta" style={{ backgroundImage: `linear-gradient(#000a,#000d),url(${assets.cta1})` }}>
        <span className="eyebrow">Get Started</span>
        <h2>Step into the future, guided by AI clarity.</h2>
        <p>Join 2,400+ security teams who trust Sentinel AI to protect their most critical assets. No credit card required to start.</p>
        <div className="row"><Btn href={TRIAL}>Start free trial</Btn><Btn href={TRIAL} ghost>See the dashboard</Btn></div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot"><div className="wrap fgrid">
      <div><a href="#hero" className="logo"><i />SecureBase</a><small>Address</small><p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p><small>© 2026 — Copyright</small></div>
      <div><small>Info</small>{nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
      <div><small>Contact us</small><a href="tel:+15559876543">+1 5559876543</a><a href="mailto:benjaminstanly07@gmail.com">benjaminstanly07@gmail.com</a><a href="https://x.com/BenjaminUIX">X / Twitter</a><a href="https://www.youtube.com/">YouTube</a></div>
    </div></footer>
  );
}

export default function App() {
  return <><Nav /><Hero /><Features /><Dashboard /><Process /><Hood /><Testimonials /><Pricing /><FAQ /><CTA /><Footer /></>;
}
