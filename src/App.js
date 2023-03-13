import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./Components/routing";
import "./app.css";
import Testloder from "./Components/testloder";

function App() {
  return (
    <div className="bg-[#f9fafb]">
      {/* <BrowserRouter>
        <Routing/>
      </BrowserRouter> */}
      <Testloder/>
    </div>
  );
}

export default App;
