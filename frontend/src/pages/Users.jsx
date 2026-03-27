import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/usersSlice";
import { Card } from "../components/Card";
import { Loading } from "../components/Loading";

export default function Users() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.users);

  useEffect(() => { dispatch(fetchUsers()); }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data.map(user => (
        <Card key={user.id} title={user.name}>
          <p>Email: {user.email}</p>
        </Card>
      ))}
    </div>
  );
}