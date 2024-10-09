import { useQuery } from "@tanstack/react-query";
import { getDataByApi } from "../../api/api";
import { useMemo } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Wrap,
} from "@chakra-ui/react";

type Film = {
  title: string;
  opening_crawl: string;
  release_date: string;
  producer: string;
  url: string;
  episode_id: number;
  director: string;
};

const Films = ({ filmApi }: { filmApi: string | undefined }) => {
  const apiQuery = useQuery({
    queryKey: ["films"],
    queryFn: () => (filmApi ? getDataByApi(filmApi) : null),
  });

  const data: Film[] = useMemo(() => {
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
            <Heading size="md">{f.title}</Heading>
          </CardHeader>
          <CardBody>
            <Badge>release date: {f.release_date}</Badge>
            <Text>{f.opening_crawl.substring(0, 50) + "..."}</Text>
          </CardBody>
          <CardFooter>Producer: {f.producer}</CardFooter>
        </Card>
      ))}
    </Wrap>
  );
};

export default Films;
