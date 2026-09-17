import { useEffect, useState } from "react";

const PRACTICES={
 sports:{label:"SPORTS",title:"Counsel for athletes navigating careers, rights and opportunity.",dek:"From the contract in front of you to the leverage it creates next, the work is about protecting the career around the deal.",facts:["Sports law lead for The Lew Firm's athlete representation practice","Professional combat sports, NFL and collegiate football experience","Contracts, endorsements, licensing, NIL and compensation structures"],services:["ATHLETE AGREEMENTS","ENDORSEMENTS + LICENSING","NIL + COLLEGE SPORTS","BUSINESS AFFAIRS"],note:"ATHLETE · RIGHTS · LEVERAGE"},
 music:{label:"MUSIC",title:"Business affairs built around the artist, the rights and the long game.",dek:"Music deals are not isolated documents. Recording, publishing, licensing, distribution and brand rights can shape what an artist controls long after a transaction closes.",facts:["Warner Music Group — Business Affairs Department, 2004–2009","Negotiated contracts with artists, producers and songwriters","Licensing, brand partnerships, distribution and rights management"],services:["ARTIST + PRODUCER AGREEMENTS","LICENSING + RIGHTS","DISTRIBUTION","BRAND PARTNERSHIPS"],note:"WARNER MUSIC GROUP · BUSINESS AFFAIRS"},
 "film-tv":{label:"FILM / TV",title:"Production and business affairs with the rights architecture in view.",dek:"A film or television project has to work creatively, commercially and legally. The focus is on building agreements that protect the underlying rights while allowing the project to move.",facts:["More than a decade advising media, entertainment and technology clients","Licensing, distribution and content agreements relevant to production and financing","Experience across IP, brand partnerships, governance, compliance and data privacy"],services:["PRODUCTION + CONTENT","LICENSING + DISTRIBUTION","RIGHTS MANAGEMENT","TALENT + BUSINESS AFFAIRS"],note:"PRODUCTION · RIGHTS · DISTRIBUTION"}
};

export default function PracticeDetail(){
 const [active,setActive]=useState(null);
 useEffect(()=>{const fn=e=>setActive(e.detail?.practice||null);window.addEventListener("practice:open",fn);return()=>window.removeEventListener("practice:open",fn)},[]);
 if(!active||!PRACTICES[active])return null;
 const p=PRACTICES[active];
 return <section className={`practice-detail practice-detail--${active}`} id="practice-detail" aria-live="polite">
   <div className="practice-detail-hero">
    <button type="button" onClick={()=>setActive(null)} className="practice-detail-close">CLOSE ×</button>
    <p className="eyebrow">{p.label} PRACTICE</p><h2>{p.title}</h2><p className="practice-detail-dek">{p.dek}</p><span className="practice-detail-watermark">{p.note}</span>
   </div>
   <div className="practice-detail-body">
    <div className="practice-detail-services"><p className="eyebrow">HOW I CAN HELP</p>{p.services.map((x,i)=><div key={x}><span>0{i+1}</span><strong>{x}</strong></div>)}</div>
    <div className="practice-detail-record"><p className="eyebrow">RELEVANT EXPERIENCE</p>{p.facts.map(x=><p key={x}>{x}</p>)}<a href="mailto:ak@thelewfirm.com">DISCUSS A MATTER <span>↗</span></a></div>
   </div>
 </section>
}
