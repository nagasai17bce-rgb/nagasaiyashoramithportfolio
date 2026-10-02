"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";

const GITHUB="https://github.com/nagasai17bce-rgb";
const LINKEDIN="https://linkedin.com/in/yasho-ramith-a662622ab";
const EMAIL="mailto:yashoramith@gmail.com";
const PORTRAIT="https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png";

const work=[
 {year:"2024—NOW",company:"Salesforce",role:"Member of Technical Staff",tags:"AI · AGENTS · INFERENCE",copy:"Building production AI systems around agents, tool calling, MCP, retrieval, evaluation and enterprise workflows."},
 {year:"2022—2024",company:"Walmart",role:"Software Engineer",tags:"AI · DATA · BACKEND",copy:"Worked across distributed data and AI systems using Spark, Databricks, BigQuery and cloud platforms."},
 {year:"2021—2022",company:"Tekion",role:"Software Engineer",tags:"BACKEND · PLATFORMS",copy:"Built backend services, APIs and integrations for enterprise automotive software and platform workflows."}
];
const services=[
 ["01","Agents","Planning · Tools · Memory","Agent systems that reason, retrieve context, call tools and safely complete work."],
 ["02","Inference","Routing · Batching · Caching","Infrastructure underneath AI: latency, throughput, cost and reliability."],
 ["03","Data Systems","Spark · Databricks · BigQuery","Production data paths from ingestion to governed retrieval and analytics."],
 ["04","Voice AI","STT · LLM · TTS","Voice-native interfaces where conversation becomes the primary way software is used."]
];
const projects=[
 ["01","AI Lakehouse Analytics Agent","DATA + AI","Natural-language analytics with SQL planning, governance and evaluation."],
 ["02","Enterprise MCP Gateway","AGENTS","Controlled tool access between agents and enterprise systems."],
 ["03","AgentOps Observability","OBSERVABILITY","Tracing, token/cost telemetry and evaluation signals for production agents."],
 ["04","AI Incident Response Agent","RELIABILITY","Incident diagnosis, runbooks and approval-aware actions."],
 ["05","Enterprise Voice Agent","VOICE AI","Voice sessions with tools, memory and human handoff."],
 ["06","Multi-Model Inference Router","INFERENCE","Latency and cost-aware routing across model providers."]
];
const stack=["Python","Java","FastAPI","Spring Boot","LLMs","RAG","MCP","Agents","Databricks","Spark","BigQuery","Azure","AWS","GCP","Kubernetes","Docker","OpenTelemetry","SQL"];

function Marquee(){const items=["AI SYSTEMS","AGENTS","INFERENCE","VOICE AI","DATA","MCP","RAG"];return <div className="marquee"><div>{[...items,...items].map((x,i)=><span key={i}>{x}<b>✦</b></span>)}</div></div>}

