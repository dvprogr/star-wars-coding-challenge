import { useQuery } from "@tanstack/react-query";
import { getApiFunctions } from "../api/api";
import { useMemo } from "react";
import { ApiFunctions } from "../types";
import { Heading, Spinner } from "@chakra-ui/react";
import CustomTabs from "../components/tabs/CustomTabs";
import PageWrapper from "../components/PageWrapper";

const Home = () => {
  const apiQuery = useQuery({ queryKey: ["api"], queryFn: getApiFunctions });

  const data: ApiFunctions = useMemo(() => {
    if (apiQuery.isSuccess && apiQuery.data?.data) {
      return apiQuery.data.data;
    }
    return [];
  }, [apiQuery]);

  return (
    <PageWrapper>
      <Heading size="lg" paddingY={4} textAlign="center">
        Star Wars
      </Heading>
      {apiQuery.isLoading ? <Spinner /> : <CustomTabs data={data} />}
    </PageWrapper>
  );
};

export default Home;
