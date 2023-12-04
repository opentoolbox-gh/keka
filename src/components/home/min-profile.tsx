import { FC} from "react";
import Tag from "../common/tag";

export interface ProfileProps {
  id: string;
  avatar: string;
  name: string;
  headline: string;
  tags: string[];
}

type UserType = {
  user: ProfileProps;
};

const ProfileOverview: FC<UserType> = (info) => {
  return (
    <>
      <div
        key={info.user.id}
        className="flex flex-col gap-4 items-center z-0 max-w-md w-full p-4 border rounded-md shadow-md transition-transform transform hover:scale-105"
      >
        <img
          src={info.user.avatar}
          alt={`${info.user.name}'s profile picture`}
          className="rounded-full h-24 w-24 mr-4"
        />
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">{info.user.name}</span>
          <p className="text-gray-600">{info.user.headline}</p>
          <div className="flex flex-wrap mt-2 gap-4">
            {info.user.tags.map((tag, index) => (
              <Tag key={index} name={tag} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileOverview;