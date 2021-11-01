import React from "react";
import Header from "./Header";
import Pirate from "./Pirate";
import piratesFile from "../data/sample-pirates-array";

const pirateCalls = [
  "Aaarg, belay that!",
  "Avast me hearties!",
  "Shiver me timbers!",
];

function randomize() {
  return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
  return (
    <div>
      <Header title={randomize()} />
      <div className="pirate">
        {piratesFile.map((pirate) => (
          <Pirate
            image={"../assets/img/" + pirate.image}
            name={pirate.name}
            year={pirate.year}
            tagline={randomize()}
            weapon={pirate.weapon}
            vessel={pirate.vessel}
            description={pirate.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
