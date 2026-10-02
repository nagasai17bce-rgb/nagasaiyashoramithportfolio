"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Menu, Play, X } from "lucide-react";

const GITHUB = "https://github.com/nagasai17bce-rgb";
const LINKEDIN = "https://linkedin.com/in/yasho-ramith-a662622ab";
const EMAIL = "mailto:yashoramith@gmail.com";
const PORTRAIT = "https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png";

const work = [
  { n:"01", company:"Salesforce", period:"2024 — Present", role:"Member of Technical Staff", type:"AI · Agents · Inference", text:"Building production AI systems around agents, tool calling, MCP, retrieval, evaluation and enterprise workflows." },
  { n:"02", company:"Walmart", period:"2022 — 2024", role:"Software Engineer", type:"AI · Data · Backend", text:"Distributed transaction and fraud analytics across Spark, Databricks, BigQuery and cloud data platforms." },
  { n:"03", company:"Tekion", period:"2021 — 2022", role:"Software Engineer", type:"Backend · Platforms", text:"Backend services, APIs, integrations and reliability-oriented systems for enterprise automotive software." },
];

const projects = [
  ["AI Lakehouse Analytics Agent","Data + AI","Natural-language analytics with SQL planning, governance and evaluation."],
  ["Enterprise MCP Gateway","Agents","Controlled tool access between agents and enterprise systems."],
  ["AgentOps Observability","Observability","Tracing, token/cost telemetry and evaluation signals for agents."],
  ["AI Incident Response Agent","Reliability","Incident classification, diagnosis, runbooks and approval-aware actions."],
  ["Enterprise Voice Agent Platform","Voice AI","Voice sessions with tools, memory and human handoff."],
  ["Multi-Model Inference Router","Inference","Latency and cost-aware routing across model providers."],
  ["Enterprise RAG Platform","RAG","Grounded retrieval with deterministic ranking and citations."],
  ["LLM Evaluation Platform","Evaluation","Repeatable evaluation and regression gates for production models."],
];

const services = [
  ["01","Agents","Planning · tools · memory","I design agent systems that can reason, retrieve context, call tools and safely complete work."],
  ["02","Inference","Routing · batching · caching","I work on the infrastructure underneath AI: latency, throughput, cost and reliability."],
  ["03","Data Systems","Spark · Databricks · BigQuery","I build data paths that make AI useful in production, from ingestion to governed retrieval."],
  ["04","Voice AI","STT · LLM · TTS","I’m exploring voice-native interfaces where conversation becomes the primary way software is used."],
];

const stack = ["Python","Java","FastAPI","Spring Boot","LLMs","RAG","MCP","Agents","Databricks","Spark","BigQuery","Azure","AWS","GCP","Kubernetes","Docker","OpenTelemetry","SQL"];

function Marquee() {
  return <div className="marquee"><div>{["AGENTS","INFERENCE","VOICE AI","DATA SYSTEMS","DISTRIBUTED SYSTEMS","MCP","RAG",""].map((x,i)=><span key={i}>{x}<i>✦</i></span>)}</div></div>;
}

