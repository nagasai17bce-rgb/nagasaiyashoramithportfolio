"use client";

import React, { useMemo, useState } from "react";
import { Activity, BriefcaseBusiness, Code2, FileCode2, Folder, FolderOpen, Github, Linkedin, Mail, Menu, Play, Search, Settings, Terminal, User, X, ChevronDown, ChevronRight, ExternalLink, GitBranch, Package, Globe, CheckCircle2, Command, Cpu } from "lucide-react";

const PORTRAIT="https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png";
const GITHUB="https://github.com/nagasai17bce-rgb";
const LINKEDIN="https://linkedin.com/in/yasho-ramith-a662622ab";
const EMAIL="mailto:yashoramith@gmail.com";

type FileKey="home"|"about"|"experience"|"projects"|"skills"|"contact";
type Panel="explorer"|"search"|"source"|"run"|"extensions"|"account"|"settings";
const files:Record<FileKey,{name:string;icon:string}>={
 home:{name:"README.md",icon:"md"},about:{name:"about.ts",icon:"ts"},experience:{name:"experience.ts",icon:"ts"},
 projects:{name:"projects.ts",icon:"ts"},skills:{name:"skills.ts",icon:"ts"},contact:{name:"contact.ts",icon:"ts"}
};

const projectData = [["ai-lakehouse-analytics-agent","AI Lakehouse Analytics Agent","AI / DATA","Natural-language analytics over governed lakehouse data with read-only SQL generation, catalog discovery, query safety and deterministic execution."],["enterprise-mcp-gateway","Enterprise MCP Gateway","AGENTS / MCP / SECURITY","Controlled tool gateway for enterprise agents with authorization, auditing, tool routing and policy boundaries."],["agentops-observability-platform","AgentOps Observability Platform","AGENTS / OBSERVABILITY","Tracing and operational visibility for AI agents, including latency, tokens, cost, inputs, outputs and execution metadata."],["ai-incident-response-agent","AI Incident Response Agent","AGENTS / SRE","Approval-aware incident triage that classifies incidents, gathers evidence and proposes runbook actions."],["ai-software-engineering-agent","AI Software Engineering Agent","AGENTS / DEVTOOLS","Repository-aware coding workflow that moves through inspect, plan, patch, test and review stages."],["enterprise-voice-agent-platform","Enterprise Voice Agent Platform","VOICE AI","Session-oriented voice-agent backend for transcripts, actions, handoffs and future real-time integrations."],["multi-model-inference-router","Multi-Model Inference Router","INFERENCE","Routes inference requests using latency, cost, quality and fallback policies."],["adaptive-llm-batching-gateway","Adaptive LLM Batching Gateway","INFERENCE / SYSTEMS","Bounded batching layer for LLM requests balancing latency, throughput and provider utilization."],["semantic-llm-cache","Semantic LLM Cache","LLM / CACHING","Semantic caching layer designed to reuse safe equivalent LLM responses while controlling freshness and isolation."],["agent-memory-service","Agent Memory Service","AGENTS / MEMORY","Service boundary for durable agent memory, retrieval and controlled context persistence."],["enterprise-rag-platform","Enterprise RAG Platform","RAG / SEARCH","Enterprise retrieval foundation for grounded generation, provenance and controlled knowledge access."],["ai-data-governance-agent","AI Data Governance Agent","AI / GOVERNANCE","Agent interface for discovering data policies, ownership, quality and governance metadata before use."],["agent-security-firewall","Agent Security Firewall","AI SECURITY","Policy boundary for agent actions with validation, least privilege, auditability and explicit authorization."],["autonomous-support-engineer","Autonomous Support Engineer","AGENTS / SUPPORT","AI support triage system that prioritizes incidents, proposes diagnostics, retrieves context and escalates production issues."],["ai-knowledge-loop","AI Knowledge Loop","AI / KNOWLEDGE","Workflow for turning support interactions into privacy-safe, reviewable knowledge candidates for future agents."],["agent-workflow-orchestrator","Agent Workflow Orchestrator","AGENTS / ORCHESTRATION","Checkpointed execution engine for multi-step agent workflows with explicit state, retries, verification and approval points."],["ai-feature-store-agent","AI Feature Store Agent","AI / DATA","Agent interface for discovering feature metadata, freshness, quality and lineage before model consumption."],["llm-evaluation-platform","LLM Evaluation Platform","LLM / EVALUATION","Repeatable evaluation service for measuring model behavior and enforcing regression gates before releases."],["agent-sandbox-runtime","Agent Sandbox Runtime","AGENTS / SECURITY","Execution boundary for agent-generated code with runtime and output limits, designed toward isolated execution."],["multimodal-document-intelligence","Multimodal Document Intelligence","MULTIMODAL / RAG","Document-processing foundation for addressable chunks with provenance across OCR, layout, tables, charts and vision models."]];

