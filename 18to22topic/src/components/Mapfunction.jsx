
  let friends = ['vikash','rohit','kp','ravi','kishan','prakash','lokesh','jayprakash'];
function Mapfunction(){
    return <>
        <h1>Without Index Map Function Use</h1>
         <ul className="list-group">
            {friends.map((names)=><li className="list-group-item">{names}</li>)}
            </ul>
           <br/> <br/>
            <h1>With Index Map Function Use</h1>
        <ul className="list-group">
            {friends.map((names,index)=><li key={index} className="list-group-item">{index} - {names}</li>)}
            
        </ul>

    </>
} 

export default Mapfunction;