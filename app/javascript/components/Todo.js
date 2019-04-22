import React from "react";
import { useFetch } from "./utils";

function Todos() {
  const { loading, data } = useFetch("https://jsonplaceholder.typicode.com/todos/1");

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          <li>{data.id}</li>
          <li>{data.title}</li>
        </ul>
      )}
    </div>
  );
}

export default Todos;
