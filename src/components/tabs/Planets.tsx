import { useQuery } from "@tanstack/react-query";
import { getDataByApi } from "../../api/api";
import { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Text,
  Wrap,
} from "@chakra-ui/react";

type Planets = {
  name: string;
  climate: string;
  diameter: string;
  gravity: string;
  population: string;
  terrain: string;
};

const Planets = ({ filmApi }: { filmApi: string | undefined }) => {
  const apiQuery = useQuery({
    queryKey: ["planets"],
    queryFn: () => (filmApi ? getDataByApi(filmApi) : null),
  });

  const data: Planets[] = useMemo(() => {
    if (apiQuery.status === "success") {
      return apiQuery.data?.data.results;
    }
    return [];
  }, [apiQuery]);

  if (apiQuery.isError) {
    return <p>Error loading Films</p>;
  }

  return (
    <Wrap>
      {data.map((f, i) => (
        <Card key={i} w={250} marginBottom={5} marginRight={2}>
          <CardHeader>
            <Heading size="md">{f.name}</Heading>
          </CardHeader>
          <CardBody>
            <Heading size="sm">Planet stats</Heading>
            <Text>Climate: {f.climate}</Text>
            <Text>Diameter:{f.diameter}</Text>
            <Text>Gravity: {f.gravity}</Text>
            <Text>Population: {f.population}</Text>
            <Text>Terrain: {f.terrain}</Text>
          </CardBody>
        </Card>
      ))}
    </Wrap>
  );
};

export default Planets;
