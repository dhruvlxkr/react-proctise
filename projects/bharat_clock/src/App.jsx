import "./App.css";
import ClockHeader from "./components/ClockHeader";
import ClockContent from "./components/ClockContent";
import ClockDate from "./components/ClockDate";

function App() {
  return <>
  <div className="container text-center">
  <ClockHeader></ClockHeader>
  <ClockDate></ClockDate>
  <ClockContent></ClockContent>
  </div>
  </>;
}

export default App;
