"use client";

import { useState } from "react";
import { Activity, BriefcaseBusiness, Code2, FileCode2, Folder, FolderOpen, Github, Linkedin, Mail, Menu, Play, Search, Settings, Terminal, User, X, ChevronDown, ChevronRight, ExternalLink } from "lucide-react";

const PORTRAIT="https://raw.githubusercontent.com/nagasai17bce-rgb/naga-3d-portfolio/main/public/naga-portrait.png";
const GITHUB="https://github.com/nagasai17bce-rgb";
const LINKEDIN="https://linkedin.com/in/yasho-ramith-a662622ab";
const EMAIL="mailto:yashoramith@gmail.com";

type FileKey="home"|"about"|"experience"|"projects"|"skills"|"contact";

const files: Record<FileKey,{name:string;icon:string}> = {
  home:{name:"README.md",icon:"md"},
  about:{name:"about.ts",icon:"ts"},
  experience:{name:"experience.ts",icon:"ts"},
  projects:{name:"projects.ts",icon:"ts"},
  skills:{name:"skills.ts",icon:"ts"},
  contact:{name:"contact.ts",icon:"ts"},
};

const projectData=[
  {name:"Salesforce AI Systems",path:"projects/salesforce-ai.ts",tag:"AI / AGENTS / MCP",text:"Agentic workflows, tool calling, inference services and production backend systems for enterprise AI."},
  {name:"Fraud Dashboard Migration",path:"projects/fraud-dashboard.ts",tag:"BIGQUERY / T360 / TABLEAU",text:"Migrated fraud analytics from ECOMM to T360-backed BigQuery sources with validation and rollback paths."},
  {name:"Cloud Cost Optimization",path:"projects/log-export.ts",tag:"AZURE / DATABRICKS",text:"Designed batched Log Analytics export and archival flows to Blob Storage for large-scale telemetry."},
  {name:"Voice AI Lab",path:"projects/voice-ai.ts",tag:"LLM / VOICE / AGENTS",text:"Exploring native-language voice agents for real-world workflows, with a focus on low-latency inference."},
];

function CodeIcon({type}:{type:string}){ return <span className={"file-icon "+type}>{type==="md"?"M":type==="json"?"{}":"TS"}</span> }

function Code({children}:{children:React.ReactNode}){return <code>{children}</code>}

