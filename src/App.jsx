import React, { useState, useEffect} from 'react';
import './App.css';

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("run all the time");
  useEffect(() => {
    console.log("run only once.");
  }, []);
  useEffect(() => {
    console.log("run when 'keyword' changes.");
  }, [keyword]);
  useEffect(() => {
    console.log("run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("run when 'keyword & counter' changes.");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;