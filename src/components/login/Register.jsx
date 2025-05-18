import React, { use } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useNavigate } from "react-router";

const Register = () => {
  const { crateUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;
    console.log("Register Info:", { email, password });

    crateUser(email, password, name, photoUrl)
      .then((result) => {
        console.log(result.user);
        // user profile
        const newUsers = {
          name,
          email,
          photoUrl,
        };
        // save user info data base
        fetch("https://new-coffee-shop-server.vercel.app/newUsers", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUsers),
        })
          .then((result) => {
            console.log(result);
          })
          .then((data) => {
            console.log(data)
          });

        alert("user register successfully");
        navigate(location?.state || "/");
      })
      .then((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#6f4e37] mb-6">
          Create a New Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#6f4e37]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#6f4e37]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Create a password"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#6f4e37]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              placeholder="Link to your profile photo"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#6f4e37]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6f4e37] text-white py-2 rounded hover:bg-[#5c3f2d]"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#6f4e37] underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
