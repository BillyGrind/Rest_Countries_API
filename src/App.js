import React from "react";
import CardCountry from "./components/CardCountry";
import CardDetail from "./components/CardDetail";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CardCountry/>} />
        <Route path='/country/:countryName' element={<CardDetail/>} />
      </Routes>
    </>
  );
}
