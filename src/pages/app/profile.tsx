import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { ContactInfo } from "../../components/ContactInfo";
import { CoverPhoto } from "../../components/CoverPhoto";
import { CreateProfile } from "../../components/CreateProfile";
import { Experiences } from "../../components/Experiences";
import { NavBar } from "../../components/NavBar";

const ProfileApp = () => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "#FFFFFF", dark: "#0E0333" };
  return (
    <Box bg={bgColor[colorMode]}>
      <NavBar />
      <CoverPhoto />

      <Flex
        maxW="1110px"
        mx="auto"
        direction={["column", , "row"]}
        justify="space-between"
        align={["center", , "flex-start"]}
        mt="380px"
      >
        <Experiences />
        <ContactInfo />
      </Flex>
      <CreateProfile />
    </Box>
  );
};

export default ProfileApp;
