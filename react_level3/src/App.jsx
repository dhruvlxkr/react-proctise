import { useState } from "react";
import ChildrenProps from "./component/ChildrenProps";
import Vagitables from "./component/Vagitables";
import Heading from "./component/Heading";

function App() {
  const [vegeTable, setVegitable] = useState(["Dal", "Roti", "Sabji"]);
  let [activeITems, SetActiveItems] = useState([]);
  const addItem = (newItem) => {
    setVegitable([...vegeTable, newItem]);
  };
  return (
    <>
      <ChildrenProps>
        <Heading></Heading>
        <Vagitables
          vagiTable={vegeTable}
          Bought={true}
          addItem={addItem}
        ></Vagitables>
      </ChildrenProps>
    </>
  );
}

export default App;
