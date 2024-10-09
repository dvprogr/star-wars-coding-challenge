import { useQuery } from "@tanstack/react-query";
import { getApiFunctions } from "../api/api";
import { useMemo } from "react";
import { ApiFunctions } from "../types";
import { Container, Heading } from "@chakra-ui/react";
import CustomTabs from "../components/CustomTabs";

const Home = () => {
  const apiQuery = useQuery({ queryKey: ["api"], queryFn: getApiFunctions });

  const data: ApiFunctions = useMemo(() => {
    if (apiQuery.isSuccess && apiQuery.data?.data) {
      return apiQuery.data.data;
    }
    return [];
  }, [apiQuery]);

  if (apiQuery.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Container maxW={{ base: "100%", md: "90%", lg: "60%" }} p={2}>
      <Heading size="lg">Star Wars</Heading>
      <CustomTabs data={data} />
    </Container>
  );
};

export default Home;
