import { useState } from "react";
import ChildrenProps from "./component/ChildrenProps";
import Vagitables from "./component/Vagitables";
import Heading from "./component/Heading";

function App() {
  const [vegeTable, setVegitable] = useState(["Dal", "Roti", "Sabji"]);
  const [activeItems,setActiveItems] = useState([]);
  const addItem = (newItem) => {
    setVegitable([...vegeTable, newItem]);
  };

  const onBuyButton = (items) => {
      setActiveItems([...activeItems,items]);
  }

  const removeItem = (items) => {
     setActiveItems(activeItems.filter(currentItem => currentItem != items))
  }
  
  return (
    <>
      <ChildrenProps>
        <Heading></Heading>
        <Vagitables
          vagiTable={vegeTable}
          activeItems={activeItems}
          buyItems = {buyItems}
          removeItem = {removeItem}
          addItem={addItem}
        ></Vagitables>
      </ChildrenProps>
    </>
  );
}

export default App;