const skills=[
 ["Languages",["Python","Java","TypeScript","SQL","JavaScript"]],
 ["AI / GenAI",["LLMs","RAG","Embeddings","Vector Search","Prompt Engineering","Agents","Tool Calling","MCP"]],
 ["Backend",["Spring Boot","FastAPI","REST","gRPC","Microservices","Distributed Systems","Async Processing"]],
 ["Cloud / Data",["Azure","Databricks","BigQuery","Apache Spark","Cosmos DB","Tableau"]],
 ["Infrastructure",["Docker","Kubernetes","CI/CD","GitHub Actions","OpenTelemetry","Kafka"]],
 ["Engineering",["System Design","Concurrency","Testing","Observability","Performance Optimization","API Design"]]
] as const;

function CodeIcon({type}:{type:string}){return <span className={"file-icon "+type}>{type==="md"?"M":type==="json"?"{}":"TS"}</span>}
function Line({n,children}:{n:number;children?:React.ReactNode}){return <div className="line"><span className="ln">{n}</span><span className="src">{children}</span></div>}

export default function Portfolio(){
 const [active,setActive]=useState<FileKey>("home");
 const [panel,setPanel]=useState<Panel>("explorer");
 const [terminal,setTerminal]=useState(true);
 const [query,setQuery]=useState("");
 const [openTabs,setOpenTabs]=useState<FileKey[]>(["home"]);
 const select=(k:FileKey)=>{setActive(k);setOpenTabs(t=>t.includes(k)?t:[...t,k]);if(panel!=="explorer")setPanel("explorer")};
 const closeTab=(k:FileKey)=>{setOpenTabs(t=>{const next=t.filter(x=>x!==k);if(k===active)setActive(next[next.length-1]||"home");return next.length?next:["home"]})};
 const toggle=(p:Panel)=>setPanel(panel===p?"explorer":p);
 const filtered=useMemo(()=>projectData.filter(p=>p[0].toLowerCase().includes(query.toLowerCase())||p[1].toLowerCase().includes(query.toLowerCase())||p[2].toLowerCase().includes(query.toLowerCase())),[query]);

 return <main className="ide">
  <div className="titlebar"><div className="window-dots"><i/><i/><i/></div><button className="title" onClick={()=>setPanel("explorer")}><span className="vs-mark">⌁</span> naga-sai-portfolio — Visual Studio Code</button><div className="title-actions"><button onClick={()=>setPanel("search")}>⌘ P</button><button onClick={()=>setTerminal(!terminal)}>⌘ J</button></div></div>
  <div className="workspace">
   <aside className="activitybar">
    <button className={panel==="explorer"?"active":""} onClick={()=>toggle("explorer")} title="Explorer"><FileCode2/></button>
    <button className={panel==="search"?"active":""} onClick={()=>toggle("search")} title="Search"><Search/></button>
    <button className={panel==="source"?"active":""} onClick={()=>toggle("source")} title="Source Control"><Activity/></button>
    <button className={panel==="run"?"active":""} onClick={()=>toggle("run")} title="Run and Debug"><Play/></button>
    <button className={panel==="extensions"?"active":""} onClick={()=>toggle("extensions")} title="Extensions"><BriefcaseBusiness/></button>
    <div className="activity-spacer"/>
    <button onClick={()=>setTerminal(!terminal)} title="Terminal"><Terminal/></button>
    <button className={panel==="account"?"active":""} onClick={()=>toggle("account")} title="Account"><User/></button>
    <button className={panel==="settings"?"active":""} onClick={()=>toggle("settings")} title="Settings"><Settings/></button>
   </aside>

   {panel!=="settings" && <aside className="explorer">
    <PanelContent panel={panel} query={query} setQuery={setQuery} select={select} filtered={filtered}/>
   </aside>}

   {panel==="settings" && <aside className="explorer settings-panel"><PanelContent panel={panel} query={query} setQuery={setQuery} select={select} filtered={filtered}/></aside>}

   <section className="editor">
    <div className="tabs">{openTabs.map(k=><button key={k} className={"tab "+(active===k?"active":"")} onClick={()=>setActive(k)}><CodeIcon type={files[k].icon}/>{files[k].name}<span onClick={(e)=>{e.stopPropagation();closeTab(k)}}><X size={13}/></span></button>)}<div className="tab-spacer"/><button className="split" onClick={()=>setTerminal(!terminal)}><Terminal size={14}/></button></div>
    <div className="breadcrumbs"><span>portfolio</span><b>/</b><span>{files[active].name}</span></div>
    <div className="editor-scroll">
     {active==="home"&&<Home select={select}/>}
     {active==="about"&&<About/>}
     {active==="experience"&&<Experience/>}
     {active==="projects"&&<Projects/>}
     {active==="skills"&&<Skills/>}
     {active==="contact"&&<Contact/>}
    </div>
    {terminal&&<TerminalPanel active={active} select={select}/>}
    <div className="statusbar"><span><GitBranch size={11}/> main</span><span>✓ 0 errors</span><span>TypeScript</span><span>UTF-8</span><span>LF</span><span className="status-grow"/><span>Ln 1, Col 1</span><span>Spaces: 2</span></div>
   </section>
  </div>
  <div className="mobile-nav"><button onClick={()=>setPanel(panel==="explorer"?"settings":"explorer")}><Menu size={18}/></button><span>{files[active].name}</span><button onClick={()=>setTerminal(!terminal)}><Terminal size={18}/></button></div>
 </main>
}

