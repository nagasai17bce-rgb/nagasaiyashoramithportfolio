"use client";

import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const portrait="https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png";
const github="https://github.com/nagasai17bce-rgb";
const linkedin="https://linkedin.com/in/yasho-ramith-a662622ab";
const email="mailto:yashoramith@gmail.com";

const work=[
 ["01","Salesforce","MTS · AI / AGENTS / INFERENCE","2024 — NOW","Building enterprise AI systems around agents, tool calling, MCP, retrieval and inference."],
 ["02","Walmart","SOFTWARE ENGINEER · AI / DATA","2022 — 2024","Building backend and data systems across Databricks, Spark, BigQuery and cloud platforms."],
 ["03","Tekion","SOFTWARE ENGINEER · BACKEND","2021 — 2022","Backend services, APIs and platform workflows for enterprise automotive software."]
];

const solutions=[
 ["01","AI Agents","PLANNING · TOOLS · MEMORY","Agentic systems that can understand context, use tools and complete real work."],
 ["02","Inference Engineering","ROUTING · LATENCY · COST","The infrastructure layer behind reliable, observable and efficient AI applications."],
 ["03","Data + AI","SPARK · DATABRICKS · BIGQUERY","Production data systems connecting ingestion, analytics, retrieval and AI."],
 ["04","Voice AI","STT · LLM · TTS","Voice-native products where conversation becomes the interface to software."]
];

const process=[
 ["01","Discover","Start with the problem, constraints and users. Define what actually needs to be built."],
 ["02","Architect","Choose the right model, data path, tools, APIs and infrastructure before writing the happy-path demo."],
 ["03","Build","Turn the architecture into a working product with APIs, observability, evaluation and failure handling."],
 ["04","Ship","Measure it in production, remove bottlenecks and keep improving the system."]
];

const systems=[
 ["AI Lakehouse Agent","DATA + AI","Natural-language analytics with SQL planning, governed retrieval and evaluation."],
 ["Enterprise MCP Gateway","AGENTS","A controlled tool layer between agents and enterprise systems."],
 ["AgentOps","OBSERVABILITY","Tracing, cost, latency and evaluation signals for production agents."],
 ["AI Incident Response","RELIABILITY","Incident diagnosis, runbooks and approval-aware actions."],
 ["Voice Agent Platform","VOICE AI","Voice sessions combining speech, reasoning, tools and handoff."],
 ["Multi-Model Router","INFERENCE","Latency and cost-aware routing across model providers."]
];

const stack=["Python","Java","FastAPI","Spring Boot","LLMs","RAG","MCP","Agents","Databricks","Spark","BigQuery","Azure","AWS","GCP","Kubernetes","Docker","OpenTelemetry"];

