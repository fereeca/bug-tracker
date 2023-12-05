import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./views/Navbar";
import Sidebar from "./views/Sidebar";
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
