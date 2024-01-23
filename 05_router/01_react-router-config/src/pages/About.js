import React, { useState } from "react";

export const About = () => {
  const [about, setAbout] = useState(0);

  const onChange = () => setAbout(about + 1);

  return (
    <div>
      <h1>About Component: {about}</h1>
      <button onClick={onChange}>+1</button>
    </div>
  );
}