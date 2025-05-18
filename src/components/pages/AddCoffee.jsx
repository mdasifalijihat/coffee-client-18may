import React from "react";

const AddCoffee = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const chef = e.target.chef.value;
    const supplier = e.target.supplier.value;
    const taste = e.target.taste.value;
    const price = e.target.price.value;
    const details = e.target.details.value;
    const photoUrl = e.target.photoUrl.value;

    const allField = { name, chef, supplier, taste, price, details, photoUrl };
    console.log(allField);

    // backend send data
    fetch("https://new-coffee-shop-server.vercel.app/newCoffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allField),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log(data);
          alert('successfully add coffee')
        }
      });
  };

  return (
    <div className="bg-[#f4f3f0] p-10 rounded-md shadow-md max-w-4xl mx-auto my-10">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Add New Coffee
      </h2>
      <p className="text-center text-gray-600 mb-10">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      <form onSubmit={handleOnSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter coffee name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Chef
            </label>
            <input
              type="text"
              name="chef"
              placeholder="Enter coffee chef"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Supplier
            </label>
            <input
              type="text"
              name="supplier"
              placeholder="Enter coffee supplier"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Taste
            </label>
            <input
              type="text"
              name="taste"
              placeholder="Enter coffee taste"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter Price"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Details
            </label>
            <input
              type="text"
              name="details"
              placeholder="Enter coffee details"
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-opacity-50"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Photo
          </label>
          <input
            type="text"
            name="photoUrl"
            placeholder="Enter photo URL"
            className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-2 shadow-sm focus:ring focus:ring-opacity-50"
          />
        </div>
        <button
          type="submit"
          className="block w-full bg-[#d2b48c] hover:bg-[#c19a6b] text-white font-semibold py-2 px-4 rounded-md transition duration-300"
        >
          Add Coffee
        </button>
      </form>
    </div>
  );
};

export default AddCoffee;