export default function Portfolio(){
 const [active,setActive]=useState<FileKey>("home");
 const [sidebar,setSidebar]=useState(true);
 const [terminal,setTerminal]=useState(true);
 const [explorerOpen,setExplorerOpen]=useState(true);
 const [query,setQuery]=useState("");
 const tabs=Object.entries(files).filter(([key])=>key===active || key==="home");
 const select=(k:FileKey)=>setActive(k);

 return <main className="ide">
   <div className="titlebar">
     <div className="window-dots"><i/><i/><i/></div>
     <div className="title"><span className="vs-mark">⌁</span> naga-sai-portfolio — Visual Studio Code</div>
     <div className="title-actions"><span>⌘ P</span><span>⌘ K</span></div>
   </div>

   <div className="workspace">
     <aside className="activitybar">
       <button className={sidebar?"active":""} onClick={()=>setSidebar(true)} title="Explorer"><FileCode2/></button>
       <button title="Search"><Search/></button>
       <button title="Source Control"><Activity/></button>
       <button title="Run"><Play/></button>
       <button title="Extensions"><BriefcaseBusiness/></button>
       <div className="activity-spacer"/>
       <button onClick={()=>setTerminal(!terminal)} title="Terminal"><Terminal/></button>
       <button title="Account"><User/></button>
       <button title="Settings"><Settings/></button>
     </aside>

     {sidebar && <aside className="explorer">
       <div className="explorer-head"><span>EXPLORER</span><button onClick={()=>setSidebar(false)}><X size={15}/></button></div>
       <div className="workspace-name"><ChevronDown size={15}/> NAGA-SAI-PORTFOLIO</div>
       <div className="tree">
         <div className="tree-folder"><ChevronDown size={14}/><FolderOpen size={15}/> portfolio</div>
         {Object.entries(files).map(([key,f])=><button key={key} className={"tree-file "+(active===key?"selected":"")} onClick={()=>select(key as FileKey)}>
           <CodeIcon type={f.icon}/><span>{f.name}</span>
         </button>)}
         <div className="tree-folder muted"><ChevronRight size={14}/><Folder size={15}/> public</div>
         <div className="tree-file muted"><span className="plain-icon">◇</span>package.json</div>
         <div className="tree-file muted"><span className="plain-icon">◇</span>README.md</div>
       </div>
       <div className="outline"><span>OUTLINE</span><div>▸ {files[active].name}</div><div>▸ exports</div><div>▸ experience</div></div>
     </aside>}

     <section className="editor">
       <div className="tabs">
         {tabs.map(([key,f])=><button key={key} className={active===key?"tab active":"tab"} onClick={()=>select(key as FileKey)}><CodeIcon type={f.icon}/>{f.name}<X size={13}/></button>)}
         <div className="tab-spacer"/>
         <button className="split">◫</button>
         <button className="split" onClick={()=>setTerminal(!terminal)}><Terminal size={14}/></button>
       </div>
       <div className="breadcrumbs"><span>portfolio</span><b>/</b><span>{files[active].name}</span></div>
       <div className="editor-scroll">
         {active==="home" && <Home select={select}/>}
         {active==="about" && <About/>}
         {active==="experience" && <Experience/>}
         {active==="projects" && <Projects/>}
         {active==="skills" && <Skills/>}
         {active==="contact" && <Contact/>}
       </div>
       {terminal && <TerminalPanel active={active}/>}
       <div className="statusbar"><span>main</span><span>✓ 0 errors</span><span>TypeScript</span><span>UTF-8</span><span>LF</span><span className="status-grow"/><span>Ln 1, Col 1</span><span>Spaces: 2</span></div>
     </section>
   </div>

   <div className="mobile-nav">
     <button onClick={()=>setSidebar(!sidebar)}><Menu size={18}/></button>
     <span>{files[active].name}</span>
     <button onClick={()=>setTerminal(!terminal)}><Terminal size={18}/></button>
   </div>
 </main>
}

function Lines({children}:{children:React.ReactNode}){return <div className="code-lines">{children}</div>}
function Line({n,children}:{n:number;children:React.ReactNode}){return <div className="line"><span className="ln">{n}</span><span className="src">{children}</span></div>}

function Home({select}:{select:(k:FileKey)=>void}){
 return <div className="codepage home-page">
   <Lines>
    <Line n={1}><span className="comment">/** Welcome to my workspace */</span></Line>
    <Line n={2}>{null}</Line><Line n={3}><span className="kw">const</span> <span className="var">developer</span> = {'{'}</Line>
    <Line n={4}>  name: <span className="str">"Naga Sai"</span>,</Line>
    <Line n={5}>  role: <span className="str">"MTS · AI Engineer"</span>,</Line>
    <Line n={6}>  company: <span className="str">"Salesforce"</span>,</Line>
    <Line n={7}>  location: <span className="str">"India"</span>,</Line>
    <Line n={8}>  focus: [<span className="str">"Agents"</span>, <span className="str">"Inference"</span>, <span className="str">"Voice AI"</span>],</Line>
    <Line n={9}>  experience: <span className="num">5</span>,</Line>
    <Line n={10}>{'}'}</Line>
    <Line n={11}>{null}</Line>
    <Line n={12}><span className="kw">export default</span> <span className="kw">function</span> <span className="fn">intro</span>() {'{'}</Line>
    <Line n={13}>  <span className="kw">return</span> <span className="str">"I build AI systems that ship."</span>;</Line>
    <Line n={14}>{'}'}</Line>
   </Lines>
   <div className="hero-card">
     <div className="hero-copy"><div className="eyebrow">AI ENGINEER / BUILDER</div><h1>Naga Sai<span>.</span></h1><p>Production AI, agent systems, inference infrastructure and distributed backend engineering.</p>
       <div className="quick-actions"><button onClick={()=>select("projects")}>Open projects <ExternalLink size={14}/></button><button onClick={()=>select("experience")}>View experience</button></div>
     </div>
     <div className="portrait-wrap"><div className="scanline"/><img src={PORTRAIT} alt="Naga Sai"/><div className="portrait-tag">AI / SYSTEMS</div></div>
   </div>
   <div className="terminal-command"><span className="prompt">naga@portfolio</span>:<span className="path">~</span>$ <span className="typing">build systems, not slides.</span><span className="cursor">▋</span></div>
 </div>
}

