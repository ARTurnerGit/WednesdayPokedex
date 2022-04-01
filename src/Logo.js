import React from "react";

function Logo(props) {
  return (
    <header>
      <div>
        <h1>Welcome to {props.appName}</h1>
        <img
          src={
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
          }
          alt={"a pokemon"}
          onClick={props.handleClick}
        />
      </div>
    </header>
  );
}

export default Logo;
