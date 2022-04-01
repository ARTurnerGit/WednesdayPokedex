import React, { useState } from "react";

function CaughtPokemon({ date }) {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    const ourPokemon = "Bulbasaur";
    // const newArray = caught.concat(ourPokemon);

    // const newArray = [...caught, ourPokemon];

    // const newArray = [...caught]; // a copy
    // newArray.push(ourPokemon);

    const newArray = caught.slice();
    newArray.push(ourPokemon);

    setCaught(newArray);
  }

  return (
    <div>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <button onClick={catchPokemon}>Catch a pokemon</button>
      <ul>
        {caught.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    </div>
  );
}

export default CaughtPokemon;