export default function Portfolio(){
 const[menu,setMenu]=useState(false); const[active,setActive]=useState(0);
 useEffect(()=>{const ids=["top","work","services","systems","about","contact"];const onScroll=()=>{let c=0;ids.forEach((id,i)=>{const e=document.getElementById(id);if(e&&scrollY>=e.offsetTop-180)c=i});setActive(c)};addEventListener("scroll",onScroll,{passive:true});onScroll();return()=>removeEventListener("scroll",onScroll)},[]);
 return <main className="site">
  <header className="nav"><a className="brand" href="#top">NAGA SAI<span>®</span></a><nav>{["Home","Work","Services","About","Contact"].map((x,i)=><a className={active===i?"active":""} key={x} href={"#"+x.toLowerCase()}>{x}</a>)}</nav><div className="nav-actions"><a className="social-mini" href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={15}/></a><a className="talk" href={EMAIL}>LET'S TALK <ArrowUpRight size={14}/></a><button className="menu" onClick={()=>setMenu(!menu)} aria-label="Menu">{menu?<X size={18}/>:<Menu size={18}/>}</button></div></header>
  {menu&&<div className="mobile-menu">{["Home","Work","Services","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}</div>}
  <section id="top" className="hero">
   <div className="eyebrow"><span>01 — 26</span><span>AI ENGINEER · MTS @ SALESFORCE</span><span>INDIA ↗ GLOBAL</span></div>
   <div className="hero-grid"><div className="hero-copy"><div className="kicker">AI / BACKEND / VOICE</div><h1>Building<br/><i>intelligent</i><br/>futures.</h1><p>I build AI-powered products and scalable backend systems across <b>agents, inference, data and voice.</b></p><div className="hero-buttons"><a className="btn-primary" href="#work">EXPLORE MY WORK <ArrowDown size={15}/></a><a className="btn-ghost" href={GITHUB} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={15}/></a></div><div className="hero-meta"><span>5+ YEARS</span><span>3 COMPANIES</span><span>BITS GOA</span></div></div>
   <div className="hero-visual"><div className="orbit orbit-a"/><div className="orbit orbit-b"/><div className="portrait"><img src={PORTRAIT} alt="Naga Sai"/></div><div className="sticker salesforce">salesforce<br/><small>MTS · 2024—NOW</small></div><div className="sticker walmart">✦ Walmart<br/><small>AI · 2022—2024</small></div><div className="sticker tekion">TEKION<br/><small>SWE · 2021—2022</small></div><div className="sticker bits">BITS GOA<br/><small>B.E. CSE · 2017—2021</small></div><div className="hero-note">Make AI useful<br/><i>for real people.</i></div></div></div>
   <div className="hero-foot"><span>SCROLL TO EXPLORE</span><span>↓</span><span>AGENTS · INFERENCE · DATA · VOICE</span></div>
  </section>
  <Marquee/>
  <section id="work" className="section work"><div className="section-intro"><div><label>02 — WORK</label><h2>Selected<br/><i>work.</i></h2></div><p>Three chapters of shipping software — from backend platforms to AI systems designed around real production constraints.</p></div><div className="work-list">{work.map((w,i)=><article className="work-card" key={w.company}><span className="index">0{i+1}</span><div className="work-year">{w.year}</div><div className="work-body"><h3>{w.company}</h3><h4>{w.role}</h4><p>{w.copy}</p><small>{w.tags}</small></div><ArrowUpRight className="work-arrow" size={25}/></article>)}</div></section>
  <section id="services" className="section dark"><div className="section-intro"><div><label>03 — SOLUTIONS</label><h2>What I<br/><i>build.</i></h2></div><p>AI is not just a model. The interesting work is the system underneath it — context, tools, inference, data, safety and operations.</p></div><div className="service-list">{services.map(s=><article className="service-card" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><b>{s[2]}</b><p>{s[3]}</p></div><ArrowUpRight size={20}/></article>)}</div><div className="system-strip"><span>USER</span><b>→</b><span>AGENT</span><b>→</b><span>RAG + MEMORY</span><b>→</b><span>MCP TOOLS</span><b>→</b><span>ENTERPRISE</span></div></section>
  <section className="manifesto"><label>04 — THE APPROACH</label><h2>Research.<br/>Build.<br/><i>Ship.</i></h2><p>I like hard technical problems where the final answer has to work outside the demo: measurable, observable, maintainable and useful.</p></section>
  <section id="systems" className="section systems"><div className="section-intro"><div><label>05 — AI SYSTEMS</label><h2>Things I<br/><i>experiment with.</i></h2></div><p>Selected architecture ideas and production-style experiments spanning agents, RAG, inference, observability, reliability and voice.</p></div><div className="project-grid">{projects.map(p=><a className="project-card" href={GITHUB} target="_blank" rel="noreferrer" key={p[0]}><span>{p[0]}</span><div><small>{p[2]}</small><h3>{p[1]}</h3><p>{p[3]}</p></div><ArrowUpRight size={19}/></a>)}</div><div className="career-panel"><div className="career-copy"><label>06 — CAREER JOURNEY</label><h3>From backend<br/><i>to AI systems.</i></h3><p>Salesforce → Walmart → Tekion. A growing focus on agentic systems, inference engineering and voice-native interfaces.</p></div><div className="career-image"><img src={PORTRAIT} alt="Naga Sai"/></div></div></section>
  <section id="about" className="section about"><div className="section-intro"><div><label>07 — ABOUT</label><h2>A little<br/><i>about me.</i></h2></div><p>Member of Technical Staff at Salesforce. Software engineering background across backend, data and AI. B.E. Computer Science & Information Technology, BITS Goa.</p></div><div className="stats"><div><strong>5+</strong><span>YEARS BUILDING</span></div><div><strong>3</strong><span>COMPANIES</span></div><div><strong>∞</strong><span>PROBLEMS TO SOLVE</span></div><div className="stack"><p>Core stack</p>{stack.map(x=><span key={x}>{x}</span>)}</div></div></section>
  <section className="voice"><label>08 — NEXT INTERFACE</label><h2>Software<br/>you can<br/><i>talk to.</i></h2><p>Exploring voice AI where speech, reasoning, tools, memory and action become one interface.</p><div className="voice-line"><span>STT</span><b>→</b><span>LLM</span><b>→</b><span>MCP</span><b>→</b><span>TTS</span></div></section>
  <section id="contact" className="contact"><div className="contact-head"><label>09 — CONTACT</label><span>OPEN TO INTERESTING PROBLEMS</span></div><h2>Have a problem<br/>worth <i>building?</i></h2><a className="email" href={EMAIL}>yashoramith@gmail.com <ArrowUpRight/></a><div className="contact-links"><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a><a href={EMAIL}><Mail size={16}/> Email</a></div></section>
  <footer><span>NAGA SAI®</span><span>AI · AGENTS · INFERENCE · VOICE</span><span>© 2026</span></footer>
 </main>;
}