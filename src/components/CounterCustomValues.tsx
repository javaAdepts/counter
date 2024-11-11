import { useState } from "react";

const CounterCustomValues = ({ onAdd, onSub }: { onAdd: Function; onSub: Function;}) => {
  const [inputValue, setInputValue] = useState<number>(0);

  const onChange = (event: any) => {
    event.target?.value && setInputValue(parseInt(event.target?.value));
  };

  // const addValue=()=>{
  //     onAdd(inputValue);
  // }

  return (
    <div>
      <h5>{inputValue}</h5>
      <div>
        <input
          type="number"
          onChange={(e) => {
            onChange(e);
          }}
        />
        <button
          onClick={() => {
            onAdd(inputValue);
          }}
        >
          Add
        </button>

        <button
          onClick={() => {
            onSub(inputValue);
          }}
        >
          Sub
        </button>
      </div>
    </div>
  );
};

export default CounterCustomValues;
