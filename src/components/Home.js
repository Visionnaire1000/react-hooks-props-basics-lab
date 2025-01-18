
import React from "react";

function Home({ username, city }) {
  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>City: {city}</p>
    </div>
  );
}

export default Home;
