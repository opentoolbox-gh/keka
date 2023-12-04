import { FC } from 'react';

export interface TagProps {
  name: string;
  number ?: number;
}

const Tag: FC<TagProps> = ({name, number}) => {
  return (
    <div className="flex items-center bg-blue-500 text-white rounded-md p-2 hover:cursor-pointer">
      <span className=' text-lg font-bold'>{name}</span>
      <div className="ml-2 bg-white text-blue-500 rounded-full p-1 font-semibold">
        {number}
      </div>
    </div>
  );
};

export default Tag;