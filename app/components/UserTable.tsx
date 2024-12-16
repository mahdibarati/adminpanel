import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUsers, User } from "../redux/userSlice";
import api from "../services/api";

const UserTable: React.FC<{ users?: User[] }> = ({ users }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get("/users");
        dispatch(setUsers(response.data));
      } catch (error) {
        console.error(error);
      }
    };

    fetchUsers();
  }, [dispatch]);

  return (
    <div>
      <div className="border-2 border-solid rounded">
        <h1 className="bg-gray-800 text-white rounded-t pl-1">Users:</h1>
        <div className="p-2">
          {users &&
            users.map((user: User) => (
              <li key={user.id}>
                {user.name} - {user.age} years old
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UserTable;
