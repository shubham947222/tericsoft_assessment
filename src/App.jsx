import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PhysicalActivity from "./components/PhysicalActivity";
import MenuBar from "./components/Menu/MenuBar";

function App() {
  return (
    <div className="w-100">
      <MenuBar />
      <PhysicalActivity />
    </div>
  );
}

export default App;
