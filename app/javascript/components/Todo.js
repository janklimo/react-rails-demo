import React from "react";
import { useFetch } from "./utils";

function Todos() {
  const { loading, data } = useFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map(task => (
            <li key={task.id}>{task.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todos;
