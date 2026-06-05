import { MdDelete } from "react-icons/md";
function TodoItem({ todoname, tododate, onClickDelete }) {
  return (
    <div className="row">
      <div className="col-6 mt-3">{todoname}</div>
      <div className="col-4 mt-3">{tododate}</div>
      <div className="col-2 mt-3 text-end">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onClickDelete(todoname)}
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
