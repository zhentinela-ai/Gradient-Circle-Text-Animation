import "./index.css";

import { useEffect, useState } from "react";

import Digital from "./components/Digital";

const text = "ZhentinelaAI";
const horas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
var initial = 0;

function App() {
  const textSplit = text.split("");

  const position = textSplit.map(() => {
    return initial++;
  });

  const [id, setId] = useState([]);

  useEffect(() => {
    setId(
      textSplit.map((char, i) => {
        const li = document.getElementById(`id${i}`);
        li.style.setProperty("--i", position[i]);

        const li_hour = document.getElementById(`id${i + 12}`);
        li_hour.style.setProperty("--i", position[i]);

        return null;
      })
    );
  }, []);

  return (
    <div className="circle">
      <ul className="">
        {textSplit.map((char, i) => {
          return (
            <li id={`id${i}`} key={i}>
              <span>{char}</span>
            </li>
          );
        })}
        {horas.map((hora, i) => {
          return (
            <ol id={`id${i + 12}`} key={i}>
              <span>{hora}</span>
            </ol>
          );
        })}
      </ul>
      <img src="logo192.png" alt="" />
      {/* <Digital /> */}
    </div>
  );
}

export default App;
