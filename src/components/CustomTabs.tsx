import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react/tabs";
import Films from "./tabs/Films";
import People from "./tabs/People";
import Planets from "./tabs/Planets";
import Species from "./tabs/Species";
import Starships from "./tabs/Starships";
import Vehicles from "./tabs/Vehicles";
import { ApiFunctions } from "../types";

const CustomTabs = ({ data }: { data: ApiFunctions }) => {
  return (
    <Tabs>
      <TabList marginBottom={2}>
        <Tab>Films</Tab>
        <Tab>People</Tab>
        <Tab>Planets</Tab>
        <Tab>Species</Tab>
        <Tab>Starships</Tab>
        <Tab>Vehicles</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Films filmApi={data.films} />
        </TabPanel>
        <TabPanel>
          <People filmApi={data.people} />
        </TabPanel>
        <TabPanel>
          <Planets filmApi={data.planets} />
        </TabPanel>
        <TabPanel>
          <Species filmApi={data.species} />
        </TabPanel>
        <TabPanel>
          <Starships filmApi={data.starships} />
        </TabPanel>
        <TabPanel>
          <Vehicles filmApi={data.vehicles} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CustomTabs;
