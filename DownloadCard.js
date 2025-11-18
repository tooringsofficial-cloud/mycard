import React from 'react';

export default function DownloadCard({ card }) {
  const downloadJSON = () => {
    const dataStr = JSON.stringify(card, null, 2);
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([dataStr], {type: 'application/json'}));
    link.download = `${card.profile.name}_card.json`;
    link.click();
  };

  const downloadText = () => {
    const text = `
명함 정보
========
이름: ${card.profile.name}
직책: ${card.profile.title}
회사: ${card.profile.company}

연락처:
${card.contacts.map(c => `  ${c.type}: ${c.value}`).join('\n')}

링크/SNS:
${card.links.map(l => `  ${l.label || l.type}: ${l.url}`).join('\n')}
    `.trim();
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([text], {type: 'text/plain;charset=utf-8'}));
    link.download = `${card.profile.name}_card.txt`;
    link.click();
  };

  return (
    <div>
      <h2>명함 다운로드</h2>
      <button onClick={downloadJSON} style={{width:'100%', padding:'12px', background:'#007bff', color:'#fff', border:'none', borderRadius:6, marginBottom:8, fontWeight:'bold', cursor:'pointer', fontSize:14}}>
        JSON으로 저장
      </button>
      <button onClick={downloadText} style={{width:'100%', padding:'12px', background:'#6c757d', color:'#fff', border:'none', borderRadius:6, fontWeight:'bold', cursor:'pointer', fontSize:14}}>
        텍스트로 저장
      </button>
    </div>
  );
}
