import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

function AddTodo({ newTodoItems }) {
  // const [todoName, SettodoName] = useState();
  // const [todoDate, SettodoDate] = useState();

  const todoNameUpdate = useRef();
  const todoDateUpdate = useRef();

  // const handleTodoname = (event) => {
  //   SettodoName(event.target.value);
  // };

  // const handleDate = (event) => {
  //   SettodoDate(event.target.value);
  // };

  const handleButtonEvent = (event) => {
    event.preventDefault();
    const todoName = todoNameUpdate.current.value;
    const todoDate = todoDateUpdate.current.value;
    newTodoItems(todoName, todoDate);
    todoNameUpdate.current.value = "";
    todoDateUpdate.current.value = "";
    // SettodoName("");
    // SettodoDate("");
  };
  return (
    <>
      <form action="" onSubmit={handleButtonEvent}>
        <div className="col-12 d-flex">
          <div className="col-6 m-2">
            <input
              type="text"
              ref={todoNameUpdate}
              className="form-control"
              placeholder="Enter Todo Here"
              // onChange={handleTodoname}
              // value={todoName || ""}
            />
          </div>

          <div className="col-4 m-2 ">
            <input
              type="date"
              ref={todoDateUpdate}
              className="form-control "
              // value={todoDate || ""}
              // onChange={handleDate}
            />
          </div>

          <div className="col-2 mt-2 text-center">
            <button type="submit" className="btn btn-success">
              <FaPlus></FaPlus>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
