const CDN = 'https://framerusercontent.com';
export const TRIAL = 'https://framer.link/benjamin-stanly';
export const assets = {
  heroVideo: `${CDN}/assets/283tQfrPfbIt6l6zyRi2J69M10.mp4`,
  dashboard: `${CDN}/images/sG5hhFu6o53Yp79PQ6MkpqW9kwQ.png?width=1456&height=816`,
  process: `${CDN}/images/CmwwRAyCmzT2vBpeJVGBZ5sAnBM.png?lossless=1&width=1456&height=816`,
  sophia: `${CDN}/images/2NCQR6kJnWOEf3yG1pUSYquyg.jpg?width=1200`,
  cta1: `${CDN}/images/VBtLfXcSSBU60lC9y8JTBbIwbtc.png?width=1160&height=387`,
  cta2: `${CDN}/images/pjcSSzlCtgGx7k5nmO0GFV5UnQ.png?width=1160&height=387`,
};
export const nav = [['Features','#features'],['Testimonials','#testimonials'],['Pricing','#pricing'],['FAQ','#faq']];
export const stats = [['99.97%','Threat Detection Rate'],['<0.3s','Response Time'],['4M+','Attacks Blocked Daily']];
export const benefits = [
  ['Stop breaches cold','SecureBase detects and contains threats before they spread, cutting dwell time from days to seconds with zero manual effort.'],
  ['Always-on compliance','Continuous control monitoring across SOC 2, ISO 27001, and HIPAA, with audit-ready reports generated automatically.'],
  ['Reduce security costs','Replace four tools with one. Sentinel AI consolidates your SIEM, SOAR, and scanner.'],
];
export const steps = [
  ['E','Evaluate','SecureBase ingests telemetry from endpoints, networks, cloud workloads, and identities. The engine contextualizes billions of signals per day, building a living model of your environment.'],
  ['A','Analyze','AI models correlate signals across your stack, score every asset by true business impact, and triage alerts so analysts only see what matters.'],
  ['B','Block','Autonomous playbooks isolate compromised hosts, revoke risky sessions, and close exposures in under a second, with a full audit trail.'],
];
export const hood = [
  ['SOC 2 Type II Ready','Continuous control monitoring with automated evidence collection. Audit packages generated in one click, saving hundreds of hours per year.'],
  ['Zero-Trust Architecture','Every connection, request, and identity is verified continuously. Micro-segmentation enforced dynamically based on risk scores, with no implicit trust.'],
  ['Global Threat Network','Federated intelligence from 3,000+ organizations worldwide. What one customer sees, every customer is protected from within 90 seconds.'],
  ['Predictive Risk Scoring','AI models trained on 10 years of breach data predict which vulnerabilities are most likely to be exploited in your environment and industry.'],
];
export const people = [
  { name:'Sophia R.', role:'CISO, Nexacore Group', img: assets.sophia, quote:"We replaced four separate security tools with Sentinel AI. Detection improved overnight, and our MTTD dropped from 48 hours to under 4 minutes. I've never seen anything move this fast." },
  { name:'Mia K.', role:'CISO, Innovatech', quote:'Audit season used to take weeks. With SecureBase the evidence is already collected, and our auditors were done in days.' },
  { name:'John', role:'CISO, TechSphere Inc.', quote:'The autonomous response is the real differentiator. Incidents are contained before my team even opens a ticket.' },
  { name:'Liam T.', role:'CISO, FutureTech Innovations', quote:'One pane of glass for everything. Our analysts finally spend time on threats instead of tool-switching.' },
];
export const plans = [
  { name:'STARTER', monthly:0, annual:0, desc:'For small teams establishing their security foundation. Up to 50 assets monitored.', cta:'Start free trial', href:TRIAL,
    items:['Up to 50 monitored assets','Threat detection & alerting','7-day event retention','Email & Slack notifications','Basic compliance reports','Community support'] },
  { name:'PROFESSIONAL', monthly:349, annual:279, desc:'For growing security teams that need automated response and full compliance.', cta:'Upgrade to Pro', href:TRIAL, popular:true,
    items:['Up to 500 monitored assets','Autonomous incident response','90-day event retention','MITRE ATT&CK mapping','Full compliance suite (SOC2, ISO)','Priority 24/7 support'] },
  { name:'ENTERPRISE', custom:true, desc:'For large organizations requiring custom deployment and SLA guarantees.', cta:'Contact Sales', href:'mailto:benjaminstanly07@gmail.com',
    items:['Unlimited assets','On-prem / hybrid deployment','Custom data retention','Dedicated security engineer','Custom integrations & SIEM','99.99% SLA guaranteed'] },
];
export const faqs = [
  ['What is SecureBase and how does it work?','SecureBase is an AI-powered security platform. It ingests telemetry from endpoints, networks, cloud and identities, detects threats in real time, and responds automatically.'],
  ['How long does deployment take?','Most teams are live in under a day. Lightweight connectors and agents require no downtime and no re-architecture.'],
  ['Does it replace my existing security tools?','It can. SecureBase consolidates SIEM, SOAR and vulnerability scanning, and it also integrates with the tools you want to keep.'],
  ['What compliance frameworks do you support?','SOC 2, ISO 27001 and HIPAA out of the box, with continuous control monitoring and automatic audit-ready reports.'],
  ['Is my data safe with SecureBase?','Yes. Data is encrypted in transit and at rest, access follows zero-trust principles, and enterprise plans support on-prem or hybrid deployment.'],
];
