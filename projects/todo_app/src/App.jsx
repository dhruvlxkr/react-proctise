import TodoHeader from "./components/TodoHeader";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessege from "./components/WelcomeMessage";

function App() {
  const [todoItems, SettodoItems] = useState([]);

  const handleNewtodo = (todoname, todoDate) => {
    const newTodoItems = [...todoItems, { name: todoname, date: todoDate }];
    SettodoItems(newTodoItems);
  };

  const onDeleteButton = (todoitems) => {
    const newTodoItems = todoItems.filter((item) => item.name != todoitems);
    SettodoItems(newTodoItems);
  };

  return (
    <>
      <center className="todo-container">
        <div className="container">
          <TodoHeader />
          <div className="d-flex">
            <AddTodo newTodoItems={handleNewtodo} />
          </div>
          {todoItems.length === 0 && <WelcomeMessege></WelcomeMessege>}
          <TodoItems
            todoItems={todoItems}
            onClickDelete={onDeleteButton}
          ></TodoItems>
        </div>
      </center>
    </>
  );
}

export default App;
