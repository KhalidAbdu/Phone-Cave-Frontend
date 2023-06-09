import React from 'react';

function PhonesList({ phones, setSpecificPhone }) {
  return (
    <div>
      <h2>Phone List</h2>
      <ul>
        {phones.map((phone) => (
          <li key={phone.id} onClick={() => setSpecificPhone(phone)}>
            {phone.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PhonesList;
