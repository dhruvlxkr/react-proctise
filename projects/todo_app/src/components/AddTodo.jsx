import { useState } from "react";
import { FaPlus } from "react-icons/fa";

function AddTodo({ newTodoItems }) {
  const [todoName, SettodoName] = useState();
  const [todoDate, SettodoDate] = useState();

  const handleTodoname = (event) => {
    SettodoName(event.target.value);
  };

  const handleDate = (event) => {
    SettodoDate(event.target.value);
  };

  const handleButtonEvent = () => {
    newTodoItems(todoName, todoDate);
    SettodoName("");
    SettodoDate("");
  };
  return (
    <>
      <div className="col-6 m-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Here"
          onChange={handleTodoname}
          value={todoName || ""}
        />
      </div>

      <div className="col-4 m-2 ">
        <input
          type="date"
          className="form-control "
          value={todoDate || ""}
          onChange={handleDate}
        />
      </div>

      <div className="col-2 mt-2 text-center">
        <button
          onClick={handleButtonEvent}
          type="button"
          className="btn btn-success"
        >
          <FaPlus></FaPlus>
        </button>
      </div>
    </>
  );
}

export default AddTodo;