function PanelContent({panel,query,setQuery,select,filtered}:{panel:Panel;query:string;setQuery:(v:string)=>void;select:(k:FileKey)=>void;filtered:string[][]}){
 if(panel==="search")return <><div className="explorer-head"><span>SEARCH</span></div><div className="search-box"><Search size={14}/><input autoFocus value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects..."/></div><div className="search-results">{filtered.map(p=><a key={p[0]} href={`https://github.com/nagasai17bce-rgb/${p[0]}`} target="_blank"><span>{p[1]}</span><small>{p[2]}</small></a>)}</div></>;
 if(panel==="source")return <><div className="explorer-head"><span>SOURCE CONTROL</span></div><div className="source-box"><GitBranch/><strong>main</strong><span>Working tree clean</span><a href={GITHUB} target="_blank">Open GitHub <ExternalLink size={13}/></a></div><div className="commit-list"><div>✓ Latest portfolio changes</div><div>✓ VS Code workspace UI</div><div>✓ GitHub project index</div></div></>;
 if(panel==="run")return <><div className="explorer-head"><span>RUN AND DEBUG</span></div><div className="run-box"><Play/><strong>Portfolio</strong><p>Next.js production build</p><button onClick={()=>select("projects")}>Open project suite</button><button onClick={()=>window.open(GITHUB,"_blank")}>Open repository</button></div></>;
 if(panel==="extensions")return <><div className="explorer-head"><span>EXTENSIONS</span></div><div className="extension-list">{["Python","Java","TypeScript","LLMs","RAG","MCP","FastAPI","Databricks","Azure","BigQuery","Docker","Kubernetes","Kafka","OpenTelemetry"].map(x=><div key={x}><Package size={14}/><span>{x}</span><small>used in stack</small></div>)}</div></>;
 if(panel==="account")return <><div className="explorer-head"><span>ACCOUNT</span></div><div className="account-card"><img src={PORTRAIT} alt="Naga Sai"/><strong>Naga Sai</strong><span>MTS · AI / Backend</span><a href={LINKEDIN} target="_blank">LinkedIn <ExternalLink size={12}/></a><a href={GITHUB} target="_blank">GitHub <ExternalLink size={12}/></a></div></>;
 if(panel==="settings")return <><div className="explorer-head"><span>SETTINGS</span></div><div className="settings-items"><div><strong>Portfolio UI</strong><span>VS Code workspace</span></div><div><strong>Theme</strong><span>Dark editor</span></div><div><strong>Terminal</strong><span>Toggle with ⌘J or terminal icon</span></div><div><strong>Repository</strong><span>nagasaiyashoramithportfolio</span></div></div></>;
 return <><div className="explorer-head"><span>EXPLORER</span></div><div className="workspace-name"><ChevronDown size={15}/> NAGA-SAI-PORTFOLIO</div><div className="tree"><div className="tree-folder"><ChevronDown size={14}/><FolderOpen size={15}/> portfolio</div>{Object.entries(files).map(([key,f])=><button key={key} className="tree-file" onClick={()=>select(key as FileKey)}><CodeIcon type={f.icon}/><span>{f.name}</span></button>)}<div className="tree-folder muted"><ChevronRight size={14}/><Folder size={15}/> public</div><a className="tree-file muted" href={GITHUB} target="_blank"><Github size={14}/> GitHub projects</a></div><div className="outline"><span>WORKSPACE</span><div>▸ 20 AI repositories</div><div>▸ 5+ years engineering</div><div>▸ Salesforce · Walmart · Tekion</div></div></>;
}

