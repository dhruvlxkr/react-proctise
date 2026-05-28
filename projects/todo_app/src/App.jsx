import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";



function App() {
  const todoItems = [{
     "name": "Bilk milk",
     "date" : "25/05/2026"
  },
  {
     "name": "sale invoice",
     "date" : "28/05/2026"
  },
  ,
  {
     "name": "Like This Video",
     "date" : "28/05/2026"
  },
{
     "name": "Suscribe Channel",
     "date" : "Now"
  }];
  return (
    <>
      <center className="todo-container">
        <div className="container">
          <TodoHeader />
          <div className="d-flex">
            <AddTodo />
          </div>
        <TodoItems todoItems={todoItems}></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;
