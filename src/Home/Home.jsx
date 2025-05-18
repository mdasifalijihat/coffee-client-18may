import React from "react";

import HomeCard from "./HomeCard";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const coffees = useLoaderData();
  const previewCoffees = coffees.slice(0, 3);

  return (
    <div className="max-w-6xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Featured Coffees: {previewCoffees.length}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {previewCoffees.map((coffee) => (
          <HomeCard key={coffee._id} coffee={coffee} />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/allCoffee">
          <button className="bg-[#d2b48c] hover:bg-[#c19a6b] text-white px-6 py-2 rounded shadow">
            See All Coffees
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