export default function Portfolio() {
  const [menu,setMenu] = useState(false);
  const [progress,setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY/max)*100 : 0);
    };
    onScroll(); window.addEventListener("scroll",onScroll,{passive:true});
    return () => window.removeEventListener("scroll",onScroll);
  },[]);

  return <main className="site">
    <div className="progress" style={{width:progress+"%"}} />

    <header className="nav">
      <a href="#top" className="logo">NAGA SAI<span>®</span></a>
      <nav>{["Work","Systems","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()}>{x}</a>)}</nav>
      <div className="nav-right">
        <a className="nav-social" href={GITHUB} target="_blank" rel="noreferrer"><Github size={15}/></a>
        <a className="nav-talk" href={EMAIL}>LET'S TALK <ArrowUpRight size={14}/></a>
        <button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X size={18}/>:<Menu size={18}/>}</button>
      </div>
    </header>
    {menu && <div className="mobile-menu">{["Work","Systems","About","Contact"].map(x=><a key={x} onClick={()=>setMenu(false)} href={"#"+x.toLowerCase()}>{x}</a>)}<a href={EMAIL}>Let's talk ↗</a></div>}

    <section id="top" className="hero">
      <div className="hero-top"><span>AI ENGINEER · MTS @ SALESFORCE</span><span>INDIA · 2026</span></div>
      <div className="hero-title-wrap">
        <h1>NAGA<br/><em>SAI</em><b>.</b></h1>
        <div className="hero-side"><span>01 — 05</span><p>Building intelligent systems at the intersection of <strong>AI, infrastructure and human interfaces.</strong></p><a href="#work">SCROLL TO EXPLORE <ArrowDown size={14}/></a></div>
      </div>
      <div className="hero-image-wrap">
        <div className="hero-line left"/>
        <div className="hero-photo"><img src={PORTRAIT} alt="Naga Sai"/></div>
        <div className="hero-note"><span>AI / BACKEND / VOICE</span><strong>Systems that ship.</strong></div>
        <div className="hero-index">MTS<br/>@SFDC</div>
      </div>
      <div className="hero-bottom"><span>SELECTED WORK · 2021 — 2026</span><span>↓</span><span>AGENTS / INFERENCE / DATA</span></div>
    </section>

    <Marquee />

    <section id="work" className="section work-section">
      <div className="section-head"><div><small>01</small><h2>Selected<br/><i>Work.</i></h2></div><p>Three chapters of building software — from backend platforms to AI systems running against real production constraints.</p></div>
      <div className="work-list">{work.map(w=><article key={w.n} className="work-row"><div className="work-no">{w.n}</div><div className="work-main"><div className="work-meta"><span>{w.period}</span><span>{w.type}</span></div><h3>{w.company}</h3><h4>{w.role}</h4><p>{w.text}</p></div><ArrowUpRight className="row-arrow" size={26}/></article>)}</div>
    </section>

    <section id="systems" className="section systems-section">
      <div className="section-head"><div><small>02</small><h2>What I<br/><i>build.</i></h2></div><p>AI is not a feature layer. The interesting work is the system underneath it — context, tools, inference, data, safety and operations.</p></div>
      <div className="service-grid">{services.map(s=><article key={s[0]} className="service"><span>{s[0]}</span><div><h3>{s[1]}</h3><b>{s[2]}</b><p>{s[3]}</p></div><ArrowUpRight size={20}/></article>)}</div>
      <div className="architecture"><span>USER</span><i>→</i><span>AGENT</span><i>→</i><span>RAG + MEMORY</span><i>→</i><span>MCP TOOLS</span><i>→</i><span>ENTERPRISE</span></div>
    </section>

    <section className="statement"><div className="statement-label">03 — THE BELIEF</div><h2>Make it intelligent.<br/><em>Make it useful.</em><br/>Make it ship.</h2></section>

    <section className="projects section">
      <div className="section-head"><div><small>04</small><h2>AI<br/><i>Systems.</i></h2></div><p>A selection of systems and experiments spanning agents, RAG, inference, security, observability and voice.</p></div>
      <div className="project-list">{projects.map((p,i)=><a href={GITHUB+"/"+p[0].toLowerCase().replaceAll(" ","-")} target="_blank" rel="noreferrer" key={p[0]} className="project-row"><span>{String(i+1).padStart(2,"0")}</span><div><small>{p[1]}</small><h3>{p[0]}</h3><p>{p[2]}</p></div><ArrowUpRight size={22}/></a>)}</div>
      <a className="all-work" href={GITHUB} target="_blank" rel="noreferrer">VIEW ALL ON GITHUB <ArrowUpRight size={15}/></a>
    </section>

    <section className="video-section">
      <div className="video-top"><span>05 — VIDEO RESUME</span><span>01:35</span></div>
      <div className="video-frame">
        <video controls playsInline preload="metadata" poster={PORTRAIT}>
          <source src="/video-resume.mp4" type="video/mp4"/>
        </video>
        <div className="video-overlay"><Play size={18} fill="currentColor"/><span>WATCH THE JOURNEY</span></div>
      </div>
      <div className="video-caption"><h2>The person<br/><i>behind the systems.</i></h2><p>Salesforce → Walmart → Tekion. AI engineering, backend systems, data platforms and the next chapter: voice-native interfaces.</p></div>
    </section>

    <section id="about" className="section about">
      <div className="section-head"><div><small>06</small><h2>A little<br/><i>about me.</i></h2></div><p>I’m an MTS at Salesforce with a software engineering background across backend, data and AI. I like difficult problems where the final answer has to survive production.</p></div>
      <div className="about-grid"><div className="big-stat"><strong>5+</strong><span>YEARS BUILDING</span></div><div className="big-stat"><strong>20</strong><span>AI SYSTEMS</span></div><div className="big-stat"><strong>3</strong><span>COMPANIES</span></div><div className="about-copy"><p>B.E. Computer Science & Information Technology</p><b>BITS Goa · 2017 — 2021</b><div className="stack">{stack.map(x=><span key={x}>{x}</span>)}</div></div></div>
    </section>

    <section className="voice-cta"><span>THE NEXT INTERFACE</span><h2>is a<br/><i>conversation.</i></h2><p>Exploring voice AI where speech, reasoning, tools, memory and action become one interface.</p><div className="voice-orbit"><span>STT</span><span>LLM</span><span>MCP</span><span>TTS</span></div></section>

    <section id="contact" className="contact"><div className="contact-top"><span>07 — CONTACT</span><span>OPEN TO INTERESTING PROBLEMS</span></div><h2>Have a problem<br/>worth <i>building?</i></h2><a className="contact-mail" href={EMAIL}>yashoramith@gmail.com <ArrowUpRight/></a><div className="contact-links"><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a></div></section>

    <footer><span>NAGA SAI®</span><span>AI · AGENTS · INFERENCE · VOICE</span><a href="#top">BACK TO TOP ↑</a></footer>
  </main>;
}
