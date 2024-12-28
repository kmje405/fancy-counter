import CountButton from "./CountButton";

function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <CountButton setCount={setCount} type="decrement" />
      <CountButton setCount={setCount} type="increment" />
    </div>
  );
}

export default ButtonContainer;

