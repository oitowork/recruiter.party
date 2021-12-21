import { useRouter } from "next/router";

import Link from "next/link";

import { Flex, Box, Text, useColorMode, Link as ChakraLink } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

import { Profile } from "../../components/Profile";

export const CoverPhoto = () => {
  const router = useRouter();

  const { colorMode } = useColorMode();

  const titleColor = { light: "#6F3FF5", dark: "#FFDB4C" };

  return (
    <Box maxW="1110px" mx="auto" mt="48px">
      <Link href="/">
        <ChakraLink color={titleColor[colorMode]}>
          <ChevronLeftIcon />
          <Text as="span">Back</Text>
        </ChakraLink>
      </Link>
      <Box pos="relative" h="305px" bg="#C9B8FF" mt="27px" borderRadius="4px">
        <Profile />
      </Box>
    </Box>
  );
};
