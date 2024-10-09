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

type Starship = {
  name: string;
  model: string;
  passengers: string;
  crew: string;
  consumables: string;
  cargo_capacity: string;
  mglt: string;
};

const Starships = ({ filmApi }: { filmApi: string | undefined }) => {
  const apiQuery = useQuery({
    queryKey: ["starships"],
    queryFn: () => (filmApi ? getDataByApi(filmApi) : null),
  });

  const data: Starship[] = useMemo(() => {
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
            <Heading size="sm">Info</Heading>
            <Text>Model: {f.model}</Text>
            <Text>Passengers: {f.passengers}</Text>
            <Text>Crew: {f.crew}</Text>
            <Text>Consumables: {f.consumables}</Text>
            <Text>Cargo capacity: {f.cargo_capacity}</Text>
            <Text>MGLT: {f.mglt}</Text>
          </CardBody>
        </Card>
      ))}
    </Wrap>
  );
};

export default Starships;
