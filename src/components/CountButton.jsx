import { PlusIcon, MinusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, setCount }) {
  const handleIncrement = (e) => {
    setCount((prevCount) => prevCount + 1);

  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      // Prevent count from going below 0
      if (prevCount <= 0) return 0;
      return prevCount - 1;
    });
  };

  return (
    <button 
      className="count-btn" 
      onClick={type === "increment" ? handleIncrement : handleDecrement}
    >
      {type === "increment" ? (
        <PlusIcon className="count-btn-icon" />
      ) : (
        <MinusIcon className="count-btn-icon" />
      )}
    </button>
  );
}