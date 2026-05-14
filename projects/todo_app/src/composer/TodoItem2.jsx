let todoname = "Go to College";
let tododate = "04/10/2024";
function TodoItem2() {
  return (
    <div className="row">
      <div className="col-6 mt-3">{todoname}</div>
      <div className="col-4 mt-3">{tododate}</div>
      <div className="col-2 text-end">
        <button type="button" className="btn btn-danger mt-3">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem2;
