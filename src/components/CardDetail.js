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
  Box,
  Flex,
} from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

export default function CardDetail(props) {
  let country = useLocation();

  const getCountry = (countryCode) => {
    country = props.countries.filter((country) => {
      return country.cca3 === countryCode;
    })[0];
    return country.name.common;
  };

  return (
    <>
      <Navbar />
      <Link to={`/`}>
        <Button leftIcon={<ChevronLeftIcon />}>Back</Button>
      </Link>
      <Card maxW="md">
        <Image
          src={country.state.flags.svg}
          alt={country.state.flags.alt}
          borderRadius="lg"
        />
        <Heading size="lg">{country.state.name.common}</Heading>
        <Flex>
          <Text as="b">Native Name:&nbsp;</Text>
          {country.state.name.nativeName ? (
            country.state.name.nativeName[
              Object.keys(country.state.name.nativeName)[0]
            ].official
          ) : (
            <Text>No Native Name</Text>
          )}
        </Flex>

        <Flex>
          <Text as="b">Population :&nbsp;</Text>
          <Text>{country.state.population}</Text>
        </Flex>
        <Flex>
          <Text as="b">Region:&nbsp;</Text>
          <Text> {country.state.region}</Text>
        </Flex>
        <Flex>
          <Text as="b">Sub Region :&nbsp;</Text>
          <Text> {country.state.subregion}</Text>
        </Flex>
        <Flex>
          <Text as="b">Capital :&nbsp;</Text>
          <Text> {country.state.capital ? country.state.capital : "No"}</Text>
        </Flex>
        <Flex>
          <Text as="b">Top level domain :&nbsp;</Text>
          <Text> {country.state.tld}</Text>
        </Flex>
        <Flex>
          <Text as="b">Currencies :&nbsp;</Text>
          <Text>
            {" "}
            {country.state.currencies
              ? country.state.currencies[
                  Object.keys(country.state.currencies)[0]
                ].name
              : " No currencies"}
          </Text>
        </Flex>
        <Flex>
          <Text as="b">Languages :&nbsp;</Text>
          <Flex>
            {country.state.languages ? (
              Object.values(country.state.languages).map((language, index) => (
                <Text key={index}>&nbsp;{language} ,</Text>
              ))
            ) : (
              <Text>No Languages</Text>
            )}
          </Flex>
        </Flex>

        <Flex direction={"row"}>
          <Text as="b">Border Countries :&nbsp;</Text>
          <Flex>
            {country.state.borders ? (
              <Box>
                {Object.values(country.state.borders).map((border, index) => (
                  <Link
                    to={`/country/${getCountry(border)}`}
                    key={index}
                    state={country}
                  >
                    <Button key={index}>{border}</Button>
                  </Link>
                ))}
              </Box>
            ) : (
              <Text>No borders countries</Text>
            )}
          </Flex>
        </Flex>
{/* 
        {country.state.borders ? (
          <UnorderedList>
            {Object.values(country.state.borders).map((border, index) => (
              <Link
                to={`/country/${getCountry(border)}`}
                key={index}
                state={country}
              >
                <ListItem key={index}>{border}</ListItem>
              </Link>
            ))}
          </UnorderedList>
        ) : (
          <Text>No borders countries</Text>
        )} */}
      </Card>
    </>
  );
}
