import { FC, MouseEvent } from 'react';

export interface TagProps {
  tag: string;
  count?: number;
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

const Tag: FC<TagProps> = ({ tag, count, onClick }) => {
  return (
    <div
      className="flex items-center bg-blue-500 text-white rounded-md p-2 hover:cursor-pointer"
      onClick={onClick}
    >
      <span className='text-lg font-bold'>{tag}</span>
      <div className="ml-2 bg-white text-blue-500 rounded-full p-1 font-semibold">
        {count}
      </div>
    </div>
  );
};

export default Tag;
