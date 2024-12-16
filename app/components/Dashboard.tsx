import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setUsers } from "../redux/userSlice";
import UserTable from "./UserTable";
import api from "../services/api";

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.users.users);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await api.get("/users");
      console.log({ response });
      dispatch(setUsers(response.data));
    };
    fetchUsers();
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <UserTable users={users} />
    </div>
  );
};

export default Dashboard;
