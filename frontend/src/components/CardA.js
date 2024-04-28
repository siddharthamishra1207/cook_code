// Card.js

import React from 'react';
import { Link } from 'react-router-dom';

const CardA = ({ title, description , _id}) => {

  // You can generate random food photos here
  const randomFoodPhotoUrl = "https://via.placeholder.com/150";
        
  return (
    <div className='p-5 m-5 border-2 rounded-3xl'>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-2/5 md:order-1 m-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
          <img
            src={randomFoodPhotoUrl}
            alt="Food"
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <div className="md:w-3/5 md:order-2 md:pl-6">
          <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {title}
          </h4>
          <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            {description}
          </p>
          <Link to={`/try/${_id}`} className="inline-block">
            <button
              className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                ></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardA;
