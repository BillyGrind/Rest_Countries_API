import React from "react";
import { useEffect, useState } from "react";


export default function Card() {

  const [countries,setCountries]=useState([]);
  const [loading,setLoading]=useState([]);

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
      ;
  }, []);

  const countryNames = countries.map((country, index) => country.name.official);


  return (
    <>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul>
        {countryNames.map((countryName, index) => (
          <li key={index}>{countryName}</li>
        ))}
      </ul>
      )}
    </>
  );
}
