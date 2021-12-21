import { Flex, Box, Avatar, Text, Stack, Tag, useColorMode } from "@chakra-ui/react";

const techs = ["Python", "Node.js", "HTML"];

export const Profile = () => {
  const { colorMode } = useColorMode();

  const borderColor = { light: "#fff", dark: "#F0EBFF" };

  const contentColor = { light: "#0E0333", dark: "#F0EBFF;" };

  const titleColor = { light: "#6F3FF5", dark: "#FFDB4C" };

  const techColor = { light: "#5932C4", dark: "#F0EBFF" };

  const bgTechColor = { light: "#F0EBFF", dark: "#5932C4" };
  return (
    <Flex
      pos="absolute"
      top="145%"
      left="50%"
      transform="translate(-50%,-50%)"
      align="center"
      direction="column"
      color={contentColor[colorMode]}
      fontSize="20px"
      fontFamily="'Libre Franklin', sans-serif"
    >
      <Avatar
        width={160}
        height={160}
        name="Dan Abrahmov"
        src="https://bit.ly/dan-abramov"
        border={`4px solid ${borderColor[colorMode]}`}
      />

      <Box mt="13px">
        <Text
          color={titleColor[colorMode]}
          fontSize="38px"
          fontFamily="'Space Mono', monospace, sans-serif"
        >
          Huxwell
        </Text>
      </Box>
      <Text>Open Source Software Engineer</Text>
      <Text mt="8px" mb="24px">
        City, Country
      </Text>
      <Stack direction="row">
        {techs.map((tech) => (
          <Tag
            key={tech}
            bg={bgTechColor[colorMode]}
            borderRadius="4px"
            color={techColor[colorMode]}
            fontSize="14px"
            p="2px 8px"
          >
            {tech}
          </Tag>
        ))}
      </Stack>
    </Flex>
  );
};
