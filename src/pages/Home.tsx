/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import Tag, { TagProps } from "@/components/common/tag";
import { toast } from 'react-toastify';

import ProfileOverview, { ProfileProps } from "@/components/home/min-profile";
import axios from "axios";
import apisInfo from "@/assets/apis";

const Home: FC = () => {
  const [users, setUsers] = useState<ProfileProps[]>();
  const [tags, setTags] = useState<TagProps[]>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apisInfo.url}/api/users`);
        setUsers(response.data);
      } catch (error: any) {
        toast.error(error.message, { position: toast.POSITION.TOP_CENTER, autoClose: 5000 });
      }
    };

    const fetchTags = async () => {
      try {
        const response = await axios.get(`${apisInfo.url}/api/mostUsedTags`);
        console.log(response.data);
        setTags(response.data);
      } catch (error: any) {
        toast.error(error.message, { position: toast.POSITION.TOP_CENTER, autoClose: 5000 });
      }
    }
  
    fetchUsers();
    fetchTags();
  }, []);
  return (
    <>
      {/* add mostly used tags */}
      <div className="flex items-center justify-center gap-6  mt-8">
        {tags?.map((tag) => {
          return <Tag tag={tag.tag} count={tag.count} key={tag.count}/>;
        })}
      </div>

      {/* Add profiles */}
      <div className="flex flex-wrap justify-center gap-4 mt-12 z-0">
        {
          users?.map((user: ProfileProps) => {
            return <ProfileOverview  user={user} key={user.id} />
          })
        }
      </div>
    </>
  );
};

export default Home;
