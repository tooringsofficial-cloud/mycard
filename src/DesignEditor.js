import React from 'react';

export default function DesignEditor({ design, setDesign }) {
  return (
    <div>
      <h2>디자인 편집</h2>
      <div>
        <label>테마 색상</label>
        <input type="color" value={design.themeColor} onChange={e => setDesign({...design, themeColor: e.target.value})} />
      </div>
      <div>
        <label>글자 색상</label>
        <input type="color" value={design.textColor} onChange={e => setDesign({...design, textColor: e.target.value})} />
      </div>
      <div>
        <label>레이아웃</label>
        <select value={design.layout} onChange={e => setDesign({...design, layout: e.target.value})}>
          <option value="기본형">기본형</option>
          <option value="이미지강조">이미지강조</option>
        </select>
      </div>
      <div>
        <label>프로필 이미지</label>
        <input type="file" onChange={e => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = ev => setDesign({...design, profileImage: ev.target.result});
          reader.readAsDataURL(file);
        }} />
        {design.profileImage && <img src={design.profileImage} width={80} style={{borderRadius:16}} alt="이미지" />}
      </div>
    </div>
  );
}
