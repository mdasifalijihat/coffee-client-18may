import React from "react";
import { useLoaderData } from "react-router"; // Use react-router-dom instead of react-router

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, chef, supplier, taste, price, photoUrl, details } = coffee;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCoffee = {
      name: form.name.value,
      chef: form.chef.value,
      supplier: form.supplier.value,
      taste: form.taste.value,
      price: form.price.value,
      details: form.details.value,
      photoUrl: form.photoUrl.value,
    };
    console.log("Updated Coffee:", updatedCoffee);

    fetch(`https://new-coffee-shop-server.vercel.app/newCoffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log(data);
          alert("Update successfully");
        }
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#f4f3f0] rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#6f4e37]">
        Update Coffee Details
      </h2>
      <form onSubmit={handleUpdateCoffee} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Chef</label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Price (Taka)</label>
            <input
              type="number"
              name="price"
              defaultValue={price}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium"> Details </label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              defaultValue={photoUrl}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#6f4e37] text-white px-6 py-2 rounded hover:bg-[#5c3f2d]"
          >
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
