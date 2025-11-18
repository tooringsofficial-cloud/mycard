import React, { useState, useEffect } from 'react';
import ProfileEditor from './ProfileEditor';
import ContactEditor from './ContactEditor';
import LinkEditor from './LinkEditor';
import DesignEditor from './DesignEditor';
import TemplateSelector from './TemplateSelector';
import StyleCustomizer from './StyleCustomizer';
import DownloadCard from './DownloadCard';
import Preview from './Preview';
import ShareView from './ShareView';

export default function App() {
  const [tab, setTab] = useState('preview');
  const [showMenu, setShowMenu] = useState(false);
  
  const initialCard = {
    profile: {
      image: '',
      name: '성상현',
      title: '공인중개사',
      dept: '',
      company: '치의학대학 / 모두의 부동산',
      slogan: '',
      keywords: []
    },
    contacts: [
      { type: '유선전화', value: '02-552-9199', on: true },
      { type: '휴대전화', value: '010-5348-2981', on: true },
      { type: '팩스', value: '0504-279-2981', on: true },
      { type: '이메일', value: 'tooringsofficial@gmail.com', on: true },
      { type: '주소', value: '서울 강남구 역삼동 837-26 삼일프라자 1127호', on: true }
    ],
    links: [
      { type: '유튜브', label: 'YouTube - toorings', url: 'https://youtube.com/@toorings', on: true },
      { type: '인스타그램', label: 'Instagram - pictqx.0', url: 'https://instagram.com/pictqx.0', on: true },
      { type: '카카오톡', label: '카카오톡', url: '', on: true },
      { type: '링크드인', label: 'Linkedin', url: '', on: true }
    ],
    design: {
      themeColor: '#133e77',
      textColor: '#000000',
      layout: '기본형',
      profileImage: ''
    }
  };
  
  const [card, setCard] = useState(() => {
    const saved = localStorage.getItem('mycard');
    return saved ? JSON.parse(saved) : initialCard;
  });

  useEffect(() => {
    localStorage.setItem('mycard', JSON.stringify(card));
  }, [card]);

  const menuItems = [
    { id: 'preview', label: '🎨 미리보기' },
    { id: 'profile', label: '👤 프로필' },
    { id: 'contact', label: '☎️ 연락처' },
    { id: 'link', label: '🔗 콘텐츠' },
    { id: 'design', label: '🎭 디자인' },
    { id: 'template', label: '📋 템플릿' },
    { id: 'style', label: '✨ 스타일' },
    { id: 'download', label: '💾 다운로드' },
    { id: 'share', label: '📤 공유' }
  ];

  return (
    <div style={{minHeight:'100vh', background:'#f5f5f5', fontFamily:'Pretendard, Arial, sans-serif'}}>
      <header style={{background:'#133e77', color:'#fff', padding:'12px 20px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
        <h1 style={{margin:0}}>명함 에디터</h1>
      </header>
      
      <div style={{maxWidth:800, margin:'0 auto', padding:16}}>
        <button onClick={() => setShowMenu(!showMenu)} style={{width:'100%', padding:'12px', background:'#133e77', color:'#fff', border:'none', borderRadius:8, fontSize:16, fontWeight:'bold', cursor:'pointer', marginBottom:16}}>
          {showMenu ? '메뉴 닫기 ✕' : '메뉴 열기 ☰'}
        </button>

        {showMenu && (
          <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:8, marginBottom:16}}>
            {menuItems.map(item => (
              <button key={item.id} onClick={() => {setTab(item.id); setShowMenu(false);}} style={{padding:'12px', background: tab === item.id ? '#133e77' : '#fff', color: tab === item.id ? '#fff' : '#333', border:'1px solid #ddd', borderRadius:6, fontSize:13, fontWeight:'bold', cursor:'pointer', transition:'all 0.2s'}}>
                {item.label}
              </button>
            ))}
          </div>
        )}

        <div style={{display:'flex', gap:8, marginBottom:16}}>
          <button onClick={() => alert('✓ 저장되었습니다!')} style={{flex:1, padding:'10px', background:'#28a745', color:'#fff', border:'none', borderRadius:6, fontWeight:'bold', cursor:'pointer'}}>💾 저장</button>
          <button onClick={() => {setCard(initialCard); localStorage.removeItem('mycard'); alert('초기화됨');}} style={{flex:1, padding:'10px', background:'#dc3545', color:'#fff', border:'none', borderRadius:6, fontWeight:'bold', cursor:'pointer'}}>🔄 초기화</button>
        </div>

        {tab === 'preview' && <Preview card={card} />}
        {tab === 'profile' && <ProfileEditor profile={card.profile} setProfile={p => setCard(c => ({...c, profile:p}))} />}
        {tab === 'contact' && <ContactEditor contacts={card.contacts} setContacts={cts => setCard(c => ({...c, contacts:cts}))} />}
        {tab === 'link' && <LinkEditor links={card.links} setLinks={lks => setCard(c => ({...c, links:lks}))} />}
        {tab === 'design' && <DesignEditor design={card.design} setDesign={d => setCard(c => ({...c, design:d}))} />}
        {tab === 'template' && <TemplateSelector design={card.design} setDesign={d => setCard(c => ({...c, design:d}))} />}
        {tab === 'style' && <StyleCustomizer design={card.design} setDesign={d => setCard(c => ({...c, design:d}))} />}
        {tab === 'download' && <DownloadCard card={card} />}
        {tab === 'share' && <ShareView card={card} />}
      </div>
    </div>
  );
}
