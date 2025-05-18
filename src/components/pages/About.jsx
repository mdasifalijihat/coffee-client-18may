import React from 'react';

const About = () => {
  return (
    <div className="bg-[#f4f3f0] py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#6f4e37] mb-4">About Our Coffee Shop</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Welcome to <span className="font-semibold">Coffee Corner</span> – your cozy corner of warmth, flavor, and passion.
          We serve freshly brewed coffee sourced from the finest beans around the world. Whether you're a casual coffee lover or a devoted enthusiast, we have something just for you.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
          <div>
            <h3 className="text-2xl font-semibold text-[#6f4e37] mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To create a relaxing and inspiring environment where coffee meets community.
              We focus on sustainability, ethical sourcing, and giving back to our coffee farming partners.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#6f4e37] mb-2">What We Offer</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Artisan Coffee & Signature Blends</li>
              <li>Delicious Pastries & Snacks</li>
              <li>Eco-Friendly Packaging</li>
              <li>Free Wi-Fi & Comfortable Seating</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <img
            src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80"
            alt="Coffee Shop"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
