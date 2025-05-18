import React, { use } from 'react';
import { AuthContext } from '../../AuthContext/AuthContext';
import { useNavigate } from 'react-router';

const Login = () => {

    const { signInUser} = use(AuthContext);
    const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Login Info:", { email, password });

    signInUser(email, password).then(result => {
        console.log(result.user)
        alert('user login successfully')
        navigate( location?.state || '/')
    }).catch((error) => {
        console.log(error)
        alert('user not define ')
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#6f4e37] mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#6f4e37]"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-[#6f4e37]"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#6f4e37] text-white py-2 rounded hover:bg-[#5c3f2d]"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="/register" className="text-[#6f4e37] underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
