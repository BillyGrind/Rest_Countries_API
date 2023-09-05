import React, { useState } from "react";
import CardCountry from "./components/CardCountry";
import CardDetail from "./components/CardDetail";
import { Routes, Route } from "react-router-dom";
// import { extendTheme } from "@chakra-ui/react";

export default function App() {

  const [countries, setCountries] = useState([]);
  

  return (
    <>
      <Routes>
        <Route path="/" element={<CardCountry  countries={countries} setCountries={setCountries}/>} />
        <Route path="/country/:countryName" element={<CardDetail countries={countries} setCountries={setCountries}/>} />
      </Routes>
    </>
  );
}

// ---------------------- TO DO

// View the optimal layout for the interface depending on their device's screen size
// See hover and focus states for all interactive elements on the page
// work design
// Bonus: Toggle the color scheme between light and dark mode

// ---------------------- DESIGN
// ADD arrow button
// Center app

// ---------------------- DONE

// Click through to the border countries on the detail page
// See all countries from the API on the homepage
// Click on a country to see more detailed information on a separate page
// Search for a country using an input field
// Filter countries by region
