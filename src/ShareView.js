import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function ShareView({ card }) {
  const userId = 'toorings';
  const link = `http://172.30.1.14:3000/card/${userId}`;
  return (
    <div style={{textAlign:'center'}}>
      <h2>명함 공유</h2>
      <p style={{fontSize:14, color:'#666'}}>아래 QR코드를 스캔하거나 링크를 공유하세요</p>
      <div style={{background:'#fff', padding:20, borderRadius:12, display:'inline-block', marginBottom:16}}>
        <QRCodeSVG value={link} size={220} />
      </div>
      <div style={{marginBottom:16}}>
        <input readOnly value={link} style={{width:'100%', fontSize:13, padding:10, border:'1px solid #ddd', borderRadius:6, marginBottom:8}} />
        <button onClick={() => navigator.clipboard.writeText(link)} style={{width:'100%', padding:'10px', background:'#133e77', color:'#fff', border:'none', borderRadius:6, fontWeight:'bold', cursor:'pointer'}}>
          링크 복사
        </button>
      </div>
      <div style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:8}}>
        <button onClick={() => window.open(`sms:?body=${link}`)} style={{padding:'10px', background:'#25c329', color:'#fff', border:'none', borderRadius:6, fontWeight:'bold', cursor:'pointer'}}>💬 메시지</button>
        <button onClick={() => window.open(`kakaolink://send?text=${link}`)} style={{padding:'10px', background:'#fee500', color:'#333', border:'none', borderRadius:6, fontWeight:'bold', cursor:'pointer'}}>👨‍👩‍👧‍👦 카톡</button>
      </div>
    </div>
  );
}
