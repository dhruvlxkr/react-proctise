import {Routes,Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import Mapfunction from "./components/Mapfunction"
import StudentProps from "./components/StudentProps"

function App() {

  return <>
  <Routes>
    <Route
          path="/"
          element={
            <ul className="list-group">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">
                Dapibus ac facilisis in
              </li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">
                Porta ac consectetur ac
              </li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          }
        />
       <Route path="/mapfunction" element={<Mapfunction />}></Route>
       <Route path="/studentprops" element={<StudentProps name="Dharmendra" age="29" />}></Route>
   </Routes>
 </>
  
}

export default App
