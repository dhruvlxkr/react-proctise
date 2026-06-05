import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems, onClickDelete }) => {
  return (
    <>
      <div className="items">
        {todoItems.map((item, index) => (
          <TodoItem
            key={item.name}
            todoname={item.name}
            tododate={item.date}
            onClickDelete={onClickDelete}
          />
        ))}
      </div>
    </>
  );
};

export default TodoItems;
