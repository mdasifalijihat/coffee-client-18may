import { Pencil, Trash2 } from "lucide-react";

const UserCard = ({ user, index, onEdit, onDelete, userLength }) => {
  const { name, email, photoUrl } = user;

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg mb-4">
      {/* Left: SL No, Image, Name, Email */}
      <div className="flex items-center gap-4">
        <div className="text-center">
          {/* Total Users */}
          <p className="text-xs text-gray-500">User No. {userLength}</p>
          {/* Serial Number */}
          <p className="text-base font-bold text-gray-700">{index + 1}</p>
        </div>
        <img
          src={photoUrl}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border"
        />
        <div>
          <p className="text-lg font-semibold text-gray-800">Name: {name}</p>
          <p className="text-sm text-gray-600">Email: {email}</p>
        </div>
      </div>

      {/* Right: Edit and Delete Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(user)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded flex items-center gap-1"
        >
          <Pencil size={16} />
          Edit
        </button>
        <button
          onClick={() => onDelete(user)}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded flex items-center gap-1"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
