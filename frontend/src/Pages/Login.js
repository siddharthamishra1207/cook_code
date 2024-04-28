import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import BackButton from '../components/BackButton';
import { useNavigate ,Link} from 'react-router-dom';
import axios from 'axios';

export default function Login() {
 
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Axios interceptor to handle setting cookies in the browser
  axios.interceptors.response.use(response => {
    if (response.headers['set-cookie']) {
      const cookies = response.headers['set-cookie'];
      cookies.forEach(cookie => {
        document.cookie = cookie;
      });
    }
    return response;
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://cook-back-1.onrender.com/api/auth/login', formData);
      if (response.data.success) {
        const _id= response.data.userId;
        navigate(`/Profile/${_id}`);
      } else {
        alert('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred during login. Please try again later.');
    }
  };

  return (
    <section>
      <BackButton />
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">CookCLick</div>
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            LogIn in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Don&apos;t have an account?{' '}
            <Link
              to="/SignUp"
              title=""
              className="font-semibold text-black transition-all duration-200 hover:underline"
            >
              Create a free account
            </Link>
          </p>
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="username" className="text-base font-medium text-gray-900">
                  {' '}
                  Username{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                  {' '}
                  Password{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                  ></input>
                </div>
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
  );
}
