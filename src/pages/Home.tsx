import { FC } from "react";
import Tag from "@/components/common/tag";
import tags from "@/assets/dummy/tags";
import users from "@/assets/dummy/users";
import ProfileOverview, { ProfileProps } from "@/components/home/min-profile";

const Home: FC = () => {
  return (
    <>
      {/* add mostly used tags */}
      <div className="flex items-center justify-center gap-6  mt-8">
        {tags.map((tag) => {
          return <Tag name={tag.name} number={tag.number} key={tag.number}/>;
        })}
      </div>

      {/* Add profiles */}
      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {
          users.map((user: ProfileProps) => {
            return <ProfileOverview  user={user} key={user.id} />
          })
        }
      </div>
    </>
  );
};

export default Home;
