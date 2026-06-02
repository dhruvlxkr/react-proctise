import Styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    ".",
    "=",
  ];
  return (
    <div className={Styles.buttonContainer}>
      {buttonNames.map((buttonItems, index) => (
        <button
          key={index}
          className={Styles.button}
          onClick={() => onButtonClick(buttonItems)}
        >
          {buttonItems}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
