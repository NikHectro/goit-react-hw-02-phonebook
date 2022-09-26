import React from 'react';

export default function ContactsList({ contacts, handleDeleteContact }) {
  return (
    <ul>
      {contacts.map(el => (
        <li
          key={el.id}
          style={{
            padding: '10px',
            margin: '0 auto',
            width: '80vw',
            gap: '40px',
          }}
        >
          {el.name}: {el.number}
          <button
            type="button"
            style={{
              padding: '5px',
              marginLeft: '20px',
            }}
            onClick={() => handleDeleteContact(el.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
