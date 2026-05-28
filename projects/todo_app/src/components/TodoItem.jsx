function TodoItem({todoname,tododate}) {
  return (
    <div className="row">
      <div className="col-6 mt-3">{todoname}</div>
      <div className="col-4 mt-3">{tododate}</div>
      <div className="col-2 mt-3 text-end">
        <button type="button" className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
