"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, BrainCircuit, CheckCircle2, ChevronRight, Code2, Database, Download, ExternalLink, Github, Globe2, Layers3, Linkedin, Mail, Menu, Network, Play, ServerCog, Sparkles, X } from "lucide-react";

const GITHUB="https://github.com/nagasai17bce-rgb";
const LINKEDIN="https://linkedin.com/in/yasho-ramith-a662622ab";
const EMAIL="mailto:yashoramith@gmail.com";

const projects=[
["ai-lakehouse-analytics-agent","AI Lakehouse Analytics Agent","Data + AI","Natural-language analytics with SQL planning, governance and evaluation."],
["enterprise-mcp-gateway","Enterprise MCP Gateway","Agents","Controlled tool access between agents and enterprise systems."],
["agentops-observability-platform","AgentOps Observability Platform","Observability","Tracing, token/cost telemetry and evaluation signals for agents."],
["ai-incident-response-agent","AI Incident Response Agent","Reliability","Incident classification, diagnosis, runbooks and approval-aware actions."],
["ai-software-engineering-agent","AI Software Engineering Agent","DevTools","Repository inspection, patch proposals, tests and human review."],
["enterprise-voice-agent-platform","Enterprise Voice Agent Platform","Voice AI","Voice sessions with tools, memory and human handoff."],
["multi-model-inference-router","Multi-Model Inference Router","Inference","Latency/cost-aware routing across model providers."],
["adaptive-llm-batching-gateway","Adaptive LLM Batching Gateway","Inference","Bounded request batching for predictable throughput."],
["semantic-llm-cache","Semantic LLM Cache","Performance","Canonicalized request caching with TTL-aware reuse."],
["agent-memory-service","Agent Memory Service","Agents","Scoped memory storage and retrieval for agent context."],
["enterprise-rag-platform","Enterprise RAG Platform","RAG","Grounded retrieval with deterministic ranking and citations."],
["ai-data-governance-agent","AI Data Governance Agent","Security","Sensitive-field detection, masking and approval controls."],
["agent-security-firewall","Agent Security Firewall","Security","Prompt-injection and secret-pattern detection."],
["autonomous-support-engineer","Autonomous Support Engineer","Support AI","Urgency classification, diagnostics and escalation."],
["ai-knowledge-loop","AI Knowledge Loop","Knowledge","Redacted knowledge candidates with novelty and review states."],
["agent-workflow-orchestrator","Agent Workflow Orchestrator","Orchestration","Checkpointed workflows with retries and verification."],
["ai-feature-store-agent","AI Feature Store Agent","Data","Feature freshness, quality and lineage-aware retrieval."],
["llm-evaluation-platform","LLM Evaluation Platform","Evaluation","Repeatable evaluation and regression gates."],
["agent-sandbox-runtime","Agent Sandbox Runtime","Runtime","Bounded subprocess execution with timeout controls."],
["multimodal-document-intelligence","Multimodal Document Intelligence","Multimodal","Document chunking and structured extraction with citations."]
] as const;

const experience=[
{period:"Aug 2024 — Present",company:"Salesforce",role:"Member of Technical Staff (MTS)",location:"Bengaluru, India",points:["Building AI/backend systems around agents, tool calling, MCP, retrieval, evaluation and production workflows.","Working across Python/Java services, distributed processing, cloud infrastructure and observability.","Designing production patterns for latency, reliability, governance, human approval and controlled enterprise actions."]},
{period:"Jul 2022 — Aug 2024",company:"Walmart",role:"Software Engineer — AI/Data/Backend",location:"India",points:["Engineered distributed transaction and fraud analytics workloads using Spark, Databricks, BigQuery and SQL optimization.","Designed telemetry retention and cloud-cost optimization for large Log Analytics datasets, exporting historical data to Blob Storage in batches.","Migrated fraud reporting from legacy ECOMM sources to T360 datasets and validated Tableau reporting flows."]},
{period:"Jun 2021 — Jul 2022",company:"Tekion",role:"Software Engineer",location:"India",points:["Built backend services and production APIs for enterprise automotive software.","Worked across distributed services, integrations, data processing and reliability-oriented engineering."]}
];

