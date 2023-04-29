import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SortBar from "./SortBar";

function BotCollection({ bots, setArmyHandler }) {
  return (
    <div className=" container my-5">
      {/* render the bots in cards */}
      <div className=" row ">
        {bots.map((bot) => (
          <Link to={`bots/${bot.id}`}>
            <div
              key={bot.id}
              className="col-3 mb-4  mr-3 px-3"
              onClick={() => setArmyHandler(bot)}
            >
              <div className="border bg-light overflow-hidden">
                <img
                  src={bot.avatar_url}
                  className="img-fluid "
                  alt="image loading..."
                />
                <h5 style={{ textAlign: "center", fontWeight: "bolder" }}>
                  {bot.name}
                </h5>
                <p>{bot.catchphrase}</p>
                {/* style the bot details */}
                <hr />
                <div id="bot-details">
                  <p>H:{bot.health}</p>
                  <p>D:{bot.damage}</p>
                  <p>A:{bot.armor}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
