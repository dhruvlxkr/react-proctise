import { useState } from "react";
import "../App.css";
import Style from "../App.module.css";

const ConditionalRendring = () => {
    let isLogin = true;
     let age = 20;
     let isAdmin = true;
     let mark = 50;
      var massage;
      const [show,setShow] = useState(false);
        if(isLogin){
        massage =  <h1>Welcome Dashboard</h1>
        }else{  
            massage = <h1>Please Login</h1>
        }
       return <>
       {massage}
        {age >= 18 ? <h1 className="textColor">Adult</h1>:<h1>Minor</h1>}
        {isAdmin && <button>Delet User</button>}
        {mark >= 60 ? <h1>1st Div </h1>:mark >= 45  ? <h1>2nd Div</h1>:mark >= 33 ? <h1>3th Div</h1>:<h1>Failed</h1>}
        <button className={Style.button} onClick={()=>setShow(!show)}>
            {show?"hide":"show"}
        </button>

        </>

}

export default ConditionalRendring