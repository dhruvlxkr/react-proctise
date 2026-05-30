import VagitableForm from "./VagitableForm";
const Vagitables = ({ vagiTable }) => {
  function HandilingEventbutton(items) {
    console.log(`${items} Being Bought`);
  }
  return (
    <>
      <ul className="list-group">
        <VagitableForm></VagitableForm>
        {vagiTable.map((items, index) => (
          <li key={index} className="list-group-item">
            {items}
            <button
              onClick={() => HandilingEventbutton(items)}
              className="btn btn-primary btn-sm float-end"
            >
              Click
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Vagitables;
