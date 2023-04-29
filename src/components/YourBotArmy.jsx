import React from "react";

function YourBotArmy({ army, removeArmyHandler }) {
  return (
    <div className="bot-army">
      <h2>Bot Army</h2>
      {army.map((bot) => (
        <h1 onClick={() => removeArmyHandler(bot)}>{bot.name}</h1>
      ))}
    </div>
  );
}

export default YourBotArmy;
