"use client";

import { ArrowUpRight, Github, Linkedin, Mail, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const PORTRAIT="https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png";
const GITHUB="https://github.com/nagasai17bce-rgb";
const LINKEDIN="https://linkedin.com/in/yasho-ramith-a662622ab";
const EMAIL="mailto:yashoramith@gmail.com";

const projects=[
 ["01","Salesforce AI Systems","AGENTS · MCP · INFERENCE","Production AI systems, tool calling, retrieval and enterprise workflows."],
 ["02","Fraud Dashboard Migration","BIGQUERY · T360 · TABLEAU","Migrating analytics from legacy ECOMM sources to T360 data products."],
 ["03","Cloud Cost Optimization","AZURE · LOG ANALYTICS · DATABRICKS","Batch export, storage and lifecycle workflows for large-scale telemetry."],
 ["04","Enterprise Voice AI","VOICE · LLM · TOOLS","A voice-first assistant architecture connecting speech, reasoning and actions."],
];

const services=[
 ["01","Agentic AI","Design and build agents that reason over context, use tools and complete workflows."],
 ["02","Inference","Model routing, latency, caching, observability and production serving."],
 ["03","Data Engineering","Spark, Databricks, BigQuery and governed data paths for AI."],
 ["04","Voice AI","Speech-to-text, LLM orchestration, tools, memory and text-to-speech."]
];

const process=[
 ["01","Discover","Problem, users, constraints."],
 ["02","Architect","Data, models, tools, APIs."],
 ["03","Build","Product + infrastructure."],
 ["04","Ship","Measure, optimize, repeat."]
];

function Trail(){useEffect(()=>{const move=(e:MouseEvent)=>{document.documentElement.style.setProperty("--mx",((e.clientX/innerWidth)-.5).toFixed(3));document.documentElement.style.setProperty("--my",((e.clientY/innerHeight)-.5).toFixed(3))};addEventListener("pointermove",move,{passive:true});return()=>removeEventListener("pointermove",move)},[]);return null}

export default function Portfolio(){
 const[menu,setMenu]=useState(false);
 return <main className="renaissance"><Trail/>
  <header className="header"><a href="#home" className="wordmark">NAGA SAI <sup>®</sup></a><nav className={menu?"mobile-open":""}>{["Work","Solutions","Process","About","Contact"].map(x=><a key={x} href={"#"+x.toLowerCase()} onClick={()=>setMenu(false)}>{x}</a>)}</nav><div className="header-right"><a href={EMAIL} className="pill">LET'S TALK <ArrowUpRight size={13}/></a><button onClick={()=>setMenu(!menu)} className="hamb">{menu?<X/>:<Menu/>}</button></div></header>

  <section id="home" className="renaissance-hero">
   <div className="hero-copy"><p className="micro">[ NAGA SAI · AI ENGINEER · 2026 ]</p><h1>Building<br/><span>AI systems</span><br/>that <em>ship.</em></h1><p className="hero-desc">Member of Technical Staff at Salesforce. I build agents, inference infrastructure, data systems and voice interfaces.</p><a href="#work" className="hero-link">EXPLORE WORK <ArrowUpRight size={15}/></a></div>
   <div className="scene">
    <div className="arch arch-back"></div><div className="column left-column"><i/><i/><i/></div><div className="column right-column"><i/><i/><i/></div>
    <div className="halo"></div><div className="floating-orb orb1"></div><div className="floating-orb orb2"></div>
    <div className="portrait-3d"><div className="portrait-shadow"></div><img src={PORTRAIT} alt="Naga Sai"/></div>
    <div className="label-card card-a">SALESFORCE<br/><small>MTS · AI SYSTEMS</small></div><div className="label-card card-b">WALMART<br/><small>AI · DATA · BACKEND</small></div><div className="label-card card-c">BITS GOA<br/><small>COMPUTER SCIENCE</small></div>
    <div className="vertical-copy">AGENTS · INFERENCE · VOICE · DATA</div>
   </div>
   <div className="hero-bottom"><span>SCROLL</span><span>5+ YEARS · 3 COMPANIES</span><span>INDIA ↗ GLOBAL</span></div>
  </section>

  <section className="numbers"><div><strong>5+</strong><span>YEARS</span></div><div><strong>3</strong><span>COMPANIES</span></div><div><strong>∞</strong><span>AI EXPERIMENTS</span></div><div className="quote">“Make intelligent software feel <i>human.</i>”</div></section>

  <section id="work" className="dark-section section"><div className="section-top"><span>[ 01 — SELECTED WORK ]</span><span>2021 — 2026</span></div><h2>Work that<br/><i>moves.</i></h2><div className="project-list">{projects.map(p=><a href={GITHUB} target="_blank" rel="noreferrer" key={p[0]} className="project"><span>{p[0]}</span><div><small>{p[2]}</small><h3>{p[1]}</h3><p>{p[3]}</p></div><ArrowUpRight/></a>)}</div></section>

  <section id="solutions" className="paper-section section"><div className="section-top"><span>[ 02 — SOLUTIONS ]</span><span>WHAT I BUILD</span></div><h2>AI, from<br/><i>idea to reality.</i></h2><div className="service-grid">{services.map(s=><article key={s[0]}><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><small>EXPLORE →</small></article>)}</div></section>

  <section className="marble"><div className="marble-inner"><p>[ THE AI ENGINEERING PRACTICE ]</p><h2>Models are<br/>only the<br/><i>beginning.</i></h2><p className="marble-copy">The real product is the system around them: context, tools, data, inference, evaluation and a human experience.</p></div><div className="marble-orb"></div></section>

  <section id="process" className="process section"><div className="section-top"><span>[ 03 — PROCESS ]</span><span>HOW I SHIP</span></div><h2>Simple<br/><i>by design.</i></h2><div className="process-grid">{process.map(p=><article key={p[0]}><span>{p[0]}</span><h3>{p[1]}</h3><p>{p[2]}</p></article>)}</div></section>

  <section id="about" className="about section"><div className="section-top"><span>[ 04 — ABOUT ]</span><span>NAGA SAI</span></div><div className="about-grid"><div className="about-copy"><h2>Engineer.<br/><i>Builder.</i><br/>Founder.</h2><p>Backend engineer turned AI systems builder. Currently at Salesforce, with previous experience at Walmart and Tekion. B.E. Computer Science & Information Technology, BITS Goa.</p><div className="chips">{["Python","Java","LLMs","RAG","MCP","Agents","Databricks","BigQuery","Azure","AWS","GCP","Kubernetes"].map(x=><span key={x}>{x}</span>)}</div></div><div className="about-art"><div className="frame"><img src={PORTRAIT} alt="Naga Sai"/></div></div></div></section>

  <section className="curator"><p>[ EXPERIMENTAL LAB ]</p><h2>Match the<br/><i>system</i> to the<br/>problem.</h2><div className="curator-cards"><div>AGENT <small>Reason + act</small></div><div>RAG <small>Retrieve + ground</small></div><div>VOICE <small>Talk + respond</small></div><div>INFERENCE <small>Serve + optimize</small></div></div></section>

  <section className="faq section"><div className="section-top"><span>[ 05 — FAQ ]</span><span>LET'S BUILD</span></div><h2>Questions?</h2>{["What do you build?","Can you work on AI infrastructure?","Are you open to startup projects?","Can we build a voice AI product?"].map((q,i)=><details key={q}><summary><span>0{i+1}</span>{q}<b>+</b></summary><p>{i===0?"AI agents, inference systems, data platforms and voice interfaces.":i===1?"Yes — inference, model routing, observability, cloud and distributed backend systems.":i===2?"Yes. I enjoy hard product problems where AI needs to work beyond a prototype.":"Yes — voice is a major area of interest, from speech pipelines to tool-using agents."}</p></details>)}</section>

  <section id="contact" className="contact"><div className="section-top"><span>[ 06 — CONTACT ]</span><span>OPEN TO INTERESTING PROBLEMS</span></div><h2>Let's build the<br/><i>next thing.</i></h2><a className="contact-mail" href={EMAIL}>yashoramith@gmail.com <ArrowUpRight/></a><div className="social-row"><a href={GITHUB} target="_blank" rel="noreferrer"><Github size={15}/> GITHUB</a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin size={15}/> LINKEDIN</a><a href={EMAIL}><Mail size={15}/> EMAIL</a></div></section>
  <footer><span>NAGA SAI ®</span><span>AI · AGENTS · INFERENCE · VOICE</span><span>© 2026</span></footer>
 </main>
}