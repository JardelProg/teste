import { useEffect, useRef, useState } from 'react';

export function useInView(th = 0.15) {
  const ref = useRef<any>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); io.disconnect(); } }, { threshold: th });
    io.observe(el); return () => io.disconnect();
  }, []);
  return [ref, v] as const;
}

export const Reveal = ({ children, delay = 0, className = '', as: T = 'div' }: any) => {
  const [r, v] = useInView();
  return <T ref={r} className={`rv ${v ? 'in' : ''} ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</T>;
};

export const Words = ({ text, delay = 0 }: { text: string; delay?: number }) => (
  <>{text.split(' ').map((w, i) => (
    <span className="wd" key={i}><span style={{ animationDelay: `${delay + i * 90}ms` }}>{w}&nbsp;</span></span>
  ))}</>
);

export function Counter({ to, dec = 0, pre = '', suf = '' }: any) {
  const [r, v] = useInView(0.4);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!v) return; let s: number; let id: number;
    const f = (t: number) => { s = s || t; const p = Math.min(1, (t - s) / 1600); setN(to * (1 - Math.pow(1 - p, 4))); if (p < 1) id = requestAnimationFrame(f); };
    id = requestAnimationFrame(f); return () => cancelAnimationFrame(id);
  }, [v]);
  return <b ref={r}>{pre}{n.toFixed(dec)}{suf}</b>;
}

export function useScrollProgress(ref: any) {
  const [p, setP] = useState(0);
  useEffect(() => {
    const f = () => {
      const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect();
      setP(Math.min(1, Math.max(0, -r.top / (r.height - innerHeight))));
    };
    f(); addEventListener('scroll', f, { passive: true }); addEventListener('resize', f);
    return () => { removeEventListener('scroll', f); removeEventListener('resize', f); };
  }, []);
  return p;
}

export function useGlobalFx() {
  useEffect(() => {
    const m = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cx', e.clientX + 'px');
      document.documentElement.style.setProperty('--cy', e.clientY + 'px');
      const c = (e.target as HTMLElement).closest?.('.card') as HTMLElement | null;
      if (c) { const b = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - b.left + 'px'); c.style.setProperty('--my', e.clientY - b.top + 'px'); }
    };
    const s = () => { document.documentElement.style.setProperty('--sy', String(scrollY)); document.body.classList.toggle('sc', scrollY > 40); };
    addEventListener('mousemove', m); addEventListener('scroll', s, { passive: true }); s();
    return () => { removeEventListener('mousemove', m); removeEventListener('scroll', s); };
  }, []);
}
