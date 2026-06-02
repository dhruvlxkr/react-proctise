import Styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const [calVal, SetcalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      SetcalVal("");
    } else if (buttonText === "=") {
      try {
        const result = eval(calVal);
        SetcalVal(result.toString());
      } catch {
        SetcalVal("Error");
      }
    } else {
      // const displayValueNew = calVal + buttonText;
      // SetcalVal(displayValueNew);
      SetcalVal((prev) => prev + buttonText);
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if (
        (key >= "0" && key <= "9") ||
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "."
      ) {
        SetcalVal((prev) => prev + key);
      } else if (key === "Enter") {
        try {
          const result = eval(calVal);
          SetcalVal(result.toString());
        } catch {
          SetcalVal("Error");
        }
      } else if (key === "Backspace") {
        SetcalVal((prev) => prev.slice(0, -1));
      } else if (key === "Escape") {
        SetcalVal("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [calVal]);

  return (
    <div className={Styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
