import { Route, Routes } from "react-router-dom";
import "./App.css";
import BotCollection from "./components/BotCollection";
import YourBotArmy from "./components/YourBotArmy";
import { useState, useEffect } from "react";
import Bot from "./components/Bot";
import Home from "./pages/Home";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Get Bots and render them into bot collection
  const setArmyHandler = (bot) => {
    const newArmy = army.filter((b) => b.id !== bot.id);
    setArmy([...newArmy, bot]);
    const newBots = bots.filter((b) => b.id !== bot.id);
    setBots(newBots);
  };

  const removeArmyHandler = (bot) => {
    const newArmy = army.filter((b) => b.id !== bot.id);
    setArmy(newArmy);
  };
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then((data) => {
        setBots(data);
      });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="bots/:id"
          element={<Bot setArmyHandler={setArmyHandler} />}
        />
        <Route
          path="/"
          element={
            <Home
              setArmyHandler={setArmyHandler}
              bots={bots}
              removeArmyHandler={removeArmyHandler}
              army={army}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
