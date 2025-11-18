import React from 'react';

export default function StyleCustomizer({ design, setDesign }) {
  const [advanced, setAdvanced] = React.useState({
    borderRadius: 16,
    shadowSize: 8,
    fontSize: 16,
    padding: 24
  });

  return (
    <div>
      <h2>고급 스타일 커스터마이징</h2>
      <div>
        <label>모서리 둥근정도 (0-50)</label>
        <input type="range" min="0" max="50" value={advanced.borderRadius} 
          onChange={e => setAdvanced({...advanced, borderRadius: parseInt(e.target.value)})} />
        <span>{advanced.borderRadius}px</span>
      </div>
      <div>
        <label>그림자 크기 (0-20)</label>
        <input type="range" min="0" max="20" value={advanced.shadowSize} 
          onChange={e => setAdvanced({...advanced, shadowSize: parseInt(e.target.value)})} />
        <span>{advanced.shadowSize}px</span>
      </div>
      <div>
        <label>글자 크기 (12-24)</label>
        <input type="range" min="12" max="24" value={advanced.fontSize} 
          onChange={e => setAdvanced({...advanced, fontSize: parseInt(e.target.value)})} />
        <span>{advanced.fontSize}px</span>
      </div>
      <div>
        <label>여백 (16-40)</label>
        <input type="range" min="16" max="40" value={advanced.padding} 
          onChange={e => setAdvanced({...advanced, padding: parseInt(e.target.value)})} />
        <span>{advanced.padding}px</span>
      </div>
      <button onClick={() => {
        setDesign({...design, advanced});
      }} style={{marginTop:16, padding:'8px 16px', background:'#133e77', color:'#fff', border:'none', borderRadius:5, cursor:'pointer'}}>
        적용
      </button>
    </div>
  );
}
