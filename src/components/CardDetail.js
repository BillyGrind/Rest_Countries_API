import { useParams } from "react-router-dom";

export default function CardDetail() {

    const {countryName} = useParams();

  return (
    <div>
      <h1>{countryName}</h1>

    </div>
  );
}