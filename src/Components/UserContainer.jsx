import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../Redux/User/userAction";

const UserContainer = () => {
  const userData = useSelector((state) => state.user);
  const { loading, data, error } = userData;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading ... </p>
      ) : error ? (
        <p>{error.message} </p>
      ) : (
        userData &&
        data && (
          <div>
            <h2>User List</h2>
            {data.map((user) => (
              <p key={user.id}>{user.name}</p>
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default UserContainer;
