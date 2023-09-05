import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Image,
  Button,
  Card,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function CardDetail(props) {
  let country = useLocation();

  const getCountry = (countryCode) => {
    country = props.countries.filter((country) => {
      return country.cca3 == countryCode;
    })[0];
    return country.name.common;
  };

  return (
    <>
      <Navbar />
      <Link to={`/`}>
        <Button>Back</Button>
      </Link>
      <Card maxW="lg">
        <Image
          src={country.state.flags.svg}
          alt={country.state.flags.alt}
          borderRadius="lg"
        />
        <Heading size="lg">{country.state.name.common}</Heading>
        <Text>Native Name:</Text>
        {country.state.name.nativeName ? (
          country.state.name.nativeName[
            Object.keys(country.state.name.nativeName)[0]
          ].official
        ) : (
          <Text>No Native Name</Text>
        )}

        <Text>Population: {country.state.population}</Text>
        <Text>Region: {country.state.region}</Text>
        <Text>Sub Region: {country.state.subregion}</Text>
        <Text>
          Capital: {country.state.capital ? country.state.capital : "No"}
        </Text>
        <Text>Top Level Domain: {country.state.tld}</Text>
        <Text>
          Currencies:
          {country.state.currencies
            ? country.state.currencies[Object.keys(country.state.currencies)[0]].name
            : " No currencies"}
        </Text>

        <Heading size="md">Languages:</Heading>

        {country.state.languages ? (
          Object.values(country.state.languages).map((language, index) => (
            <Text key={index}>{language}</Text>
          ))
        ) : (
          <Text>No Languages</Text>
        )}

        <Heading size="md">Border Countries:</Heading>
        {country.state.borders ? (
          <UnorderedList>
            {Object.values(country.state.borders).map((border, index) => (
              <Link to={`/country/${getCountry(border)}`} key={index} state={country}>
                <ListItem key={index}>{border}</ListItem>
              </Link>
            ))}
          </UnorderedList>
        ) : (
          <Text>No borders countries</Text>
        )}
      </Card>
    </>
  );
}
