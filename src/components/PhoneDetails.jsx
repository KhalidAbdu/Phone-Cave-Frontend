import React from 'react';

function PhoneDetails({ specificPhone }) {
  return (
    <div>
      <h2>Phone Details</h2>
      <p>Name: {specificPhone.name}</p>
      <p>Manufacturer: {specificPhone.manufacturer}</p>
      <p>Price: ${specificPhone.price}</p>
    </div>
  );
}

export default PhoneDetails;
