import React, { Fragment, useState } from "react";

const EditTodo = ({ todo, renew }) => {
  const [description, setDescription] = useState("");

  const updateDescription = async (e) => {
    e.preventDefault();
    if (!description) return;

    const body = { description };
    try {
      const res = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
      renew();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        data-toggle="modal"
        data-target={`#ìd${todo.todo_id}`}
      >
        Edit
      </button>

      <div className="modal" id={`ìd${todo.todo_id}`}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                onClick={() => setDescription("")}
                type="button"
                className="close"
                data-dismiss="modal"
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder={todo.description}
                className="form-control"
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={updateDescription}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setDescription("")}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditTodo;
