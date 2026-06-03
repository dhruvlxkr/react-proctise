import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className="items">
        {todoItems.map((item, index) => (
          <TodoItem key={index} todoname={item.name} tododate={item.date} />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