function Home({select}:{select:(k:FileKey)=>void}){return <div className="codepage home-page"><div className="code-lines">
<Line n={1}><span className="comment">/** Naga Sai — AI / Backend Engineer */</span></Line><Line n={2}>{null}</Line><Line n={3}><span className="kw">const</span> <span className="var">developer</span> = {'{'}</Line><Line n={4}>  name: <span className="str">"Naga Sai"</span>,</Line><Line n={5}>  role: <span className="str">"MTS · AI / Backend"</span>,</Line><Line n={6}>  company: <span className="str">"Salesforce"</span>,</Line><Line n={7}>  previous: [<span className="str">"Walmart"</span>, <span className="str">"Tekion"</span>],</Line><Line n={8}>  focus: [<span className="str">"Agents"</span>, <span className="str">"RAG"</span>, <span className="str">"Inference"</span>, <span className="str">"Voice AI"</span>],</Line><Line n={9}>  repositories: <span className="num">20</span>,</Line><Line n={10}>{'}'}</Line><Line n={11}>{null}</Line><Line n={12}><span className="kw">export default</span> <span className="kw">function</span> <span className="fn">intro</span>() {'{'}</Line><Line n={13}>  <span className="kw">return</span> <span className="str">"I build AI systems that ship."</span>;</Line><Line n={14}>{'}'}</Line>
</div><div className="hero-card"><div className="hero-copy"><div className="eyebrow">BUILDER · AI ENGINEER · PROBLEM SOLVER</div><h1>Naga Sai<span>.</span></h1><p>Production AI, agent systems, inference infrastructure, cloud/data platforms and backend engineering.</p><div className="quick-actions"><button onClick={()=>select("projects")}>Open projects <ExternalLink size={14}/></button><button onClick={()=>select("experience")}>View experience</button><button onClick={()=>select("skills")}>View skills</button></div></div><div className="portrait-wrap"><div className="scanline"/><img src={PORTRAIT} alt="Naga Sai"/><div className="portrait-tag">AI / SYSTEMS</div></div></div><div className="terminal-command"><span className="prompt">naga@portfolio</span>:<span className="path">~</span>$ <span className="typing">build systems, not slides.</span><span className="cursor">▋</span></div></div>}

function About(){return <div className="codepage"><Lines><Line n={1}><span className="kw">export const</span> <span className="var">about</span> = {'{'}</Line><Line n={2}>  current: <span className="str">"MTS at Salesforce"</span>,</Line><Line n={3}>  previous: [<span className="str">"Walmart"</span>, <span className="str">"Tekion"</span>],</Line><Line n={4}>  education: <span className="str">"BITS Goa · Computer Science"</span>,</Line><Line n={5}>  focus: [<span className="str">"AI agents"</span>, <span className="str">"RAG"</span>, <span className="str">"Inference"</span>, <span className="str">"Voice AI"</span>],</Line><Line n={6}>  philosophy: <span className="str">"Make complex systems useful."</span>,</Line><Line n={7}>{'}'}</Line></Lines><InfoGrid items={[["5+","years building"],["3","companies"],["20","GitHub AI repos"],["AI","focused domain"]]}/></div>}

