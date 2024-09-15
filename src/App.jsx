import { useEffect, useState } from "react";
import cities from "./cities.json";
import Input from "./main";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hint, setHint] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    if (!inputValue) return;
    const matchinghint = cities.find((item) => item.startsWith(inputValue));
    setHint(matchinghint);
  }, [inputValue]);

  return (
    <div className="bg">
      <Input handleChange={handleChange} inputValue={inputValue} hint={hint} />
      <div className="city"></div>
      <div className="city1"></div>
    </div>
  );
}

export default App;
