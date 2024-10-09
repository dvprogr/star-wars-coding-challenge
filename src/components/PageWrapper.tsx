import { Box, Text } from "@chakra-ui/react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      maxW={{ base: "100%" }}
      minH={"100vh"}
      p={10}
    >
      <>
        <div className="stars"></div>
        <div className="twinkling"></div>
        {/* could add meta information like title etc. would be overwork since we only have one page */}
        <div>{children}</div>
      </>

      <footer
        style={{
          textAlign: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>--- Star Wars 2024 ---</Text>
        <Text style={{ fontSize: 15 }}>Made by David Murad</Text>
      </footer>
    </Box>
  );
};

export default PageWrapper;
