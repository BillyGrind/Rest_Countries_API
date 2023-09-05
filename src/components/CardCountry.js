import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Loading from "./Loading";
import Filter from "./Filter";
import { Card, Heading, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardCountry() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState([]);

  //react query

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

  const sortedCountries = countries.slice().sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <Filter />
          {sortedCountries.map((country, index) => (
            <Card key={index} maxW="sm">
              <Link
                to={`/country/${country.name.common}`}
                key={index}
                state={country}
              >
                <CardBody>
                  <Image
                    src={country.flags.svg}
                    alt={country.name.alt}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{country.name.common}</Heading>
                    <Text>Population : {country.population}</Text>
                    <Text>Region : {country.region}</Text>
                    <Text>Capital : {country.capital}</Text>
                  </Stack>
                </CardBody>
              </Link>
            </Card>
          ))}
        </>
      )}
    </>
  );
}
