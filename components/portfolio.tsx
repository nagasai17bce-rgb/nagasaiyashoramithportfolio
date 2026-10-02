"use client";

import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowUpRight, BrainCircuit, CheckCircle2, ChevronRight,
  Code2, Database, Download, ExternalLink, Github, Globe2, Layers3,
  Linkedin, Mail, Menu, Network, ServerCog, Sparkles, X
} from "lucide-react";

const GITHUB = "https://github.com/nagasai17bce-rgb";
const LINKEDIN = "https://linkedin.com/in/yasho-ramith-a662622ab";
const EMAIL = "mailto:yashoramith@gmail.com";

const projects = [
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

const experience = [
  { period:"Aug 2024 — Present", company:"Salesforce", role:"Member of Technical Staff (MTS)", location:"Bangalore, India",
    points:["Building AI/backend systems around agents, tool calling, MCP, retrieval, evaluation and production workflows.","Working across Python/Java services, distributed processing, cloud infrastructure and observability.","Designing production patterns for latency, reliability, governance, human approval and controlled enterprise actions."] },
  { period:"Jul 2022 — Aug 2024", company:"Walmart", role:"Software Engineer — AI/Data/Backend", location:"India",
    points:["Engineered distributed transaction and fraud analytics workloads using Spark, Databricks, BigQuery and SQL optimization.","Designed telemetry retention and cloud-cost optimization for large Log Analytics datasets, exporting historical data to Blob Storage in batches.","Migrated fraud reporting from legacy ECOMM sources to T360 datasets and validated Tableau reporting flows."] },
  { period:"Jun 2021 — Jul 2022", company:"Tekion", role:"Software Engineer", location:"India",
    points:["Built backend services and production APIs for enterprise automotive software.","Worked across distributed services, integrations, data processing and reliability-oriented engineering."] }
];

const skills = [
  ["AI / LLM","LLMs · RAG · Agents · Claude · Prompt Engineering · Context Engineering · Structured Outputs"],
  ["Agent Systems","MCP · Tool Calling · Planning · Memory · Guardrails · Human-in-the-Loop"],
  ["Inference","Model Routing · Batching · Caching · Token Optimization · LLM Evaluation"],
  ["Backend","Python · Java · FastAPI · Spring Boot · REST · GraphQL · Microservices · Kafka"],
  ["Data","Spark · Databricks · BigQuery · SQL · ETL · Data Migration · Data Quality"],
  ["Cloud","AWS · Azure · GCP · Docker · Kubernetes · GitHub Actions · ArgoCD"],
  ["Storage","Azure Blob · Log Analytics · Cosmos DB · Redis · PostgreSQL · MongoDB"],
  ["Observability","KQL · OpenTelemetry · CloudWatch · Distributed Tracing"]
];

const frontend = ["Next.js 16","React 19","TypeScript","Tailwind CSS 4","App Router","Server Components","Lucide","Responsive UI"];

function Title({eyebrow,title,copy}:{eyebrow:string;title:string;copy:string}) {
  return <div className="mb-10 max-w-3xl"><p className="mb-3 text-xs font-semibold uppercase tracking-[.28em] text-blue-300">{eyebrow}</p><h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2><p className="mt-4 text-base leading-7 text-zinc-400">{copy}</p></div>;
}

export default function Portfolio() {
  const [open,setOpen]=useState(false); const [progress,setProgress]=useState(0);
  useEffect(()=>{const f=()=>{const m=document.documentElement.scrollHeight-innerHeight;setProgress(m>0?(scrollY/m)*100:0)};addEventListener("scroll",f,{passive:true});f();return()=>removeEventListener("scroll",f)},[]);
  const nav=["Experience","Projects","AI Systems","Stack","Contact"];
  return <main className="noise min-h-screen bg-[#06070a] text-zinc-100">
    <div className="fixed left-0 top-0 z-[70] h-[2px] bg-blue-400" style={{width:progress+"%"}}/>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-black/45 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="font-semibold tracking-[.2em]">NAGA SAI</a>
        <nav className="hidden gap-7 text-sm text-zinc-400 md:flex">{nav.map(x=><a key={x} href={"#"+x.toLowerCase().replace(" ","-")} className="hover:text-white">{x}</a>)}</nav>
        <div className="flex items-center gap-2"><a href={GITHUB} target="_blank" className="hidden rounded-full border border-white/10 p-2.5 sm:block"><Github size={17}/></a><a href={EMAIL} className="hidden rounded-full bg-white px-4 py-2 text-sm font-semibold text-black sm:block">Contact</a><button onClick={()=>setOpen(!open)} className="rounded-full border border-white/10 p-2 md:hidden" aria-label="Menu">{open?<X size={18}/>:<Menu size={18}/>}</button></div>
      </div>
      {open&&<nav className="border-t border-white/5 bg-black/90 p-5 md:hidden">{nav.map(x=><a onClick={()=>setOpen(false)} key={x} href={"#"+x.toLowerCase().replace(" ","-")} className="block py-3 text-zinc-300">{x}</a>)}</nav>}
    </header>

    <section id="home" className="grid-bg relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_25%,rgba(74,111,255,.16),transparent_30%),radial-gradient(circle_at_15%_70%,rgba(155,85,255,.10),transparent_28%)]"/>
      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[.3em] text-blue-300">AI Engineer · MTS @ Salesforce</p>
          <h1 className="mt-5 text-6xl font-semibold tracking-[-.05em] sm:text-8xl">Naga Sai<span className="text-blue-400">.</span></h1>
          <p className="mt-5 text-xl text-zinc-200">Agents · Inference · Data · Distributed Systems</p>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">I build intelligent systems and scalable backend platforms where AI meets real production constraints.</p>
          <div className="mt-8 flex flex-wrap gap-3"><a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black">Explore work <ArrowDown size={16}/></a><a href="/resume" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold"><Download size={16}/> Resume</a></div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">{[["5+","Years"],["20","AI repos"],["Voice","AI focus"]].map(([a,b])=><div key={b} className="rounded-2xl border border-white/10 bg-white/[.025] p-4"><b className="text-lg">{a}</b><p className="mt-1 text-xs text-zinc-500">{b}</p></div>)}</div>
        </div>
        <div className="relative h-[580px] lg:h-[680px]">
          <div className="absolute inset-0 rounded-[36px] border border-white/10 bg-black/20 p-2 shadow-2xl shadow-blue-500/10">
            <div className="relative h-full overflow-hidden rounded-[30px] bg-gradient-to-br from-zinc-900 via-black to-blue-950">
              <div className="absolute inset-0 grid place-items-center text-center"><div><div className="mx-auto mb-5 grid h-40 w-40 place-items-center rounded-full border border-blue-300/30 bg-blue-400/10 shadow-[0_0_100px_rgba(80,120,255,.18)]"><BrainCircuit size={58} className="text-blue-300"/></div><p className="text-xs uppercase tracking-[.3em] text-blue-300">AI SYSTEMS</p><p className="mt-2 text-2xl font-semibold">Agents · Inference · Voice</p><p className="mt-2 text-sm text-zinc-500">Your uploaded portrait can be placed here as the hero asset.</p></div></div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between"><span className="text-xs uppercase tracking-[.25em] text-blue-300">Building in public</span><span className="text-xs text-zinc-500">20+ systems</span></div>
            </div>
          </div>
          <div className="float absolute -right-2 top-12 hidden rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-xl sm:block"><div className="flex items-center gap-3"><Sparkles className="text-blue-300" size={20}/><div><p className="text-xs text-zinc-500">Current focus</p><p className="text-sm font-medium">Agent Platforms</p></div></div></div>
        </div>
      </div>
    </section>

    <section className="border-y border-white/6 bg-white/[.015] py-8"><div className="mx-auto flex max-w-7xl flex-wrap gap-x-12 gap-y-5 px-5 text-sm text-zinc-400 lg:px-8"><span className="text-zinc-600">EXPERIENCE</span><b className="text-white">Salesforce</b><span>Walmart</span><span>Tekion</span><span>AI Platforms</span><span>Distributed Systems</span></div></section>

    <section id="experience" className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><Title eyebrow="01 / Experience" title="From backend systems to AI platforms." copy="Production engineering across AI, distributed systems, data platforms and cloud infrastructure."/><div className="space-y-5">{experience.map((j,i)=><article key={j.period} className="card grid gap-8 rounded-3xl p-6 md:grid-cols-[190px_1fr] md:p-8"><div><p className="text-sm font-medium text-blue-300">{j.period}</p><p className="mt-2 text-sm text-zinc-500">{j.location}</p></div><div><div className="flex justify-between gap-4"><div><h3 className="text-2xl font-semibold">{j.company}</h3><p className="mt-1 text-zinc-400">{j.role}</p></div><span className="text-xs text-zinc-600">0{i+1}</span></div><ul className="mt-6 grid gap-3 md:grid-cols-2">{j.points.map(p=><li key={p} className="flex gap-3 text-sm leading-6 text-zinc-400"><CheckCircle2 size={15} className="mt-1 shrink-0 text-blue-400"/>{p}</li>)}</ul></div></article>)}</div></section>

    <section id="ai-systems" className="border-y border-white/6 bg-[#080a0f] py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Title eyebrow="02 / AI Systems" title="A production AI stack, not a demo." copy="Planning, retrieval, memory, tools, inference, evaluation and operations are treated as one system."/><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[["Agents","Planning · Tool Use",BrainCircuit],["RAG","Search · Context",Database],["Inference","Routing · Batching",ServerCog],["MCP","Tools · Security",Network],["Memory","Context · Recall",Layers3],["Evaluation","Regression · Traces",CheckCircle2],["Voice AI","STT · LLM · TTS",Globe2],["Production","K8s · CI/CD",Code2]].map(([n,d,I])=><div key={String(n)} className="card rounded-3xl p-6"><I size={23} className="text-blue-300"/><h3 className="mt-6 text-lg font-semibold">{String(n)}</h3><p className="mt-2 text-sm text-zinc-500">{String(d)}</p></div>)}</div><div className="card mt-5 rounded-3xl p-7"><div className="flex flex-wrap items-center justify-center gap-3 text-sm">{["User","Agent","RAG + Memory","MCP Tools","Enterprise API"].map((x,i)=><span key={x} className="flex items-center gap-3"><span className="rounded-2xl border border-white/10 bg-white/[.025] px-4 py-3">{x}</span>{i<4&&<ChevronRight className="text-zinc-700"/>}</span>)}</div></div></div></section>

    <section id="projects" className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><div className="flex items-end justify-between gap-5"><Title eyebrow="03 / Projects" title="20 AI engineering systems." copy="Agents, inference, RAG, security, observability, voice and data infrastructure."/><a href={GITHUB} target="_blank" className="mb-10 hidden items-center gap-2 text-sm text-zinc-400 md:flex">GitHub <ArrowUpRight size={15}/></a></div><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{projects.map(([slug,title,cat,desc],i)=><a key={slug} href={GITHUB+"/"+slug} target="_blank" className="card group rounded-3xl p-6"><div className="flex justify-between"><span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] uppercase tracking-[.18em] text-blue-300">{cat}</span><span className="text-xs text-zinc-700">{String(i+1).padStart(2,"0")}</span></div><h3 className="mt-7 text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-6 text-zinc-500">{desc}</p><div className="mt-6 flex justify-between text-xs text-zinc-600 group-hover:text-zinc-300"><span>Open repository</span><ExternalLink size={14}/></div></a>)}</div></section>

    <section id="stack" className="border-y border-white/6 bg-white/[.015] py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><Title eyebrow="04 / Stack" title="Modern frontend. Serious backend." copy="The portfolio uses a current Next.js stack while the engineering work spans AI, cloud, data and distributed systems."/><div className="card rounded-3xl p-7"><div className="mb-5 flex items-center gap-3"><Sparkles size={18} className="text-blue-300"/><b>Frontend</b></div><div className="flex flex-wrap gap-2">{frontend.map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300">{x}</span>)}</div></div><div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{skills.map(([n,v])=><div key={n} className="card rounded-3xl p-6"><p className="text-xs font-semibold uppercase tracking-[.2em] text-blue-300">{n}</p><p className="mt-4 text-sm leading-7 text-zinc-400">{v}</p></div>)}</div></div></section>

    <section id="education" className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><Title eyebrow="05 / Education" title="Computer Science foundation." copy="BITS Goa · Computer Science · 2017–2021"/><div className="card flex flex-col justify-between gap-4 rounded-3xl p-7 md:flex-row"><div><h3 className="text-xl font-semibold">Birla Institute of Technology and Science, Pilani — Goa Campus</h3><p className="mt-2 text-zinc-400">B.E. Computer Science & Information Technology</p></div><span className="text-sm text-zinc-500">2017 — 2021</span></div></section>

    <section className="border-y border-white/6 py-28"><div className="mx-auto max-w-5xl px-5 text-center"><p className="text-xs uppercase tracking-[.3em] text-blue-300">The next interface</p><h2 className="mt-5 text-5xl font-semibold sm:text-7xl">is a conversation.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">Voice-native agents connecting speech, reasoning, enterprise tools, memory and action.</p><div className="mt-10 flex flex-wrap justify-center gap-2 text-sm text-zinc-400">{["Voice","STT","LLM","MCP","Memory","Tools","Action","TTS"].map(x=><span key={x} className="rounded-full border border-white/10 px-4 py-2">{x}</span>)}</div></div></section>

    <section id="contact" className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><div className="glow card rounded-[32px] p-8 md:p-12"><p className="text-xs uppercase tracking-[.28em] text-blue-300">06 / Contact</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-6xl">Have a difficult AI problem?</h2><p className="mt-5 max-w-xl text-lg leading-8 text-zinc-400">Let’s talk about agents, inference infrastructure, data platforms, voice AI or backend systems that need to work in production.</p><div className="mt-8 flex flex-wrap gap-3"><a href={GITHUB} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm"><Github size={16}/> GitHub</a><a href={LINKEDIN} target="_blank" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm"><Linkedin size={16}/> LinkedIn</a><a href={EMAIL} className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black"><Mail size={16}/> Email</a></div></div></section>

    <footer className="border-t border-white/6 py-8"><div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 text-xs text-zinc-600 sm:flex-row sm:justify-between lg:px-8"><span>© {new Date().getFullYear()} Naga Sai</span><span>AI · Agents · Inference · Data · Distributed Systems</span><a href="#home" className="flex gap-1 hover:text-white">Top <ArrowUpRight size={13}/></a></div></footer>
  </main>;
}