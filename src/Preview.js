import React from 'react';

export default function Preview({ card }) {
  return (
    <div style={{
      background: card.design.themeColor, padding: 24, borderRadius: 16,
      boxShadow: '0 4px 16px rgba(0,0,0,0.2)', color: card.design.textColor,
      minHeight: 400
    }}>
      <div style={{display:'flex', alignItems:'center', marginBottom:20}}>
        <img src={card.design.profileImage || 'https://placehold.co/100x100'} alt="프로필" width={100} style={{borderRadius:50}} />
        <div style={{marginLeft: 16}}>
          <h2 style={{margin:'0 0 8px 0'}}>{card.profile.name}</h2>
          <div style={{fontSize: 16, opacity:0.9}}>{card.profile.title}</div>
          <div style={{fontSize: 14, opacity:0.8}}>{card.profile.company}</div>
        </div>
      </div>
      <hr style={{opacity:0.3}} />
      {card.contacts.filter(c => c.on).map((c, i) => (
        <div key={i} style={{marginBottom:8, fontSize:14}}>
          <b>{c.type}:</b> {c.value}
        </div>
      ))}
      <hr style={{opacity:0.3}} />
      <div style={{marginBottom:12, fontSize:15, fontStyle:'italic'}}>{card.profile.slogan}</div>
      <div style={{marginBottom:12}}>
        {card.profile.keywords.map((kw, i) => (
          <span key={i} style={{display:'inline-block', background:'rgba(255,255,255,0.2)', borderRadius: 4, padding:'4px 8px', marginRight: 6, fontSize:12}}>
            #{kw}
          </span>
        ))}
      </div>
      <hr style={{opacity:0.3}} />
      <div>
        {card.links.filter(l => l.on).map((l, i) => (
          <div key={i} style={{marginBottom:6}}>
            <a href={l.url} target="_blank" rel="noreferrer" style={{color:'#fff', textDecoration:'underline', fontSize:13}}>
              {l.label || l.type}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
