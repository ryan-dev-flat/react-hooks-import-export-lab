import React from "react";
import {username, city} from "../data/user"
function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
};
console.log(username);
console.log(city);

export default Home
