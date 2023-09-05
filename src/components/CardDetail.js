import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import {
  Image,
  Button,
  Card,
  Stack,
  Text,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function CardDetail() {
  let country = useLocation();

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
        <Text>
          Native Name:
          {
            country.state.name.nativeName[
              Object.keys(country.state.name.nativeName)[0]
            ].official
          }
        </Text>
        <Text>Population: {country.state.population}</Text>
        <Text>Region: {country.state.region}</Text>
        <Text>Sub Region: {country.state.subregion}</Text>
        <Text>Capital: {country.state.capital}</Text>
        <Text>Top Level Domain: {country.state.tld}</Text>
        <Text>
          Currencies:
          {
            country.state.currencies[Object.keys(country.state.currencies)[0]]
              .name
          }
        </Text>
        <Heading size="md">Languages:</Heading>

        {Object.values(country.state.languages).map((language, index) => (
          <Text key={index}>{language}</Text>
        ))}

        <Heading size="md">Border Countries:</Heading>
        <UnorderedList>
          {Object.values(country.state.borders).map((border, index) => (
            <ListItem key={index}>{border}</ListItem>
          ))}
        </UnorderedList>
      </Card>
    </>
  );
}
