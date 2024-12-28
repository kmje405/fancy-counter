import Title from "./Title";
import Count from "./Count";
import Reset from "./Reset";
import { useState } from "react";
import ButtonContainer from "./ButtonContainer";

export default function Card() {
  const [count, setCount] = useState(() => {
    return 0;
  });

  // Add limit state check
  const isLimit = count >= 100;
  
  return (
    <div className={`card ${isLimit ? 'card--limit' : ''}`}>
      <Title />
      <Count count={count} />
      <Reset setCount={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
}
