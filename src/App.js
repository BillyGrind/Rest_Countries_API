import React from "react";
import CardCountry from "./components/CardCountry";
import CardDetail from "./components/CardDetail";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<CardCountry />} />
        <Route path='/country/:countryName' element={<CardDetail/>} />
      </Routes>
    </>
  );
}


// ---------------------- TO DO

// Click through to the border countries on the detail page
// View the optimal layout for the interface depending on their device's screen size
// See hover and focus states for all interactive elements on the page
// work design
// Bonus: Toggle the color scheme between light and dark mode

// ---------------------- DESIGN
// ADD arrow button
// Center app


// ---------------------- DONE 

// See all countries from the API on the homepage
// Click on a country to see more detailed information on a separate page
// Search for a country using an input field
// Filter countries by region