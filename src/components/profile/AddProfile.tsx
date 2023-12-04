import { FC, useState } from 'react';

interface AddProfileModalProps {
  closeModal: () => void;
  addProfile: (profile: {
    avatar: string;
    name: string;
    headline: string;
    tags: string[];
    id: string;
  }) => void;
}

const AddProfileModal: FC<AddProfileModalProps> = ({ closeModal, addProfile }) => {
  const [avatar, setAvatar] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [headline, setHeadline] = useState<string>('');
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = () => {

    // Create a new profile object
    const newProfile = {
      avatar,
      name,
      headline,
      tags,
      id: `sample-id-${Math.floor(Math.random() * 1000)}`, // Generate a random id
    };

    // Add the new profile
    addProfile(newProfile);

    // Close the modal
    closeModal();
  };

  return (
    <div className="fixed z-10 top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 backdrop-blur-md">
      <div className="bg-white p-8 rounded-md w-96">
        <h2 className="text-2xl font-bold mb-4">Add Profile</h2>
        <form>
          {/* Avatar input */}
          <div className="mb-4">
            <label htmlFor="avatar" className="block text-sm font-medium text-gray-600">
              Avatar URL
            </label>
            <input
              type="text"
              id="avatar"
              className="mt-1 p-2 w-full border rounded-md"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
          </div>

          {/* Name input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 p-2 w-full border rounded-md"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Headline input */}
          <div className="mb-4">
            <label htmlFor="headline" className="block text-sm font-medium text-gray-600">
              Headline
            </label>
            <input
              type="text"
              id="headline"
              className="mt-1 p-2 w-full border rounded-md"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </div>

          {/* Tags input */}
          <div className="mb-4">
            <label htmlFor="tags" className="block text-sm font-medium text-gray-600">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              id="tags"
              className="mt-1 p-2 w-full border rounded-md"
              value={tags.join(',')}
              onChange={(e) => setTags(e.target.value.split(','))}
            />
          </div>

          {/* Submit button */}
          <button
            type="button"
            className="px-4 py-2 bg-green-500 rounded-md hover:bg-green-600 focus:outline-none"
            onClick={handleSubmit}
          >
            Add Profile
          </button>
        </form>

        {/* Close button */}
        <button
          className="mt-4 px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 focus:outline-none"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProfileModal;
