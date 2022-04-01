import React from "react";
import "./App.css";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";

function App() {
  const abilities = ["Anticipation", "Adaptability", "Run-Away"];
  const date = new Date().toLocaleDateString();

  const logWhenClicked = () => {
    console.log("hello class 8");
    return null;
  };

  return (
    <div>
      <Logo appName={"Alun's Pokedex"} handleClick={logWhenClicked} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={date} />
    </div>
  );
}

export default App;
