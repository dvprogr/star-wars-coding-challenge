import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react/tabs";
import { ApiFunctions, StarWarsType } from "../../types";
import CustomTab from "./CustomTab";

const CustomTabs = ({ data }: { data: ApiFunctions }) => {
  return (
    <Tabs>
      <TabList marginBottom={2}>
        {Object.keys(data).map((k, i) => (
          <Tab key={i}>{k.toUpperCase()}</Tab>
        ))}
      </TabList>
      <TabPanels>
        <TabPanel>
          <CustomTab type={StarWarsType.People} filmApi={data.people} />
        </TabPanel>
        <TabPanel>
          <CustomTab type={StarWarsType.Planets} filmApi={data.planets} />
        </TabPanel>
        <TabPanel>
          <CustomTab type={StarWarsType.Films} filmApi={data.films} />
        </TabPanel>
        <TabPanel>
          <CustomTab type={StarWarsType.Species} filmApi={data.species} />
        </TabPanel>
        <TabPanel>
          <CustomTab type={StarWarsType.Vehicles} filmApi={data.vehicles} />
        </TabPanel>
        <TabPanel>
          <CustomTab type={StarWarsType.Starships} filmApi={data.starships} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default CustomTabs;
