import { useQuery } from "@tanstack/react-query";
import { getDataByApi } from "../../api/api";
import { useMemo } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Wrap,
  Text,
  Badge,
  CardFooter,
} from "@chakra-ui/react";
import {
  Films,
  People,
  Planets,
  Species,
  Starships,
  StarWarsType,
  Vehicles,
} from "../../types";

type GenericType = People | Vehicles | Planets | Films | Species | Starships;

const CustomTab = <T extends GenericType>({
  filmApi,
  type,
}: {
  filmApi: string | undefined;
  type: StarWarsType;
}) => {
  const queryKey = type.toString().toLowerCase();
  const apiQuery = useQuery({
    queryKey: [queryKey],
    queryFn: () => (filmApi ? getDataByApi(filmApi) : null),
  });

  const data: T = useMemo(() => {
    if (apiQuery.status === "success") {
      return apiQuery.data?.data.results;
    }
    return [];
  }, [apiQuery]);

  if (apiQuery.isError) {
    return <p>Error loading {queryKey}</p>;
  }

  return <Wrap>{mapData(data, type)}</Wrap>;
};

const mapData = <T extends GenericType>(data: T, type: StarWarsType) => {
  switch (type) {
    case StarWarsType.People: {
      return (data as People).map((v, i) => (
        <Card w={250} key={i} marginBottom={5}>
          <CardHeader>
            <Heading>{v.name}</Heading>
          </CardHeader>
          <CardBody>
            <Heading size="sm">Info</Heading>
            <Text>Height: {v.height}</Text>
            <Text>Hair color: {v.hair_color}</Text>
            <Text>Eye color: {v.eye_color}</Text>
            <Text>Birth year: {v.birth_year}</Text>
            <Text>Mass: {v.mass}</Text>
          </CardBody>
        </Card>
      ));
    }
    case StarWarsType.Planets: {
      return (data as Planets).map((v, i) => (
        <Card key={i} w={250} marginBottom={5} marginRight={2}>
          <CardHeader>
            <Heading>{v.name}</Heading>
          </CardHeader>
          <CardBody>
            <Heading size="sm">Planet stats</Heading>
            <Text>Climate: {v.climate}</Text>
            <Text>Diameter:{v.diameter}</Text>
            <Text>Gravity: {v.gravity}</Text>
            <Text>Population: {v.population}</Text>
            <Text>Terrain: {v.terrain}</Text>
          </CardBody>
        </Card>
      ));
    }
    case StarWarsType.Films: {
      return (data as Films).map((f, i) => (
        <Card key={i} w={250} marginBottom={5} marginRight={2}>
          <CardHeader>
            <Heading size="md">{f.title}</Heading>
          </CardHeader>
          <CardBody>
            <Badge>release date: {f.release_date}</Badge>
            <Text>{f.opening_crawl.substring(0, 50) + "..."}</Text>
          </CardBody>
          <CardFooter>Producer: {f.producer}</CardFooter>
        </Card>
      ));
    }
    case StarWarsType.Species: {
      return (data as Species).map((f, i) => (
        <Card key={i} w={250} marginBottom={5} marginRight={2}>
          <CardHeader>
            <Heading size="md">{f.name}</Heading>
          </CardHeader>
          <CardBody>
            <Heading size="sm">Info</Heading>
            <Text>Hair colors: {f.hair_colors}</Text>
            <Text>Eye colors:{f.eye_colors}</Text>
            <Text>Classification: {f.classification}</Text>
            <Text>Average height: {f.average_height}</Text>
            <Text>Average lifespan: {f.average_lifespan}</Text>
          </CardBody>
        </Card>
      ));
    }
    case StarWarsType.Vehicles: {
      return (data as Vehicles).map((f, i) => (
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
      ));
    }
    case StarWarsType.Starships: {
      return (data as Starships).map((f, i) => (
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
            <Text>MGLT: {f.mglt}</Text>
          </CardBody>
        </Card>
      ));
    }
  }
};

export default CustomTab;
