import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import { Link,useParams  } from 'react-router-dom';
import axios from 'axios';

const Profile = () => {
  // State variables to store user data
  const { _id } = useParams();
  const [userData, setUserData] = useState({
    username: '',
    phone: '',
    email: '',
    gender: '',
    profilePic: 'https://dummyimage.com/600x600', // Placeholder image
  });

  // Fetch user data from the API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`https://cook-back-1.onrender.com/api/tasks/userd/${_id}`);
        console.log(response.data);
        
        // Extracting data from the response
        const { username, phone, email, gender, profilePic } = response.data;
        // Updating state with fetched data
        setUserData({ username, phone, email, gender, profilePic });
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array to execute only once when component mounts

  return (
    <div>
      <section className="text-gray-600 body-font">
        <BackButton/>
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-1/4 md:w-1/3 w-2/3 mb-10 object-cover object-center rounded-full"
            alt="hero"
            src={userData.profilePic} // Update profile picture source
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              {userData.username} {/* Display username */}
            </h1>
            <div className='flex flex-row items-center justify-center'> 
              <h4 className="leading-relaxed font-semibold">
                Email : {' '}
              </h4>
              <h4 className="leading-relaxed">
                {userData.email} {/* Display email */}
              </h4>
            </div>

            {/* Display phone */}
            <div className='flex flex-row items-center justify-center'> 
              <h4 className="leading-relaxed font-semibold">
                Phone : {' '}
              </h4>
              <h4 className="leading-relaxed">
                {userData.phone} {/* Display phone */}
              </h4>
            </div>

            <div className="my-5 flex justify-center">
              <Link to="/AddR">  
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Add New
                </button>
              </Link>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                View
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;





// import React from 'react';
// import BackButton from '../components/BackButton';
// import { Link } from 'react-router-dom';

// const Profile = () => {



//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <BackButton/>
//         <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//           <img
//             className="lg:w-1/4 md:w-1/3 w-2/3 mb-10 object-cover object-center rounded-full"
//             alt="hero"
//             src="https://dummyimage.com/600x600"
//           />
//           <div className="text-center lg:w-2/3 w-full">
//             <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//               Siddhartha Mishra
//             </h1>
//             <div className=' flex flex-row items-center justify-center  ' > 
//             <h4 className=" leading-relaxed font-semibold">
//               Email : {' '}
//             </h4>
//             <h4 className=" leading-relaxed ">
//            sample@gmail.com
//             </h4>
//             </div>

//             {/* //phone */}

//             <div className=' flex flex-row items-center justify-center  ' > 
//             <h4 className=" leading-relaxed font-semibold">
//               Phone : {' '}
//             </h4>
//             <h4 className=" leading-relaxed ">
//            4556789900
//             </h4>
//             </div>
 
//             <div className=" my-5 flex justify-center">
//               <Link to="/AddR">  
//               <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                 Add New
//               </button>
//               </Link>
//               <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
//                 View
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Profile;