export default function Portfolio(){
 const [open,setOpen]=useState(false);
 return <main>
  <header className="topbar">
   <a href="#home" className="logo">NAGA SAI <sup>®</sup></a>
   <nav className={open?"open":""}>{["Home","Work","Solutions","Process","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setOpen(false)}>{x}</a>)}</nav>
   <div className="top-actions"><a className="circle" href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={15}/></a><a className="talk" href={email}>LET'S TALK <ArrowUpRight size={14}/></a><button className="circle burger" onClick={()=>setOpen(!open)}>{open?<X size={17}/>:<Menu size={17}/>}</button></div>
  </header>

  <section id="home" className="hero">
   <div className="hero-top"><span>[ NAGA SAI · 2026 ]</span><span>MTS @ SALESFORCE · AI ENGINEER</span><span>INDIA ↗ GLOBAL</span></div>
   <div className="hero-main">
    <div className="hero-left">
      <p className="eyebrow">AI · BACKEND · VOICE</p>
      <h1>Building<br/><i>intelligent</i><br/>futures.</h1>
      <p className="lead">I build AI products and backend systems that move from <strong>prototype to production</strong> — across agents, inference, data and voice.</p>
      <div className="buttons"><a className="black-btn" href="#work">SEE MY WORK <ArrowDown size={15}/></a><a className="outline-btn" href={github} target="_blank" rel="noreferrer">GITHUB <ArrowUpRight size={15}/></a></div>
    </div>
    <div className="hero-right">
      <div className="portrait-wrap"><img src={portrait} alt="Naga Sai"/></div>
      <div className="scribble">AI<br/>Systems<br/><i>that ship.</i></div>
      <div className="hero-tag tag-one">SALESFORCE<br/><small>MTS · 2024—NOW</small></div>
      <div className="hero-tag tag-two">WALMART ✦<br/><small>AI · 2022—2024</small></div>
      <div className="hero-tag tag-three">TEKION<br/><small>SWE · 2021—2022</small></div>
    </div>
   </div>
   <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span>↓</span><span>AGENTS · INFERENCE · DATA · VOICE</span></div>
  </section>

  <section className="ticker"><div>{["AI SYSTEMS","AGENTS","INFERENCE","VOICE AI","DATA","MCP","RAG","AI SYSTEMS","AGENTS","INFERENCE","VOICE AI","DATA","MCP","RAG"].map((x,i)=><span key={i}>{x} <b>✦</b></span>)}</div></section>

  <section id="work" className="work section">
   <div className="section-head"><div><span className="label">[ 01 — SELECTED WORK ]</span><h2>Work<br/><i>that ships.</i></h2></div><p>Three chapters of software engineering, from scalable backend platforms to production AI systems.</p></div>
   <div className="work-list">{work.map(w=><article className="work-row" key={w[0]}><span className="num">{w[0]}</span><span className="date">{w[3]}</span><div><h3>{w[1]}</h3><b>{w[2]}</b><p>{w[4]}</p></div><ArrowUpRight size={23}/></article>)}</div>
  </section>

  <section id="solutions" className="solutions section">
   <div className="section-head"><div><span className="label">[ 02 — WHAT I BUILD ]</span><h2>AI<br/><i>systems.</i></h2></div><p>The useful part of AI is everything around the model: context, tools, data, inference, observability and the product itself.</p></div>
   <div className="solution-list">{solutions.map(s=><article key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><b>{s[2]}</b><p>{s[3]}</p></div><ArrowUpRight size={20}/></article>)}</div>
  </section>

  <section id="process" className="process section">
   <div className="process-title"><span className="label">[ 03 — PROCESS ]</span><h2>From idea<br/>to <i>production.</i></h2></div>
   <div className="process-grid">{process.map(p=><article key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p><small>SHIP IT →</small></article>)}</div>
  </section>

  <section className="black-break"><span>[ 04 — AI SYSTEMS ]</span><h2>Less demo.<br/><i>More product.</i></h2><p>Selected experiments across agents, RAG, inference, reliability, observability and voice AI.</p></section>

  <section className="systems section">
   <div className="system-grid">{systems.map((s,i)=><a href={github} target="_blank" rel="noreferrer" key={s[0]}><span>0{i+1}</span><small>{s[1]}</small><h3>{s[0]}</h3><p>{s[2]}</p><ArrowUpRight size={18}/></a>)}</div>
  </section>

  <section id="about" className="about section">
   <div className="section-head"><div><span className="label">[ 05 — ABOUT ]</span><h2>Built by<br/><i>curiosity.</i></h2></div><p>Member of Technical Staff at Salesforce with 5+ years across AI, backend, data and cloud engineering. B.E. Computer Science & Information Technology, BITS Goa.</p></div>
   <div className="about-grid"><div className="about-photo"><img src={portrait} alt="Naga Sai"/></div><div className="about-copy"><p className="big-copy">I enjoy problems where the architecture matters as much as the model.</p><p>My work sits at the intersection of distributed systems and applied AI: making agents useful, inference fast, data trustworthy and interfaces more natural.</p><div className="stack">{stack.map(x=><span key={x}>{x}</span>)}</div></div></div>
  </section>

  <section className="cta"><span className="label">[ 06 — THE NEXT INTERFACE ]</span><h2>Let's build<br/><i>something useful.</i></h2><a href={email}>START A CONVERSATION <ArrowUpRight size={16}/></a></section>

  <section id="contact" className="contact"><div className="contact-top"><span className="label">[ 07 — CONTACT ]</span><span>OPEN TO INTERESTING PROBLEMS</span></div><h2>Have a problem<br/>worth <i>shipping?</i></h2><a className="mail" href={email}>yashoramith@gmail.com <ArrowUpRight/></a><div className="socials"><a href={github} target="_blank" rel="noreferrer"><Github size={16}/> GITHUB</a><a href={linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LINKEDIN</a><a href={email}><Mail size={16}/> EMAIL</a></div></section>
  <footer><span>NAGA SAI ®</span><span>AI · AGENTS · INFERENCE · VOICE</span><span>© 2026</span></footer>
 </main>
}