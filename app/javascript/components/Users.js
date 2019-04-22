import React from "react";
import { useFetch } from "./utils";

function Users() {
  const { loading, data } = useFetch("https://jsonplaceholder.typicode.com/users");

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Users;
