/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import AddProfileModal from '../profile/AddProfile';
import axios from 'axios';
import apisInfo from '@/assets/apis';
import { toast } from 'react-toastify';

const Nav: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addProfile = async (profile: {
    avatar: string;
    name: string;
    headline: string;
    tags: string[];
    id: string;
  }) => {
    try {
      const response = await axios.post(`${apisInfo.url}/api/users`, profile);
      if (response.status == 201) {
        toast.info(`Profile added successfuly`, { position: toast.POSITION.TOP_CENTER, autoClose: 5000 });
        closeModal();
      }
      
    } catch (error: any) {
      toast.error(error.message, { position: toast.POSITION.TOP_CENTER, autoClose: 5000 });
    }
  };

  return (
    <div>
      <nav className="w-full flex items-center justify-between bg-gray-800 text-white px-12 py-4 sticky shadow-lg">
        <h1 className="text-2xl font-bold cursor-pointer">
          <span className="text-blue-500 font-extrabold">The</span>Profile
        </h1>
        <div className="flex items-center">
          <input
            className="px-3 py-2 mr-2 bg-gray-700 rounded-md focus:outline-none text-white placeholder-gray-400"
            type="search"
            placeholder="Search ..."
          />
          <button
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
            onClick={openModal}
          >
            Add Profile
          </button>
        </div>
      </nav>
      {isModalOpen && <AddProfileModal closeModal={closeModal} addProfile={addProfile} />}
    </div>
  );
};

export default Nav;
