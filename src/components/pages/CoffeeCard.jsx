import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react"; // Optional: use lucide-react for icons
import { Link } from "react-router";

const CoffeeCard = ({ coffees,allCoffees, setAllCoffees }) => {
  const { _id, name, chef, price, photoUrl } = coffees;

  const handelDeleted = (_id) => {
    console.log(_id);
    fetch(`https://new-coffee-shop-server.vercel.app/newCoffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          console.log(data);
          alert('SuccessFully Deleted');
          const remainingCoffees = allCoffees.filter( cof => cof._id !== _id);
          setAllCoffees(remainingCoffees);
        }
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#f4f3f0] p-6 rounded-xl shadow-md">
      <img
        src={photoUrl}
        alt={name}
        className="w-32 h-40 object-cover rounded-lg"
      />

      <div className="flex-1 space-y-2 text-left">
        <p>
          <span className="font-semibold">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold">Chef:</span> {chef}
        </p>
        <p>
          <span className="font-semibold">Price:</span> {price} Taka
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <Link to={`/coffee/${_id}`}>
          <button className="bg-[#d2b48c] hover:bg-[#c19a6b] text-white p-2 rounded">
            <Eye size={18} />
          </button>
        </Link>
       <Link to={`/updatedCoffee/${_id}`}>
        <button className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded">
          <Pencil size={18} />
        </button>
       </Link>

        <button
          onClick={() => handelDeleted(_id)}
          className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
