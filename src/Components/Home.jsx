import React from "react";

import { CurrencyFormAndSearch } from "./SelectCurrencyForm";
// import { useLocalStorage } from "../Utils/useLocalStorage";
import "../../src/App.css";

export const Home = () => {
  return (
    <div className="container">
      <header className="mt-3 mb-4 text-center fs-5 fw-bolder bg-success bg-gradient py-3 rounded-2">
        Welcome to Crypto Price Visualizer, enjoy looking for information about
        your favorites cryptos !
      </header>
      <nav className="d-flex mt-4 justify-content-between">
        <CurrencyFormAndSearch />
      </nav>
    </div>
  );
};
