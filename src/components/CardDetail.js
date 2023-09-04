import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Image, Button } from "@chakra-ui/react";

export default function CardDetail() {
  let country = useLocation();
  console.log(country);

  return (
    <>
      <Navbar />
      <Link to={`/`}>
        <Button>Back</Button>
      </Link>
      <Image
        src={country.state.flags.svg}
        alt={country.state.name.common}
        borderRadius="lg"
      />
      <h2>{country.state.name.common}</h2>
      <p>Native Name: {country.state.name.nativeName.ara.official}</p>
      <p>Population: {country.state.population}</p>
      <p>Region: {country.state.region}</p>
      <p>Sub Region: {country.state.subregion}</p>
      <p>Capital: {country.state.capital}</p>
      <p>Top Level Domain: {country.state.tld}</p>
      <p>Currencies: {country.state.currencies.MRU.name}</p>
      <p>Languages : {country.state.languages.ara}</p>
      <p>Border Countries: {country.state.borders} </p>
    </>
  );
}
