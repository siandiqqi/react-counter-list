import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

type ValueWithId<T> = {
  id: number;
  value: T;
};

type CounterType = ValueWithId<number>;

const Counter = ({
  counter,
  increment,
  decrement,
  deleteCounter,
  resetCounter,
}: {
  counter: CounterType;
  increment: (counter: CounterType) => void;
  decrement: (counter: CounterType) => void;
  deleteCounter: (counter: CounterType) => void;
  resetCounter: (counter: CounterType) => void;
}) => {
  return <div></div>;
};

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const increaseCounterByValue = (inputCounter: CounterType, value: number) => {
    const newCounters: CounterType[] = [];
    for (const counter of counters) {
      const toPush = { ...counter };
      if (counter.id === inputCounter.id) {
        toPush.value += value;
      }
      setCounters(newCounters);
    }
  };
  const incrementCounter = (counter: CounterType) => {
    increaseCounterByValue(counter, 1);
  };
  const decrementCounter = (counter: CounterType) => {
    increaseCounterByValue(counter, -1);
  };
  const resetCounter = (inputCounter: CounterType) => {
    const newCounters: CounterType[] = [];
    for (const counter of counters) {
      const toPush = { ...counter };
      if (counter.id === inputCounter.id) {
        toPush.value = 0;
      }
      setCounters(newCounters);
    }
  };
  const createNewCounter = () => {
    setCounters([...counters, { id: Math.random(), value: 0 }]);
  };
  const deleteCounter = (inputCounter: CounterType) => {
    const newCounters: CounterType[] = [];
    for (const counter of counters) {
      if (counter.id === inputCounter.id) {
        continue;
      }
      newCounters.push({ ...counter });
      setCounters(newCounters);
    }
  };

  return (
    <div className="App">
      {counters.map((counter) => {
        return (
          <Counter
            counter={counter}
            increment={incrementCounter}
            decrement={decrementCounter}
            deleteCounter={deleteCounter}
            resetCounter={resetCounter}
          />
        );
      })}
      <button onClick={createNewCounter}>Create new Counter</button>
    </div>
  );
}

const initialCounters: CounterType[] = [
  {
    id: 1,
    value: 100,
  },
  {
    id: 2,
    value: 0,
  },
];

export default App;
