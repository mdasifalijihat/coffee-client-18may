import { useLoaderData, Link } from "react-router";
import { ArrowLeft } from "lucide-react";

const CoffeeDetails = () => {
  const { name, chef, supplier, taste, category, details, photoUrl } = useLoaderData();

  return (
    <div className="bg-[#f4f3f0] max-w-5xl mx-auto my-10 p-8 rounded-md shadow-md">
      <Link to="/" className="text-[#374151] flex items-center gap-1 mb-6 hover:underline">
        <ArrowLeft size={18} /> <span className="font-semibold">Back to home</span>
      </Link>

      <div className="flex flex-col md:flex-row items-center gap-10">
        <img
          src={photoUrl}
          alt={name}
          className="w-60 h-72 object-cover rounded-lg shadow-md"
        />

        <div className="space-y-2 text-left">
          <h2 className="text-2xl font-bold mb-4 text-[#6b4f4f]">Niceties</h2>
          <p><span className="font-semibold">Name:</span> {name}</p>
          <p><span className="font-semibold">Chef:</span> {chef}</p>
          <p><span className="font-semibold">Supplier:</span> {supplier}</p>
          <p><span className="font-semibold">Taste:</span> {taste}</p>
          <p><span className="font-semibold">Category:</span> {category}</p>
          <p><span className="font-semibold">Details:</span> {details}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
