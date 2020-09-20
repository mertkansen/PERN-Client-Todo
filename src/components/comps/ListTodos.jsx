import React, { Fragment, useEffect, useState } from "react";

import { EditTodo } from "../";

const ListTodos = () => {
  const [data, setData] = useState([]);
  const deleteTodo = async (id) => {
    try {
      await fetch(`http://localhost:5000/todos/${id}`, {
        method: "DELETE",
      });

      getTodos();
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:5000/todos");

      let jsonData = await response.json();

      setData(jsonData.reverse());
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data?.map(({ todo_id, description }) => (
            <tr key={todo_id}>
              <td>{description}</td>
              <td>
                <EditTodo todo={{ todo_id, description }} renew={getTodos} />
              </td>
              <td>
                <button
                  onClick={() => deleteTodo(todo_id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
