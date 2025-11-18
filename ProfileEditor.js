import React, { useRef } from 'react';

export default function ProfileEditor({ profile, setProfile }) {
  const fileRef = useRef();
  return (
    <div>
      <h2>프로필 편집</h2>
      <div>
        <label>이미지</label><br/>
        <input ref={fileRef} type="file" accept="image/*" onChange={e => {
          const file = e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = ev => setProfile({...profile, image: ev.target.result});
          reader.readAsDataURL(file);
        }} />
        {profile.image && <img src={profile.image} width={80} alt="프사" style={{borderRadius:16}} />}
      </div>
      <div>
        <label>이름</label><br/>
        <input value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
      </div>
      <div>
        <label>직책</label><br/>
        <input value={profile.title} onChange={e => setProfile({...profile, title: e.target.value})} />
      </div>
      <div>
        <label>회사</label><br/>
        <input value={profile.company} onChange={e => setProfile({...profile, company: e.target.value})} />
      </div>
      <div>
        <label>슬로건</label><br/>
        <input value={profile.slogan} onChange={e => setProfile({...profile, slogan: e.target.value})} />
      </div>
      <div>
        <label>키워드</label><br/>
        {profile.keywords.map((kw,i) => (
          <span key={i}>
            <input value={kw} onChange={e => {
              const kws = [...profile.keywords];
              kws[i] = e.target.value;
              setProfile({...profile, keywords:kws});
            }} />
            <button onClick={() => {
              const kws = profile.keywords.filter((_,idx) => idx !== i);
              setProfile({...profile, keywords:kws});
            }}>삭제</button>
          </span>
        ))}
        <button onClick={() => setProfile({...profile, keywords:[...profile.keywords,'']})}>추가</button>
      </div>
    </div>
  );
}
