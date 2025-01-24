import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import BankOverview from "./components/BankOverview";
import FinancialHighlights from "./components/FinancialHighlights";
import Highlights from "./components/HighLights";
import BuildingHighlight from "./components/ui/BuildingHighlight";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <div className="pl-8">
        <BankOverview />
        <FinancialHighlights />
        <Highlights />
      </div>
      <div className="w-full mt-10">
        <BuildingHighlight />
      </div>
    </div>
  );
}

export default App;
