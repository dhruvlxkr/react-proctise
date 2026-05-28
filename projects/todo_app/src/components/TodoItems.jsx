import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems}) =>{
 return <>
 
     <div className="items">
      {todoItems.map((item) => <TodoItem todoname={item.name} tododate={item.date} />)}
          </div>
 </>
}

export default TodoItems