function Lines({children}:{children:React.ReactNode}){return <div className="code-lines">{children}</div>}
function Experience(){
 const experience=[
  {
   date:"Jul 2024 — Present",
   company:"Salesforce",
   role:"Member of Technical Staff (MTS) · AI / Backend",
   summary:"Building production-grade AI and backend systems with a focus on enterprise reliability, scalable services and intelligent workflows.",
   bullets:[
    "Design and develop scalable backend services and APIs for enterprise workflows, with emphasis on reliability, performance and maintainability.",
    "Build AI-enabled workflows using LLMs, retrieval-augmented generation (RAG), embeddings, tool calling and agent-oriented patterns.",
    "Work across cloud and data platforms to integrate services, operational data and intelligent automation into production systems.",
    "Improve observability, debugging and production readiness through monitoring, structured telemetry, testing and engineering best practices."
   ]
  },
  {
   date:"Jun 2022 — Jul 2024",
   company:"Walmart",
   role:"Software Engineer · AI / Backend & Data",
   summary:"Worked on large-scale backend, cloud and data engineering systems supporting production analytics and business workflows.",
   bullets:[
    "Developed backend and data workflows using Python, Java, cloud services and distributed processing technologies.",
    "Worked with Azure, Databricks, Spark and large-scale datasets to build and optimize production data pipelines and operational workflows.",
    "Contributed to cloud cost and log-management initiatives, including exporting high-volume Log Analytics data to object storage in controlled batches.",
    "Worked on analytics and reporting migrations using BigQuery and Tableau, including data-source modernization and validation of production reporting flows."
   ]
  },
  {
   date:"Jun 2021 — Jun 2022",
   company:"Tekion",
   role:"Software Development Engineer",
   summary:"Built backend services and production software for automotive technology products.",
   bullets:[
    "Developed backend services and APIs for product workflows using Java and service-oriented architecture patterns.",
    "Worked on production features, debugging and service integrations in a fast-moving engineering environment.",
    "Focused on API design, data flows, reliability and maintainable backend implementation.",
    "Collaborated across engineering teams to ship and support customer-facing product capabilities."
   ]
  },
  {
   date:"Jan 2021 — Jun 2021",
   company:"Amazon",
   role:"Software Development Engineer Intern",
   summary:"Software engineering internship focused on backend development, engineering fundamentals and production-quality delivery.",
   bullets:[
    "Worked on software engineering tasks within a production development environment and contributed to backend-oriented implementation.",
    "Applied data structures, algorithms, API and software-design fundamentals while developing and testing assigned features.",
    "Participated in code reviews, debugging and iterative development with an emphasis on correctness and maintainability.",
    "Collaborated with engineers to understand requirements, implement solutions and validate changes before delivery."
   ]
  }
 ];
 return <div className="codepage"><div className="section-title"><span className="comment">// career.ts</span><h2>Work Experience</h2><p>Engineering experience across AI, backend, cloud and large-scale data systems.</p></div>{experience.map((e,i)=><div className="experience-row experience-detailed" key={e.company}><div className="year">{e.date}</div><div className="exp-main"><div className="exp-top"><strong>{e.company}</strong><span>{e.role}</span></div><p className="exp-summary">{e.summary}</p><ul className="exp-bullets">{e.bullets.map(b=><li key={b}>{b}</li>)}</ul></div></div>)}</div>
}

function Projects(){return <div className="codepage"><div className="section-title"><span className="comment">// github-projects.ts</span><h2>Projects</h2><p>Real repositories from my GitHub workspace.</p></div><div className="project-grid">{projectData.map((p,i)=><article className="project-card" key={p[0]}><div className="project-number">{String(i+1).padStart(2,"0")}</div><Code2 size={20}/><h3>{p[1]}</h3><span className="tag">{p[2]}</span><p>{p[3]}</p><a href={`https://github.com/nagasai17bce-rgb/${p[0]}`} target="_blank" rel="noreferrer">open repository <Github size={14}/></a></article>)}</div></div>}

function Skills(){return <div className="codepage"><div className="section-title"><span className="comment">// skills.ts</span><h2>Skills</h2><p>Technologies reflected in the portfolio/resume and current engineering work.</p></div><div className="skill-grid">{skills.map(([g,items])=><div className="skill-group" key={g}><h3>{g}</h3>{items.map(x=><span key={x}>{x}</span>)}</div>)}</div></div>}

function Contact(){return <div className="codepage contact-page"><div className="section-title"><span className="comment">// contact.ts</span><h2>Let's build.</h2></div><p className="contact-lead">Have a hard AI/backend problem, a product to build, or a Voice AI idea? Open a channel.</p><div className="contact-links"><a href={EMAIL}><Mail/> email</a><a href={LINKEDIN} target="_blank" rel="noreferrer"><Linkedin/> linkedin</a><a href={GITHUB} target="_blank" rel="noreferrer"><Github/> github</a></div></div>}

function InfoGrid({items}:{items:string[][]}){return <div className="info-grid">{items.map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div>}
function TerminalPanel({active,select}:{active:FileKey;select:(k:FileKey)=>void}){return <div className="terminal-panel"><div className="terminal-head"><span>TERMINAL</span><span>bash</span><span className="terminal-actions"><button onClick={()=>select("projects")}>ls projects</button><button onClick={()=>window.open(GITHUB,"_blank")}>git remote -v</button></span></div><div className="terminal-body"><div><span className="prompt">naga@portfolio</span>:<span className="path">~/portfolio</span>$ echo <span className="str">"currently viewing {files[active].name}"</span></div><div className="dim">Naga Sai · MTS @ Salesforce · AI / Backend</div><div><span className="prompt">naga@portfolio</span>:<span className="path">~/portfolio</span>$ <button className="terminal-link" onClick={()=>select("projects")}>open projects</button> <span className="cursor">▋</span></div></div></div>}
