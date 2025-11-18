import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function Share() {
  const userId = 'toorings';
  const link = `${window.location.origin}/card/${userId}`;

  return (
    <div style={{maxWidth: 400, margin:'0 auto', textAlign:'center', padding: 30}}>
      <h2>공유</h2>
      <QRCodeSVG value={link} size={220} />
      <div style={{margin:'20px 0'}}>
        <input readOnly value={link} style={{
          width:'80%', fontSize:16, padding:8, border:'1px solid #ddd', borderRadius:5
        }}/>
        <button style={{
          marginLeft:10, padding:'8px 14px', fontSize:14, borderRadius:5, border:'none',
          background:'#444', color:'#fff', cursor:'pointer'
        }} onClick={()=>navigator.clipboard.writeText(link)}>복사</button>
      </div>
      <div style={{display:'flex', justifyContent:'center', gap:12, flexWrap:'wrap'}}>
        <button style={btnC} onClick={()=>window.open(`sms:?body=${link}`)}>메시지</button>
        <button style={btnC} onClick={()=>window.open(`kakaolink://send?text=${link}`)}>카카오톡</button>
        <button style={btnC} onClick={()=>window.open(`mailto:?body=${link}`)}>이메일</button>
        <button style={btnC} onClick={()=>window.open(link)}>공유</button>
      </div>
    </div>
  );
}

const btnC = {
  padding:'12px 18px', background:'#f9f9fa', border:'1px solid #eee',
  borderRadius:5, fontSize:15, cursor: 'pointer'
};
