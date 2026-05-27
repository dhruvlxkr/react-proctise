import TodoHeader from "./composer/TodoHeader";
import AddTodo from "./composer/AddTodo";
import TodoItem1 from "./composer/TodoItem1";
import TodoItem2 from "./composer/TodoItem2";
import TodoItem from "./composer/TodoItem";


function App() {
  return (
    <>
      <center className="todo-container">
        <div className="container">
          <TodoHeader />
          <div className="d-flex">
            <AddTodo />
          </div>

          <div class="items">
            <TodoItem />
            <TodoItem1 />
            <TodoItem2 />
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
