import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Search from "./Search";
import {
  Card,
  Heading,
  CardBody,
  Image,
  Stack,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardCountry() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState([]);

  //react query
  //React router

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
        // <div>Loading...</div>
        <CircularProgress isIndeterminate color="green.300">
          Loading...
        </CircularProgress>
      ) : (
        <>
          <Navbar />
          <Search />
          {countries.map((country, index) => (
            <Link to={`/country/${country.name.common}`} key={index} state={country}>
              <Card key={index} maxW="sm">
                <CardBody>
                  <Image
                    src={country.flags.svg}
                    alt={country.name.common}
                    borderRadius="lg"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{country.name.common}</Heading>
                    <Text>Population : {country.population}</Text>
                    <Text>Region : {country.region}</Text>
                    <Text>Capital : {country.capital}</Text>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          ))}
        </>
      )}
    </>
  );
}
