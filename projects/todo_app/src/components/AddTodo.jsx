import { useState } from "react";

function AddTodo({newTodoItems}) {


  const [todoName,SettodoName] = useState();
  const [todoDate,SettodoDate] = useState();

  const handleTodoname = (event) => {
    console.log(todoName);
  }
  
  const handleDate = (event) => {
       console.log(todoDate);
       }
  return (
    <>
      <div className="col-6 m-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Here"
          onChange={handleTodoname}
        />
      </div>

      <div className="col-4 m-2 ">
        <input type="date" className="form-control " onChange={handleDate} />
      </div>

      <div className="col-2 mt-2 text-center">
        <button onClick={()=> newTodoItems('a','b')} type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
