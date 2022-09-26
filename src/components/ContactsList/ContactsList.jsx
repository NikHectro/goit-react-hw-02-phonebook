import React from 'react';

export default function ContactsList({ contacts, handleDeleteContact }) {
  return (
    <ul>
      {contacts.map(el => (
        <li key={el.id}>
          {el.name}: {el.number}
          <button type="button" onClick={() => handleDeleteContact(el.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
