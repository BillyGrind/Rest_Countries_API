import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import FilterRegion from "./FilterRegion";
import FilterInput from "./FilterInput";
import {
  Card,
  Heading,
  CardBody,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Spacer
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function CardCountry({ countries }) {
  const [searchValue, setSearchValue] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const sortedCountries = countries.slice().sort((a, b) => {
    const nameA = a.name.common.toLowerCase();
    const nameB = b.name.common.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  const handleSearch = (value) => {
    setSearchValue(value);
  };

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
      <Navbar />
      <Box px={6}>
        <Flex display='column' justifyContent={"space-between"}>
          <FilterInput search={searchValue} onSearch={handleSearch} />
          <FilterRegion setSelectedRegion={setSelectedRegion} />
        </Flex>
      </Box>
      <SimpleGrid
        spacing={6}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        px={6}
      >
        {filteredCountries.map((country, index) => (
          <Card
            key={index}
            variant="elevated"
            maxW="sm"
            _hover={{
              background: "grey",
              color: "white",
            }}
          >
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
      </SimpleGrid>
    </>
  );
}
