import Title from "./Title";
import Count from "./Count";
import Reset from "./Reset";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = useState(() => {
    console.log("Initial count state");
    return 0;
  });
  console.log("Card rendered");
  return (
    <div className="card">
      <Title />
      <Count count={count} />
      <Reset setCount={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
}
