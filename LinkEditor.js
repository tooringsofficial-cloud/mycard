import React from 'react';

const linkTypes = ['유튜브', '인스타그램', '카카오톡', '링크드인', '네이버 카페', '사이트', '포트폴리오'];

export default function LinkEditor({ links, setLinks }) {
  const addLink = () => setLinks([...links, {type:'', label:'', url:'', on:true}]);
  const update = (i, field, val) => {
    const newLinks = links.map((l, idx) => idx === i ? {...l, [field]: val} : l);
    setLinks(newLinks);
  };
  const remove = (i) => setLinks(links.filter((_, idx) => idx !== i));

  return (
    <div>
      <h2>콘텐츠/링크/SNS 편집</h2>
      {links.map((l, i) => (
        <div key={i} style={{marginBottom: '10px'}}>
          <select value={l.type} onChange={e => update(i, 'type', e.target.value)}>
            <option value="">서비스 선택</option>
            {linkTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <input type="text" placeholder="표시 텍스트" value={l.label} onChange={e => update(i, 'label', e.target.value)} style={{marginLeft: '5px'}} />
          <input type="text" placeholder="링크" value={l.url} onChange={e => update(i, 'url', e.target.value)} style={{marginLeft: '5px'}} />
          <label style={{marginLeft: '10px'}}>
            <input type="checkbox" checked={l.on} onChange={e => update(i, 'on', e.target.checked)} />표시
          </label>
          <button onClick={() => remove(i)} style={{marginLeft: '10px'}}>삭제</button>
        </div>
      ))}
      <button onClick={addLink}>콘텐츠 추가</button>
    </div>
  );
}
