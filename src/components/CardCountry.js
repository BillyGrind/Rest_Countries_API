import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterRegion from "./FilterRegion";
import Loading from "./Loading";
import FilterInput from "./FilterInput";
import { Card, Heading, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardCountry() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

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

  console.log(selectedRegion);

  const sortedCountries = countries.slice().sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  // const filteredCountries = sortedCountries.filter((country) =>
  //   country.name.common.toLowerCase().includes(searchValue.toLowerCase())
  // );

  // const filteredCountries = sortedCountries.filter((country) =>
  // {searchValue?( country.name.common.toLowerCase().includes(searchValue.toLowerCase())):(country.region.toLowerCase().includes(selectedRegion.toLowerCase()))}

  // );

  const filteredCountries = sortedCountries.filter((country) => {
    if (searchValue) {
      return country.name.common
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    } else if (selectedRegion) {
      return country.region
        .toLowerCase()
        .includes(selectedRegion.toLowerCase());
    }
    return true;
  });

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          <FilterInput search={searchValue} onSearch={handleSearch} />
          <FilterRegion setSelectedRegion={setSelectedRegion} />
          {filteredCountries.map((country, index) => (
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
