import { useEffect, useRef, useState } from 'react';
import { assets, nav, benefits, steps, hood, people, plans, faqs, TRIAL } from './data';
import { Reveal, Words, Counter, useScrollProgress, useGlobalFx, useInView } from './fx';

const Arrow = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>;
const Btn = ({ href, children, ghost = false }: any) => (
  <a className={'btn' + (ghost ? ' ghost' : '')} href={href}><span>{children}</span><Arrow /></a>
);
const Head = ({ eyebrow, title, sub }: any) => (
  <Reveal className="head"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{sub && <p>{sub}</p>}</Reveal>
);

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <a href="#hero" className="logo"><i />SecureBase</a>
      <nav className={open ? 'open' : ''}>{nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}</nav>
      <Btn href={TRIAL}>Free Trial</Btn>
      <button className="burger" aria-label="Menu" onClick={() => setOpen(!open)}><b className={open ? 'x' : ''} /></button>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <video autoPlay muted loop playsInline src={assets.heroVideo} />
      <div className="grid-bg" /><div className="shade" /><div className="scan" />
      <div className="wrap hc">
        <span className="pill"><i />AI-Powered Cyber Defense</span>
        <h1><Words text="Outsmart" delay={150} /><br /><Words text="every threat." delay={450} /></h1>
        <p className="lead">Real-time AI defense that acts before you even know you're under attack.</p>
        <div className="row"><Btn href={TRIAL}>Start free trial</Btn><Btn href={TRIAL} ghost>See the dashboard</Btn></div>
      </div>
      <div className="mouse"><span /></div>
    </section>
  );
}

const MQ = ['Threat Detection', 'Zero Trust', 'SOC 2', 'ISO 27001', 'HIPAA', 'MITRE ATT&CK', 'SIEM', 'SOAR', 'Autonomous Response'];
const Marquee = () => (
  <div className="mq"><div>{[...MQ, ...MQ, ...MQ, ...MQ].map((t, i) => <span key={i}>{t}<i>✦</i></span>)}</div></div>
);

function Features() {
  const S: any[] = [{ to: 99.97, dec: 2, suf: '%', l: 'Threat Detection Rate' }, { pre: '<', to: 0.3, dec: 1, suf: 's', l: 'Response Time' }, { to: 4, suf: 'M+', l: 'Attacks Blocked Daily' }];
  return (
    <section id="features" className="wrap sec">
      <Head eyebrow="Built for businesses where security matters" title="Built to protect. Designed to scale." />
      <div className="stats">{S.map((s, i) => <Reveal key={s.l} delay={i * 120} className="stat card"><Counter {...s} /><span>{s.l}</span></Reveal>)}</div>
      <div className="grid3">{benefits.map(([t, d], i) => <Reveal key={t} delay={i * 120} className="card"><div className="ico">{['◈', '◉', '◆'][i]}</div><h3>{t}</h3><p>{d}</p></Reveal>)}</div>
    </section>
  );
}

const POOL = [['Brute force attempt', '192.168.1.44', 'high'], ['Anomalous API call', 'service-prod-7', 'mid'], ['Policy change detected', 'IAM role updated', 'low'], ['Port scan blocked', '10.0.4.18', 'mid'], ['Malware quarantined', 'endpoint-229', 'high'], ['MFA anomaly', 'user: j.doe', 'low']];
function Dashboard() {
  const [ref, v] = useInView(0.25);
  const [k, setK] = useState(3);
  const [ev, setEv] = useState(847);
  useEffect(() => { const id = setInterval(() => { setK(x => x + 1); setEv(780 + Math.floor(Math.random() * 120)); }, 2200); return () => clearInterval(id); }, []);
  const list = [0, 1, 2].map(j => ({ e: POOL[(k + j) % POOL.length], key: k + j }));
  return (
    <section className="wrap sec split">
      <Reveal>
        <span className="eyebrow">Core Capabilities</span>
        <h2>Threats surface instantly.</h2>
        <p className="muted">A single pane of glass for your entire security posture. Real-time event streams, asset risk scoring, and active incident timelines, all AI-triaged and prioritized by true impact.</p>
        <Btn href={TRIAL}>Explore the Dashboard</Btn>
      </Reveal>
      <div ref={ref} className={'win3d ' + (v ? 'in' : '')}>
        <div className="win">
          <div className="bar"><span /><span /><span /><em>securebase.ai/dashboard/live</em></div>
          <div className="shot" style={{ backgroundImage: `url(${assets.dashboard})` }}>
            <div className="panel">
              <div className="ph"><b>Security Operations Center</b><span className="live"><i />LIVE</span></div>
              <div className="kpis"><div><b>1,284</b><small>Assets Monitored</small></div><div><b>{3 + (k % 3)}</b><small>Active Incidents</small></div><div><b>{ev}</b><small>Events/min</small></div></div>
              {list.map(({ e: [a, b, s], key }, j) => <div className="ev" key={key} style={{ opacity: 1 - j * 0.2 }}><i className={s} /><div><b>{a}</b><small>{b}</small></div><small>0:{String(12 + j * 7).padStart(2, '0')}s</small></div>)}
            </div>
          </div>
        </div>
        <div className="glow" />
      </div>
    </section>
  );
}

