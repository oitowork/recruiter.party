import { Box, Text, List, ListItem, Divider, useColorMode } from "@chakra-ui/react";
//#8C65F7
export const Experiences = () => {
  return (
    <Box maxW="628px">
      <Text
        color="#8C65F7"
        fontSize="24px"
        mb="24px"
        fontFamily="'Space Mono', monospace, sans-serif"
      >
        Experiences
      </Text>
      <List>
        {Array(2)
          .fill("")
          .map((_, i) => (
            <Experience key={i} />
          ))}
      </List>
    </Box>
  );
};

function Experience() {
  const { colorMode } = useColorMode();

  const contentColor = { light: "#0E0333", dark: "#F0EBFF" };

  const dividerColor = { light: "#E2E0E7", dark: "#5932C4" };

  return (
    <ListItem fontSize="20px" fontFamily="'Libre Franklin', sans-serif">
      <Text color={contentColor[colorMode]}>Lead Engineer</Text>
      <Text color="#8C65F7" mb="16px">
        Company 1 • 1 year 4 mo (2010 - Present)
      </Text>

      <Text maxW="500px" color={contentColor[colorMode]} mb="36px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet,
        consectetur adipiscing elit
      </Text>
      <Divider borderColor={dividerColor[colorMode]} mb="24px" />
    </ListItem>
  );
}