const skills=[
["AI / LLM","LLMs · RAG · Agents · Claude · Prompt Engineering · Context Engineering · Structured Outputs"],
["Agent Systems","MCP · Tool Calling · Planning · Memory · Guardrails · Human-in-the-Loop"],
["Inference","Model Routing · Batching · Caching · Token Optimization · LLM Evaluation"],
["Backend","Python · Java · FastAPI · Spring Boot · REST · GraphQL · Microservices · Kafka"],
["Data","Spark · Databricks · BigQuery · SQL · ETL · Data Migration · Data Quality"],
["Cloud","AWS · Azure · GCP · Docker · Kubernetes · GitHub Actions · ArgoCD"],
["Storage","Azure Blob · Log Analytics · Cosmos DB · Redis · PostgreSQL · MongoDB"],
["Observability","KQL · OpenTelemetry · CloudWatch · Distributed Tracing"]
];

const stack=["Next.js 16","React 19","TypeScript","Tailwind CSS 4","Python","Java","FastAPI","Spring Boot","Databricks","BigQuery","Azure","GCP","AWS","Kubernetes","MCP","RAG","LLM Evaluation"];

function SectionTitle({eyebrow,title,copy}:{eyebrow:string;title:string;copy:string}){return <div className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[.3em] text-blue-300">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-[-.04em] sm:text-5xl">{title}</h2><p className="mt-4 text-base leading-7 text-zinc-400">{copy}</p></div>}

function BrandPill({name,kind}:{name:string;kind:"salesforce"|"walmart"|"tekion"|"bits"}){const mark=kind==="salesforce"?"☁":kind==="walmart"?"✦":kind==="tekion"?"T":"B";return <span className="brand-pill"><b>{mark}</b>{name}</span>}

