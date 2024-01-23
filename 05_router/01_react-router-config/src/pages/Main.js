import React, { useState } from "react";

export const Main = () => {
  const [main, setMain] = useState(0);

  const onChange = () => setMain(main + 1);

  return (
    <div>
      <h1>Main Component: {main}</h1>s
      <button onClick={onChange}>+1</button>
    </div>
  );
}