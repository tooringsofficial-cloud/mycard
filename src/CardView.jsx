import React from 'react';
import { useParams } from 'react-router-dom';

export default function CardView() {
  const { userId } = useParams();

  const card = {
    name: '성상현',
    title: '공인중개사 / 치과학대학 / 모두의 부동산',
    phone: '010-5348-2981',
    tel: '02-552-9199',
    company: '모두의 부동산',
    email: 'tooringsofficial@gmail.com',
    address: '서울 강남구 삼평동 837-26 삼일프라자 1127호',
    desc: '신뢰를 바탕으로 가치 드립니다\n제 명함의 신념 모토입니다...',
    socials: [
      { t: 'YouTube', u: 'https://youtube.com/@toorings' },
      { t: 'Instagram', u: 'https://instagram.com/pictqx.0' },
      { t: '카카오톡', u: '#' }
    ]
  };

  return (
    <div style={{
        maxWidth: 480, margin: '0 auto', padding: 16,
        fontFamily: "'Pretendard', Arial, sans-serif"
      }}>
      <div style={{
        display: 'flex', alignItems: 'center', marginBottom: 16
      }}>
        <img src="https://placehold.co/80x80" alt="프로필" 
             style={{width: 80, height: 80, borderRadius: 16, marginRight: 12}} />
        <div>
          <h2 style={{margin:'0 0 8px 0'}}>{card.name}</h2>
          <div style={{fontSize:14, color:'#888'}}>{card.title}</div>
          <div style={{fontSize:14, color:'#444'}}>{card.company}</div>
        </div>
      </div>
      <div style={{margin:'16px 0', fontSize:15}}>
        <b>☎ {card.tel}</b><br/>
        <b>📱 {card.phone}</b><br/>
        <b>✉️ {card.email}</b><br/>
        <b>🏢 {card.address}</b><br/>
      </div>
      <div style={{margin:'24px 0', whiteSpace:'pre-line', fontSize:14, color:'#444'}}>
        {card.desc}
      </div>
      <div>
        {card.socials.map(s => (
          <a href={s.u} target="_blank" rel="noreferrer"
             key={s.t}
             style={{
               display:'inline-block', padding:'10px 15px', margin:'0 5px 10px 0',
               border:'1px solid #eee', borderRadius:5, color:'#222', textDecoration:'none',
               fontSize:15, background:'#fafbfc'
             }}>{s.t}</a>
        ))}
      </div>
    </div>
  );
}
