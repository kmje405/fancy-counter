import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({ setCount }) {
  function handleCountReset(e) {
    setCount(0);
    e.currentTarget.blur();
  }

  return (
    <button className="reset-btn" onClick={handleCountReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
