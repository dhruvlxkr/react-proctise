import VagitableForm from "./VagitableForm";
const Vagitables = ({
  vagiTable,
  activeItems,
  buyItems,
  removeItem,
  addItem,
}) => {
  function HandilingEventbutton(items) {
    console.log("Button clicked", items);
  }
  return (
    <>
      <ul className="list-group">
        <VagitableForm addItem={addItem} />
        {vagiTable.map((items, index) => (
          <li
            key={index}
            className={`list-group-item ${activeItems.includes(items) ? "active" : ""}`}
          >
            {items}
            {activeItems.includes(items) ? (
              <button
                className="btn btn-danger btn-sm float-end"
                onClick={() => removeItem(items)}
              >
                Remove
              </button>
            ) : (
              <button
                className="btn btn-primary btn sm float-end"
                onClick={() => buyItems(items)}
              >
                Buy
              </button>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Vagitables;
