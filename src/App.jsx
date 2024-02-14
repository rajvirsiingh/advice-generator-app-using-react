import axios from "axios";
import React, { useEffect, useState } from "react";
import divider from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";

const baseURL = "https://api.adviceslip.com/advice";
function App() {
  const [advice, setAdvice] = useState({});

  async function handleClick() {
    const res = await axios.get(baseURL);
    setAdvice(res.data.slip);
  }
  useEffect(() => {
    handleClick();
  }, []);
  return (
    <section className="App">
      <div className="advice">
        <p className="advice-id">ADVICE #{advice.id}</p>
        <p className="advice-text">"{advice.advice}"</p>
      </div>

      <img src={divider} alt="div" className="div" />
      <br />
      <button onClick={handleClick}>
        <img src={dice} alt="dice" />
      </button>
    </section>
  );
}

export default App;
