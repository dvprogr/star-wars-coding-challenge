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

type People = {
  name: string;
  height: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  mass: string;
};

const People = ({ filmApi }: { filmApi: string | undefined }) => {
  const apiQuery = useQuery({
    queryKey: ["people"],
    queryFn: () => (filmApi ? getDataByApi(filmApi) : null),
  });

  const data: People[] = useMemo(() => {
    if (apiQuery.status === "success") {
      return apiQuery.data?.data.results;
    }
    return [];
  }, [apiQuery]);

  if (apiQuery.isError) {
    return <p>Error loading Films</p>;
  }

  return (
    <>
      <Heading size="lg">People</Heading>
      <Wrap>
        {data.map((f, i) => (
          <Card key={i} w={250} marginBottom={5} marginRight={2}>
            <CardHeader>
              <Heading size="md">{f.name}</Heading>
            </CardHeader>
            <CardBody>
              <Heading size="sm">Characteristics</Heading>
              <Text>Height: {f.height}</Text>
              <Text>Hair color:{f.hair_color}</Text>
              <Text>Eye color: {f.eye_color}</Text>
              <Text>Birth year: {f.birth_year}</Text>
              <Text>Mass: {f.mass}</Text>
            </CardBody>
          </Card>
        ))}
      </Wrap>
    </>
  );
};

export default People;