function About(){return <div className="codepage"><Lines>
 <Line n={1}><span className="kw">export const</span> <span className="var">about</span> = {'{'}</Line>
 <Line n={2}>  philosophy: <span className="str">"Make complex systems feel simple."</span>,</Line>
 <Line n={3}>  current: <span className="str">"Building AI systems at Salesforce"</span>,</Line>
 <Line n={4}>  previous: [<span className="str">"Walmart"</span>, <span className="str">"Tekion"</span>],</Line>
 <Line n={5}>  education: <span className="str">"BITS Goa · Computer Science"</span>,</Line>
 <Line n={6}>  interests: [<span className="str">"Voice AI"</span>, <span className="str">"Agents"</span>, <span className="str">"Inference"</span>],</Line>
 <Line n={7}>{'}'}</Line>
 </Lines><InfoGrid items={[["5+","years building"],["3","companies"],["AI","current focus"],["∞","things to learn"]]}/></div>}

function Experience(){return <div className="codepage"><div className="section-title"><span className="comment">// career.ts</span><h2>Experience</h2></div>{[
 ["2024 — now","Salesforce","MTS / AI Engineering","AI systems, agent workflows, inference and backend services."],
 ["2022 — 2024","Walmart","Software / AI Engineering","Data platforms, cloud systems, analytics and AI-enabled engineering."],
 ["2021 — 2022","Tekion","Software Engineer","Backend systems and production software for automotive technology."]
].map((e,i)=><div className="experience-row" key={i}><div className="year">{e[0]}</div><div className="exp-main"><div className="exp-top"><strong>{e[1]}</strong><span>{e[2]}</span></div><p>{e[3]}</p></div></div>)}</div>}

function Projects(){return <div className="codepage"><div className="section-title"><span className="comment">// selected-work.ts</span><h2>Projects</h2></div><div className="project-grid">{projectData.map((p,i)=><article className="project-card" key={p.name}><div className="project-number">0{i+1}</div><Code2 size={20}/><h3>{p.name}</h3><span className="tag">{p.tag}</span><p>{p.text}</p><a href={GITHUB} target="_blank">source <Github size={14}/></a></article>)}</div></div>}

function Skills(){const groups: [string,string[]][]=[["Languages",["Python","Java","TypeScript","SQL"]],["AI / ML",["LLMs","RAG","Embeddings","Tool Calling","Agents","MCP"]],["Cloud / Data",["Azure","Databricks","BigQuery","Cosmos DB","Tableau"]],["Backend",["FastAPI","APIs","Distributed Systems","Inference","CI/CD"]]];return <div className="codepage"><div className="section-title"><span className="comment">// stack.json</span><h2>Skills</h2></div><div className="skill-grid">{groups.map(([g,items])=><div className="skill-group" key={g}><h3>{g}</h3>{(items as string[]).map(x=><span key={x}>{x}</span>)}</div>)}</div></div>}

function Contact(){return <div className="codepage contact-page"><div className="section-title"><span className="comment">// contact.ts</span><h2>Let's build.</h2></div><p className="contact-lead">Have a hard AI/backend problem, a product to build, or a Voice AI idea? Open a channel.</p><div className="contact-links"><a href={EMAIL}><Mail/> email</a><a href={LINKEDIN} target="_blank"><Linkedin/> linkedin</a><a href={GITHUB} target="_blank"><Github/> github</a></div></div>}

function InfoGrid({items}:{items:string[][]}){return <div className="info-grid">{items.map(x=><div key={x[0]}><strong>{x[0]}</strong><span>{x[1]}</span></div>)}</div>}

function TerminalPanel({active}:{active:FileKey}){return <div className="terminal-panel"><div className="terminal-head"><span>TERMINAL</span><span>bash</span></div><div className="terminal-body"><div><span className="prompt">naga@portfolio</span>:<span className="path">~/portfolio</span>$ echo <span className="str">"currently viewing {files[active].name}"</span></div><div className="dim">Naga Sai · AI Engineer · Salesforce</div><div><span className="prompt">naga@portfolio</span>:<span className="path">~/portfolio</span>$ <span className="cursor">▋</span></div></div></div>}
