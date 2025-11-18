import React from 'react';

export default function TemplateSelector({ design, setDesign }) {
  const templates = [
    { name: '기본 파랑', layout: '기본형', themeColor: '#133e77', textColor: '#FFFFFF' },
    { name: '활동적', layout: '이미지강조', themeColor: '#FF6B6B', textColor: '#FFFFFF' },
    { name: '미니멀', layout: '기본형', themeColor: '#F8F9FA', textColor: '#333333' },
    { name: '프리미엄', layout: '기본형', themeColor: '#2C3E50', textColor: '#ECF0F1' },
    { name: '따뜻함', layout: '이미지강조', themeColor: '#E67E22', textColor: '#FFFFFF' },
    { name: '신뢰', layout: '기본형', themeColor: '#27AE60', textColor: '#FFFFFF' },
  ];

  return (
    <div>
      <h2>명함 템플릿 선택</h2>
      <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:12}}>
        {templates.map((t, i) => (
          <div key={i} onClick={() => setDesign({...design, layout: t.layout, themeColor: t.themeColor, textColor: t.textColor})}
            style={{
              padding:16, borderRadius:8, cursor:'pointer', textAlign:'center',
              background: t.themeColor, color: t.textColor, fontWeight:'bold',
              border: design.themeColor === t.themeColor ? '3px solid #000' : '2px solid transparent',
              transition:'all 0.2s'
            }}
          >
            {t.name}
          </div>
        ))}
      </div>
    </div>
  );
}
