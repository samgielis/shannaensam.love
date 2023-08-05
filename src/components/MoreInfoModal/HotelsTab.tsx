import { Stack } from "@chakra-ui/react";
import { HotelCard } from "./HotelCard";

export const HotelsTab = () => {
  return (
    <Stack>
      <HotelCard
        name="B & B “De Meren”"
        address="Merenstraat 40, Langdorp"
        distanceKm={1}
        url="demeren.com"
      />
      <HotelCard
        name="B & B “Zinnen en minnen”"
        address="Kipdorp 11, Herselt"
        distanceKm={7}
        url="zinnen-en-minnen.be"
      />
      <HotelCard
        name="Hotel ‘s Hertogenmolens"
        address="Demerstraat 1, Aarschot"
        distanceKm={6}
        url="lodge-hotels.be/nl/hotels/b/s-hertogenmolens-aarschot"
      />
      <HotelCard
        name="B & B “De Zil”"
        address="Zillekespad 2, Herselt"
        distanceKm={6}
        url="dezil.be"
      />
      <HotelCard
        name="B & B Ramslo"
        address="Oude Steenovenweg 35, Ramsel"
        distanceKm={7}
        url="ramslo.be"
      />
      <HotelCard
        name="Charmehotel “Pluimpapaver”"
        address="Nopstal 51, Rillaar"
        distanceKm={8}
        url="pluimpapaver.eu"
      />
      <HotelCard
        name="B & B “De Winning”"
        address="Brielstraat 35, Messelbroek"
        distanceKm={10}
        url="dewinningmesselbroek.be"
      />
      <HotelCard
        name="B & B “Vossendries”"
        address="Grootveld 1, Nieuwrode"
        distanceKm={11}
        url="vossendries.com"
      />
      <HotelCard
        name="B & B “Mon Dieu”"
        address="Molenstraat 36, Scherpenheuvel"
        distanceKm={12}
        url="mon-dieu.be"
      />
    </Stack>
  );
};
