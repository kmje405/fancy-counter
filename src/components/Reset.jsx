import { ResetIcon } from "@radix-ui/react-icons";

export default function Reset({ setCount }) {
  function handleCountReset() {
    console.log("Reset button clicked");
    setCount(0);
  }

  return (
    <button className="reset-btn">
      <ResetIcon onClick={handleCountReset} />
    </button>
  );
}
