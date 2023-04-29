import React from "react";
import YourBotArmy from "../components/YourBotArmy";
import BotCollection from "../components/BotCollection";

const Home = ({ army, removeArmyHandler, bots, setArmyHandler }) => {
  return (
    <div>
      <YourBotArmy army={army} removeArmyHandler={removeArmyHandler} />
      <BotCollection bots={bots} setArmyHandler={setArmyHandler} />
    </div>
  );
};

export default Home;
