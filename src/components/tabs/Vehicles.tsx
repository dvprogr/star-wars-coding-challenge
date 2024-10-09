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

type Vehicle = {
  name: string;
  passengers: string;
  crew: string;
  length: string;
  consumables: string;
  cargo_capacity: string;
};

const Vehicles = ({ filmApi }: { filmApi: string | undefined }) => {
  const apiQuery = useQuery({
    queryKey: ["vehicles"],
    queryFn: () => (filmApi ? getDataByApi(filmApi) : null),
  });

  const data: Vehicle[] = useMemo(() => {
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
            <Text>Passengers: {f.passengers}</Text>
            <Text>Crew: {f.crew}</Text>
            <Text>Consumables: {f.consumables}</Text>
            <Text>Cargo capacity: {f.cargo_capacity}</Text>
            <Text>Length: {f.length}</Text>
          </CardBody>
        </Card>
      ))}
    </Wrap>
  );
};

export default Vehicles;
