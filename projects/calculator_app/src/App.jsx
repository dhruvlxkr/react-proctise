import Styles from "./App.module.css"
function App() {
   return <div className={Styles.calculator}>
          <input className={Styles.display} type="text"  />
         <div className={Styles.buttonContainer}>
            <button className={Styles.button}>C</button>
            <button className={Styles.button}>1</button>
            <button className={Styles.button}>2</button>
            <button className={Styles.button}>+</button>
              
                

         </div>
   </div>
}

export default App
