import React, { useState, useEffect } from "react";
import CardCountry from "./components/CardCountry";
import CardDetail from "./components/CardDetail";
import { Routes, Route } from "react-router-dom";
import Loading from "./components/Loading";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((json) => setCountries(json))
      .finally(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route
            path="/"
            element={<CardCountry countries={countries} loading={loading} />}
          />
          <Route
            path="/country/:countryName"
            element={<CardDetail countries={countries} />}
          />
        </Routes>
      )}
    </>
  );
}

// ---------------------- TO DO

// work design

// ---------------------- DESIGN
// ADD arrow button


// ---------------------- DONE

// Click through to the border countries on the detail page
// See all countries from the API on the homepage
// Click on a country to see more detailed information on a separate page
// Search for a country using an input field
// Filter countries by region
// See hover and focus states for all interactive elements on the page
// Bonus: Toggle the color scheme between light and dark mode
//fix loading page
// View the optimal layout for the interface depending on their device's screen size
// Center app