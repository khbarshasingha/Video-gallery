import React from "react";
import logo from "./logo.svg";
import { Header } from "./Header";
import { Cardlist } from "./Cardlist";
import { Footer } from "./Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        {" "}
        <Cardlist />
      </div>
      <Footer />
    </div>
  );
}

export default App;
