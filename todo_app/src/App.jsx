import Todoheader from "./composer/Todoheader";

function App() {
  return (
    <>
      <Todoheader></Todoheader>
      <center className="todo-container">
        <div className="container text-center">
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Todo Here"
              />
            </div>
            <div className="col-4">
              <input type="date" className="form-control" />
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success">
                Add
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-6">Buy Milk</div>
            <div className="col-4">04/10/2023</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>

          <div className="row">
            <div className="col-6">Go to College</div>
            <div className="col-4">04/10/2023</div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
