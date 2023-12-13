import { useState } from "react";

import viteLogo from "/vite.svg";
import "./App.css";

import BugList from "./views/BugList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BugList />
    </>
  );
}

export default App;
