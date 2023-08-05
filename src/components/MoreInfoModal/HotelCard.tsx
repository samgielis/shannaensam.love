import {
  Card,
  CardBody,
  chakra,
  Heading,
  HStack,
  Link,
  Spacer,
  Stack,
  Tag,
} from "@chakra-ui/react";

interface HotelCardProps {
  name: string;
  distanceKm: number;
  address: string;
  url: string;
}
export const HotelCard = ({
  name,
  distanceKm,
  address,
  url,
}: HotelCardProps) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <CardBody>
        <Stack>
          <Heading size="md" fontFamily={"Quicksand"}>
            <HStack>
              <chakra.span>{name}</chakra.span>
              <Spacer />
              <Tag
                fontFamily={"body"}
                variant={"solid"}
                colorScheme="loveCopper"
              >
                {distanceKm} km
              </Tag>
            </HStack>
          </Heading>

          <Stack direction={["column", "row"]} fontSize={["md", "lg"]}>
            <chakra.span color={"gray.500"}>{address}</chakra.span>
            <Link
              colorScheme={"green"}
              color="bermuda.500"
              href={url}
              isExternal
            >
              {url.split("/")[0]}
            </Link>
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};
