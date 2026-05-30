import { useState } from "react";
function VagitableForm({ addItem }) {
  const HandlingFormEvent = (event) => {
    if (event.key == "Enter") {
      addItem(event.target.value);
      event.target.value = "";
    }
  };
  return (
    <>
      <input onKeyDown={HandlingFormEvent} type="text" className="Vagitablf" />
    </>
  );
}

export default VagitableForm;
