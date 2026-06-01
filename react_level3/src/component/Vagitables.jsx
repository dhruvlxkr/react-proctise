import VagitableForm from "./VagitableForm";
const Vagitables = ({ vagiTable, activeItems,buyItems,removeItem, addItem}) => {
  function HandilingEventbutton(items) {
    console.log("Button clicked",items);
    
  }
  return (
    <>
      <ul className="list-group">
        <VagitableForm addItem={addItem} />
        {vagiTable.map((items, index) => (
          <li key={index} className={`list-group-item ${Bought && "active"}`}>
            {items}
            <button
              onClick={() => HandilingEventbutton(items)}
              className="btn btn-primary btn-sm float-end"
            >
              Buy
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Vagitables;
