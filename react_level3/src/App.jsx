import ChildrenProps from "./component/ChildrenProps";
import Vagitableitems from "./component/Vagitables";
import Heading from "./component/Heading";
function App() {
  const vagiTable = [
    "Dal",
    "Roti",
    "Sabji",
    "Bhindi",
    "Palak",
    "Gavarfali",
    "Gobi",
    "Taroi",
  ];
  return (
    <>
      <ChildrenProps>
        <Heading></Heading>
        <Vagitableitems vagiTable={vagiTable}></Vagitableitems>
      </ChildrenProps>
    </>
  );
}

export default App;
