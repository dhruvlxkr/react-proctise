function VagitableForm() {
  let textshow = "Vegetable Items Entered By User";
  const HandlingFormEvent = (event) => {
    console.log(event.target.value);
    textshow = event.target.value;
  };
  return (
    <>
      <input onKeyDown={HandlingFormEvent} type="text" className="Vagitablf" />
      <p>{textshow}</p>
    </>
  );
}

export default VagitableForm;
