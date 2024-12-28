import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({ setCount }) {
  function handleCountReset() {
    setCount(0);
  }

  return (
    <button className="reset-btn" onClick={handleCountReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
