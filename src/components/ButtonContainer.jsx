import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function ButtonContainer({ setCount }) {
  return (
    <div className="button-container">
      <button className="count-btn" onClick={() => setCount(prev => prev - 1)}>
        <MinusIcon className="count-btn-icon" />
      </button>
      <button className="count-btn count-btn--plus" onClick={() => setCount(prev => prev + 1)}>
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}


function CountButton({ setCount }) {

  return (
    <div>
      <button className="count-btn" onClick={handleIncrement}>
        <PlusIcon className="count-btn-icon" />
      </button> 
      <button className="count-btn" onClick={handleDecrement}>
        <MinusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}