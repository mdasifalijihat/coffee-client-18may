import React from 'react';

const HomeCard = ({ coffee }) => {
  const { name, chef, supplier, taste, price, photoUrl } = coffee;

  return (
    <div className="bg-[#f4f3f0] rounded-lg shadow-md p-4">
      <img
        src={photoUrl}
        alt={name}
        className="w-full h-60 object-cover rounded-md mb-4"
      />
      <div className="text-left space-y-1">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p><strong>Chef:</strong> {chef}</p>
        <p><strong>Supplier:</strong> {supplier}</p>
        <p><strong>Taste:</strong> {taste}</p>
        <p><strong>Price:</strong> {price} Taka</p>
      </div>
    </div>
  );
};

export default HomeCard;
