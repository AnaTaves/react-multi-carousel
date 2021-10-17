import React, { useState } from "react";

import Card from "./Card";
import Data from "./Data";

const App = () => {
  const [active, setActive] = useState("");

  return (
    <>
      <nav>
        <button onClick={() => setActive("FirstCard")}>One</button>
        <button onClick={() => setActive("SecondCard")}>Two</button>
        <button onClick={() => setActive("ThirdCard")}>Three</button>
      </nav>
      <div>
        {active === "FirstCard" && <Card data={Data} index={0} />}
        {active === "SecondCard" && <Card data={Data} index={1} />}
        {active === "ThirdCard" && <Card data={Data} index={2} />}
      </div>
    </>
  );
};

export default App;
