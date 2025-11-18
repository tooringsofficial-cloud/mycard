import React from 'react';

const contactTypes = ['유선전화', '휴대전화', '팩스', '이메일', '주소', '홈페이지'];

export default function ContactEditor({ contacts, setContacts }) {
  const addContact = () => setContacts([...contacts, {type:'', value:'', on:true}]);
  const update = (i, field, val) => {
    const newContacts = contacts.map((c, idx) => idx === i ? {...c, [field]: val} : c);
    setContacts(newContacts);
  };
  const remove = (i) => setContacts(contacts.filter((_, idx) => idx !== i));

  return (
    <div>
      <h2>연락처/주소 편집</h2>
      {contacts.map((c, i) => (
        <div key={i} style={{marginBottom: '10px'}}>
          <select value={c.type} onChange={e => update(i, 'type', e.target.value)}>
            <option value="">종류 선택</option>
            {contactTypes.map(type => <option key={type} value={type}>{type}</option>)}
          </select>
          <input type="text" placeholder="번호 또는 주소" value={c.value} onChange={e => update(i, 'value', e.target.value)} style={{marginLeft: '5px'}} />
          <label style={{marginLeft: '10px'}}>
            <input type="checkbox" checked={c.on} onChange={e => update(i, 'on', e.target.checked)} />표시
          </label>
          <button onClick={() => remove(i)} style={{marginLeft: '10px'}}>삭제</button>
        </div>
      ))}
      <button onClick={addContact}>연락처/주소 추가</button>
    </div>
  );
}
