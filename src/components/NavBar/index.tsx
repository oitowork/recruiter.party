import { useRouter } from "next/router";

import { Flex, Box, Text, useColorMode } from "@chakra-ui/react";
import { Menu } from "../Menu";

import RecruiterLogo from "../../public/recruiter-logo.svg";

export const NavBar = () => {
  const router = useRouter();

  const { colorMode } = useColorMode();

  const color = { light: "#0E0333", dark: "#F0EBFF" };

  return (
    <Flex justify="space-between" px={["2%", "3%", "4%", "24px", "48px"]} pt="48px">
      <Box d="flex" alignItems="center">
        <RecruiterLogo />
        <Text
          as="h2"
          color={color[colorMode]}
          fontSize="24px"
          ml="16px"
          fontFamily="'Space Mono', monospace, sans-serif"
        >
          recruiter.party
        </Text>
      </Box>
      {router.asPath === "/app/profile" && <Menu />}
    </Flex>
  );
};
