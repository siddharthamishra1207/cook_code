import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    phone: '',
    email: '',
    gender: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cook-back-1.onrender.com/api/auth/signup', formData);
      const data = response.data;
      if (data.success) {
        // Signup successful, navigate to login page
        // window.location.href = '/Login'; // Assuming you have a route for Login
        navigate('/Login');
      } else {
        // Signup failed, show alert with error message
        alert('Sign up failed: ' + data.message);
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      alert('An error occurred during sign up. Please try again.');
    }
  };

  return (
    <div>
      <BackButton />
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">CookClick</div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600 ">
              Don't have an account?{' '}
              <a
                href="#"
                title=""
                className="font-semibold text-black transition-all duration-200 hover:underline"
              >
                Create a free account
              </a>
            </p>
            <form onSubmit={handleSubmit} className="mt-8">
  <div className="space-y-5">
    <div>
      <label htmlFor="username" className="text-base font-medium text-gray-900">
        Username
      </label>
      <div className="mt-2">
        <input
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Username"
          required
        />
      </div>
    </div>
    <div>
      <label htmlFor="password" className="text-base font-medium text-gray-900">
        Password
      </label>
      <div className="mt-2">
        <input
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="password"
          placeholder="Password"
          required
        />
      </div>
    </div>
    <div>
      <label htmlFor="phone" className="text-base font-medium text-gray-900">
        Phone
      </label>
      <div className="mt-2">
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text"
          placeholder="Phone"
          required
        />
      </div>
    </div>
    <div>
      <label htmlFor="email" className="text-base font-medium text-gray-900">
        Email
      </label>
      <div className="mt-2">
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="email"
          placeholder="Email"
          required
        />
      </div>
    </div>
    <div>
      <label htmlFor="gender" className="text-base font-medium text-gray-900">
        Gender
      </label>
      <div className="mt-2">
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
    <div>
      
     
    </div>
    <div>
      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
      >
        Get started <ArrowRight className="ml-2" size={16} />
      </button>
    </div>
  </div>
</form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
