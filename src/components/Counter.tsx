import { useState } from "react";
import CounterDisplay from "./CounterDisplay";
import CounterCustomValues from "./CounterCustomValues";
import "./counter.css" 

const Counter = () => {
  const [counterValue, setCounterValue] = useState<number>(0);

  const increase = () => {
    setCounterValue(counterValue + 1);
  };

  const decrease = () => {
    setCounterValue(counterValue - 1);
  };

  const increaseBy10 = () => {
    setCounterValue(counterValue + 10);
  };

  const addCustomValue = (inputValue: number) => {
    setCounterValue(counterValue + inputValue);
  };

  const subCustomnValue = (inputValue: number) => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div id="counter" >
      {/* <div> counter : {counterValue}</div> */}
      <CounterDisplay value={counterValue} />
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>decrease</button>
        <button onClick={increaseBy10}>Increase by 10</button>
        <button
          onClick={() => {
            setCounterValue(counterValue - 10);
          }}
        >
          Decrease By 10
        </button>
        <CounterCustomValues onAdd={addCustomValue} onSub={subCustomnValue} />
      
      </div>
    </div>
  );
};

export default Counter;
