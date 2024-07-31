import { useState } from "react";
import "./App.css";

const Counter = ({
  counter,
  increment,
  decrement,
  deleteCounter,
  resetCounter,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignSelf: "stretch",
        gap: 10,
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        borderColor: "black",
        borderStyle: "solid",
        background: "#ddd",
      }}
    >
      <p>{counter.value}</p>
      <button
        onClick={() => {
          increment(counter);
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          decrement(counter);
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          deleteCounter(counter);
        }}
      >
        delete
      </button>
      <button
        onClick={() => {
          resetCounter(counter);
        }}
      >
        resetCounter
      </button>
    </div>
  );
};

function App() {
  const [counters, setCounters] = useState(initialCounters);

  const increaseCounterByValue = (inputCounter, value) => {
    const newCounters = [];
    for (const counter of counters) {
      const toPush = { ...counter };
      if (counter.id === inputCounter.id) {
        toPush.value += value;
      }
      newCounters.push(toPush);
    }
    setCounters(newCounters);
  };
  const incrementCounter = (counter) => {
    increaseCounterByValue(counter, 1);
  };
  const decrementCounter = (counter) => {
    increaseCounterByValue(counter, -1);
  };
  const resetCounter = (inputCounter) => {
    const newCounters = [];
    for (const counter of counters) {
      const toPush = { ...counter };
      if (counter.id === inputCounter.id) {
        toPush.value = 0;
      }
      newCounters.push(toPush);
    }
    setCounters(newCounters);
  };
  const createNewCounter = () => {
    setCounters([...counters, { id: Math.random(), value: 0 }]);
  };
  const deleteCounter = (inputCounter) => {
    const newCounters = [];
    for (const counter of counters) {
      if (counter.id === inputCounter.id) {
        continue;
      }
      newCounters.push({ ...counter });
    }
    setCounters(newCounters);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: 10 }}
    >
      {counters.map((counter) => {
        return (
          <Counter
            counter={counter}
            increment={incrementCounter}
            decrement={decrementCounter}
            deleteCounter={deleteCounter}
            resetCounter={resetCounter}
            key={counter.id}
          />
        );
      })}
      <button onClick={createNewCounter}>Create new Counter</button>
    </div>
  );
}

const initialCounters = [];

export default App;
