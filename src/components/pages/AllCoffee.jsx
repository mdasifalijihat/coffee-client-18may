import { useLoaderData } from "react-router";
import CoffeeCard from "./CoffeeCard";
import { useState } from "react";

const AllCoffee = () => {
  const allCoffeesData = useLoaderData();
  const [allCoffees, setAllCoffees] = useState(allCoffeesData)

  // Group coffees by supplier
  const groupedBySupplier = allCoffees.reduce((acc, coffee) => {
    const supplier = coffee.supplier || "Unknown Supplier";
    if (!acc[supplier]) {
      acc[supplier] = [];
    }
    acc[supplier].push(coffee);
    return acc;
  }, {});

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10">All Coffee Sections</h2>

      {Object.entries(groupedBySupplier).map(([supplier, coffees]) => (
        <div key={supplier} className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-[#d2b48c] border-b pb-2">
            Supplier: {supplier}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffees={coffee} allCoffees={allCoffees} setAllCoffees={setAllCoffees} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCoffee;