function Process() {
  const ref = useRef<any>(null);
  const p = useScrollProgress(ref);
  const i = Math.min(2, Math.floor(p * 3));
  return (
    <section ref={ref} className="proc">
      <div className="sticky wrap">
        <Head eyebrow="The Process" title="Three steps to absolute control." />
        <div className="ptabs">{steps.map(([l, n], j) => <span key={n} className={j === i ? 'on' : j < i ? 'done' : ''}>{l} — {n}</span>)}<em style={{ width: `${p * 100}%` }} /></div>
        <div className="pgrid">
          <div className="ptext">{steps.map(([k, t, d], j) => <div key={t} className={'pi ' + (j === i ? 'on' : '')}><span className="big">{k}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
          <div className="pimg">{steps.map(([k], j) => <div key={k} className={j === i ? 'on' : ''} style={{ backgroundImage: `url(${assets.process})`, filter: `hue-rotate(${j * 40}deg)` }} />)}<b>0{i + 1}</b></div>
        </div>
      </div>
    </section>
  );
}

function Hood() {
  return (
    <section className="wrap sec">
      <Head eyebrow="Under the Hood" title="Invisible power at your side, delivering certainty." />
      <div className="grid2">{hood.map(([t, d], j) => <Reveal key={t} delay={(j % 2) * 120} className="card big-card"><span className="num">0{j + 1}</span><h3>{t}</h3><p>{d}</p><div className="line" /></Reveal>)}</div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => { const id = setTimeout(() => setI((i + 1) % people.length), 6500); return () => clearTimeout(id); }, [i]);
  const p = people[i];
  return (
    <section id="testimonials" className="wrap sec">
      <Head eyebrow="Testimonials" title="What others whisper about the experience." />
      <Reveal className="quote" key={i}>
        <div className="qm">“</div>
        <blockquote key={i} className="swap">{p.quote}</blockquote>
        <div className="who swap">{p.img ? <img src={p.img} alt={p.name} /> : <div className="av">{p.name[0]}</div>}<div><b>{p.name}</b><small>{p.role}</small></div></div>
      </Reveal>
      <div className="tabs">{people.map((x, j) => <button key={x.name} className={j === i ? 'on' : ''} onClick={() => setI(j)}>{x.name}{j === i && <em key={i} />}</button>)}</div>
    </section>
  );
}

function Pricing() {
  const [annual, setAnnual] = useState(false);
  return (
    <section id="pricing" className="wrap sec">
      <Head eyebrow="Pricing" title="Simple pricing, built to scale." />
      <div className="toggle"><span style={{ transform: `translateX(${annual ? 100 : 0}%)` }} /><button onClick={() => setAnnual(false)}>Monthly</button><button onClick={() => setAnnual(true)}>Annual <em>Save 20%</em></button></div>
      <div className="grid3 plans">
        {plans.map((p: any, j) => (
          <Reveal key={p.name} delay={j * 120} className={'card plan' + (p.popular ? ' pop' : '')}>
            {p.popular && <span className="badge">MOST POPULAR</span>}
            <small className="eyebrow">{p.name}</small>
            <div className="price">{p.custom ? 'Custom' : <><sup>$</sup><span key={String(annual)} className="pn">{annual ? p.annual : p.monthly}</span><small>/mo</small></>}</div>
            <p>{p.desc}</p>
            <Btn href={p.href} ghost={!p.popular}>{p.cta}</Btn>
            <ul>{p.items.map((x: string) => <li key={x}>{x}</li>)}</ul>
          </Reveal>
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
        <Reveal key={q} delay={j * 70} className={'acc' + (o === j ? ' open' : '')}>
          <button onClick={() => setO(o === j ? null : j)}>{q}<span /></button>
          <div className="body"><div><p>{a}</p></div></div>
        </Reveal>
      ))}
    </section>
  );
}

function CTA() {
  return (
    <section className="wrap sec">
      <Reveal className="cta">
        <div className="cbg" style={{ backgroundImage: `url(${assets.cta1})` }} /><div className="cbg b" style={{ backgroundImage: `url(${assets.cta2})` }} />
        <span className="eyebrow">Get Started</span>
        <h2>Step into the future, guided by AI clarity.</h2>
        <p>Join 2,400+ security teams who trust Sentinel AI to protect their most critical assets. No credit card required to start.</p>
        <div className="row"><Btn href={TRIAL}>Start free trial</Btn><Btn href={TRIAL} ghost>See the dashboard</Btn></div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot"><div className="wrap fgrid">
      <div><a href="#hero" className="logo"><i />SecureBase</a><small>Address</small><p>2972 Westheimer Rd. Santa Ana, Illinois 85486</p><small>© 2026 — Copyright</small></div>
      <div><small>Info</small>{nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</div>
      <div><small>Contact us</small><a href="tel:+15559876543">+1 5559876543</a><a href="mailto:benjaminstanly07@gmail.com">benjaminstanly07@gmail.com</a><a href="https://x.com/BenjaminUIX">X / Twitter</a><a href="https://www.youtube.com/">YouTube</a></div>
    </div><div className="word">SecureBase</div></footer>
  );
}

export default function App() {
  useGlobalFx();
  return <><div className="cursor" /><div className="noise" /><Nav /><Hero /><Marquee /><Features /><Dashboard /><Process /><Hood /><Testimonials /><Pricing /><FAQ /><CTA /><Footer /></>;
}
