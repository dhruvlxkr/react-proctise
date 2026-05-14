function AddTodo() {
  return (
    <>
      <div className="col-6 m-2">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Todo Here"
        />
      </div>

      <div className="col-4 m-2 ">
        <input type="date" className="form-control " />
      </div>

      <div className="col-2 mt-2 text-center">
        <button type="button" className="btn btn-success">
          Add
        </button>
      </div>
    </>
  );
}

export default AddTodo;