export default function Portfolio(){
 const[open,setOpen]=useState(false);const[progress,setProgress]=useState(0);
 useEffect(()=>{const f=()=>{const m=document.documentElement.scrollHeight-innerHeight;setProgress(m>0?(scrollY/m)*100:0)};addEventListener("scroll",f,{passive:true});f();return()=>removeEventListener("scroll",f)},[]);
 const nav=["Experience","Projects","AI Systems","Stack","Contact"];
 return <main className="portfolio-shell min-h-screen bg-[#050608] text-white">
  <div className="scroll-progress" style={{width:progress+"%"}}/>
  <header className="site-header"><div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
   <a href="#home" className="text-sm font-bold tracking-[.32em]">NAGA SAI</a>
   <nav className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">{nav.map(x=><a key={x} href={"#"+x.toLowerCase().replace(" ","-")} className="transition hover:text-white">{x}</a>)}</nav>
   <div className="flex items-center gap-2"><a href={GITHUB} target="_blank" rel="noreferrer" className="icon-button"><Github size={17}/></a><a href="#video-resume" className="hidden rounded-full border border-white/10 px-4 py-2 text-sm font-semibold sm:inline-flex">Video Resume</a><a href={EMAIL} className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black sm:inline-flex">Contact</a><button onClick={()=>setOpen(!open)} className="icon-button md:hidden" aria-label="Menu">{open?<X size={18}/>:<Menu size={18}/>}</button></div>
  </div>{open&&<nav className="border-t border-white/10 bg-black/95 p-5 md:hidden">{nav.map(x=><a onClick={()=>setOpen(false)} key={x} href={"#"+x.toLowerCase().replace(" ","-")} className="block py-3 text-zinc-300">{x}</a>)}<a onClick={()=>setOpen(false)} href="#video-resume" className="block py-3 text-zinc-300">Video Resume</a></nav>}</header>

  <section id="home" className="hero-stage"><div className="hero-grid"/><div className="hero-glow hero-glow-a"/><div className="hero-glow hero-glow-b"/>
   <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-10 px-5 pb-16 pt-32 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
    <div className="relative z-10"><div className="eyebrow-chip"><span/> AI ENGINEER · MTS @ SALESFORCE</div>
     <h1 className="hero-title">Naga Sai<span>.</span></h1><p className="hero-subtitle">Agents · Inference · Data · Distributed Systems</p><p className="hero-copy">I build intelligent systems and scalable backend platforms where AI meets real production constraints.</p>
     <div className="mt-8 flex flex-wrap gap-3"><a href="#experience" className="primary-cta">Explore my work <ArrowDown size={16}/></a><a href="#video-resume" className="secondary-cta"><Play size={15} fill="currentColor"/> Watch video resume</a></div>
     <div className="mt-9 flex flex-wrap gap-2"><BrandPill name="Salesforce" kind="salesforce"/><BrandPill name="Walmart" kind="walmart"/><BrandPill name="Tekion" kind="tekion"/><BrandPill name="BITS Goa" kind="bits"/></div>
     <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">{[["5+","Years"],["20","AI repos"],["Voice","AI focus"]].map(([a,b])=><div key={b} className="stat-tile"><b>{a}</b><span>{b}</span></div>)}</div>
    </div>
    <div className="hero-visual"><div className="portrait-orbit orbit-one"/><div className="portrait-orbit orbit-two"/><div className="portrait-halo"/>
     <div className="portrait-frame"><img src="https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png" alt="Naga Sai portrait" className="portrait-image"/></div>
     <div className="floating-brand fb-salesforce"><BrandPill name="Salesforce · MTS" kind="salesforce"/><small>Aug 2024 — Present</small></div>
     <div className="floating-brand fb-walmart"><BrandPill name="Walmart · AI" kind="walmart"/><small>Jul 2022 — Aug 2024</small></div>
     <div className="floating-brand fb-tekion"><BrandPill name="TEKION · SDE" kind="tekion"/><small>Jun 2021 — Jul 2022</small></div>
     <div className="floating-brand fb-bits"><BrandPill name="BITS Goa" kind="bits"/><small>B.Tech · 2017 — 2021</small></div>
     <div className="portrait-caption"><span>BUILDING</span><b>AI systems that ship.</b><small>Agents · RAG · MCP · Voice AI</small></div>
    </div>
   </div>
  </section>

  <section className="brand-strip"><div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-10 gap-y-3 px-5 lg:px-8"><span className="strip-label">CAREER</span><b>Salesforce</b><span>Walmart</span><span>Tekion</span><span>BITS Goa</span><span className="text-zinc-600">·</span><span>AI Platforms</span><span>Distributed Systems</span></div></section>

  <section id="video-resume" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="video-resume-card">
   <div className="video-copy"><p className="text-xs font-semibold uppercase tracking-[.3em] text-blue-300">VIDEO RESUME</p><h2 className="mt-4 text-4xl font-semibold tracking-[-.04em] sm:text-6xl">12 seconds.<br/>The whole journey.</h2><p className="mt-5 max-w-xl text-base leading-7 text-zinc-400">A cinematic intro covering the person behind the systems, the Salesforce → Walmart → Tekion journey, and the AI/Voice AI work being built now.</p><div className="mt-7 flex flex-wrap gap-2">{["Salesforce","Walmart","Tekion","BITS Goa","Voice AI"].map(x=><span key={x} className="video-tag">{x}</span>)}</div></div>
   <div className="video-window motion-reel" aria-label="Animated video resume">
  <div className="reel-scene reel-scene-one"><img src="https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png" alt="" /><div><b>NAGA SAI</b><span>AI Engineer · MTS @ Salesforce</span></div></div>
  <div className="reel-scene reel-scene-two"><div className="reel-panel"><span>2017 — 2021</span><b>BITS Goa</b><small>Computer Science</small></div><div className="reel-panel"><span>Jun 2021 — Jul 2022</span><b>Tekion</b><small>Backend Systems</small></div><div className="reel-panel"><span>Jul 2022 — Aug 2024</span><b>Walmart</b><small>AI · Data Platforms</small></div><div className="reel-panel"><span>Aug 2024 — Present</span><b>Salesforce</b><small>GenAI · AI Platforms</small></div></div>
  <div className="reel-scene reel-scene-three"><div className="reel-big">AGENTS<br/>INFERENCE<br/>VOICE AI</div><div className="reel-sub">Building intelligent systems for real-world use.</div></div>
  <div className="reel-progress"><span/><span/><span/></div>
  <div className="video-label"><Play size={14} fill="currentColor"/> VIDEO RESUME · AUTO REPLAY</div>
</div>
  </div></section>

  <section id="experience" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionTitle eyebrow="01 / Experience" title="From backend systems to AI platforms." copy="Production engineering across AI, distributed systems, data platforms and cloud infrastructure."/><div className="space-y-4">{experience.map((j,i)=><article key={j.period} className="experience-card"><div className="experience-date"><span>0{i+1}</span><b>{j.period}</b><small>{j.location}</small></div><div><div className="flex flex-wrap items-start justify-between gap-4"><div><h3>{j.company}</h3><p>{j.role}</p></div><ArrowUpRight className="text-zinc-600"/></div><ul className="mt-6 grid gap-3 md:grid-cols-2">{j.points.map(p=><li key={p}><CheckCircle2 size={15}/><span>{p}</span></li>)}</ul></div></article>)}</div></section>

  <section id="ai-systems" className="dark-band py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="02 / AI Systems" title="A production AI stack, not a demo." copy="Planning, retrieval, memory, tools, inference, evaluation and operations are treated as one system."/><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["Agents","Planning · Tool Use",BrainCircuit],["RAG","Search · Context",Database],["Inference","Routing · Batching",ServerCog],["MCP","Tools · Security",Network],["Memory","Context · Recall",Layers3],["Evaluation","Regression · Traces",CheckCircle2],["Voice AI","STT · LLM · TTS",Globe2],["Production","K8s · CI/CD",Code2]].map(([n,d,I])=><div key={String(n)} className="system-card"><I size={23}/><h3>{String(n)}</h3><p>{String(d)}</p></div>)}</div><div className="system-flow mt-5">{["User","Agent","RAG + Memory","MCP Tools","Enterprise API"].map((x,i)=><span key={x}>{x}{i<4&&<ChevronRight size={15}/>}</span>)}</div></div></section>

  <section id="projects" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="flex items-end justify-between gap-5"><SectionTitle eyebrow="03 / Projects" title="20 AI engineering systems." copy="Agents, inference, RAG, security, observability, voice and data infrastructure."/><a href={GITHUB} target="_blank" rel="noreferrer" className="mb-10 hidden items-center gap-2 text-sm text-zinc-400 md:flex">View GitHub <ArrowUpRight size={15}/></a></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{projects.map(([slug,title,cat,desc],i)=><a key={slug} href={GITHUB+"/"+slug} target="_blank" rel="noreferrer" className="project-card group"><div className="flex justify-between"><span className="project-cat">{cat}</span><span className="project-number">{String(i+1).padStart(2,"0")}</span></div><h3>{title}</h3><p>{desc}</p><div className="project-link">Open repository <ExternalLink size={14}/></div></a>)}</div></section>

  <section id="stack" className="dark-band py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><SectionTitle eyebrow="04 / Stack" title="The tools behind the work." copy="Modern frontend on the portfolio; production AI, backend, data and cloud engineering underneath."/><div className="stack-cloud">{stack.map(x=><span key={x}>{x}</span>)}</div><div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{skills.map(([n,v])=><div key={n} className="skill-card"><p>{n}</p><span>{v}</span></div>)}</div></div></section>

  <section id="education" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><SectionTitle eyebrow="05 / Education" title="Computer Science foundation." copy="BITS Goa · Computer Science · 2017–2021"/><div className="education-card"><div><h3>Birla Institute of Technology and Science, Pilani — Goa Campus</h3><p>B.E. Computer Science & Information Technology</p></div><span>2017 — 2021</span></div></section>

  <section className="voice-section"><div className="mx-auto max-w-5xl px-5 text-center"><p className="text-xs font-semibold uppercase tracking-[.3em] text-blue-300">THE NEXT INTERFACE</p><h2>is a conversation.</h2><p>Voice-native agents connecting speech, reasoning, enterprise tools, memory and action.</p><div className="voice-pills">{["Voice","STT","LLM","MCP","Memory","Tools","Action","TTS"].map(x=><span key={x}>{x}</span>)}</div></div></section>

  <section id="contact" className="mx-auto max-w-7xl px-5 py-24 lg:px-8"><div className="contact-card"><p className="text-xs font-semibold uppercase tracking-[.3em] text-blue-300">06 / Contact</p><h2>Have a difficult AI problem?</h2><p>Let’s talk about agents, inference infrastructure, data platforms, voice AI or backend systems that need to work in production.</p><div className="mt-8 flex flex-wrap gap-3"><a href={GITHUB} target="_blank" rel="noreferrer" className="secondary-cta"><Github size={16}/> GitHub</a><a href={LINKEDIN} target="_blank" rel="noreferrer" className="secondary-cta"><Linkedin size={16}/> LinkedIn</a><a href={EMAIL} className="primary-cta"><Mail size={16}/> Email</a></div></div></section>

  <footer className="border-t border-white/10 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-xs text-zinc-600 sm:flex-row sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} Naga Sai</span><span>AI · Agents · Inference · Data · Distributed Systems</span><a href="#home" className="flex gap-1 hover:text-white">Top <ArrowUpRight size={13}/></a></div></footer>
 </main>
}
