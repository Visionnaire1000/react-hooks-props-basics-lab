
import React from "react";
import Links from "./Links";

function About({ bio, github, linkedin }) {
  return (
    <div>
      <h2>About Me</h2>
      {/* Conditionally render the bio paragraph */}
      {bio && <p>{bio}</p>}
      {/* Pass links to the Links component */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}

export default About;
