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

type Species = {
  name: string;
  hair_colors: string;
  eye_colors: string;
  classification: string;
  average_height: string;
  average_lifespan: string;
};

const Species = ({ filmApi }: { filmApi: string | undefined }) => {
  const apiQuery = useQuery({
    queryKey: ["species"],
    queryFn: () => (filmApi ? getDataByApi(filmApi) : null),
  });

  const data: Species[] = useMemo(() => {
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
      <Heading size="lg">Species</Heading>
      <Wrap>
        {data.map((f, i) => (
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
        ))}
      </Wrap>
    </>
  );
};

export default Species;
