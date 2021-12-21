import { Flex, Text, Button, List, ListItem, useColorMode } from "@chakra-ui/react";

const contacts = ["Locked1", "Locked2", "Locked3"];

export const ContactInfo = () => {
  const { colorMode } = useColorMode();

  const borderColor = { light: "#C9B8FF", dark: "#0E0333" };

  const contactColor = { light: "#757087", dark: "#C9B8FF" };

  const buttonColor = { light: "#fff", dark: "#0E0333" };
  
  const bgButtonColor = { light: "#6F3FF5", dark: "#FFDB4C" };

  return (
    <Flex
      direction="column"
      justify="space-between"
      w="350px"
      h="375px"
      borderRadius="8px"
      border={`1px solid ${borderColor[colorMode]}`}
      p="36px"
      fontFamily="'Libre Franklin', sans-serif"
    >
      <Text
        as="h2"
        color="#8C65F7"
        fontSize="24px"
        fontFamily="'Space Mono', monospace, sans-serif"
      >
        Contact Info
      </Text>
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact} fontSize="20px" color={contactColor[colorMode]} mt="24px">
            {contact}
          </ListItem>
        ))}
      </List>
      <Button
        w="100%"
        h="56px"
        fontSize="16px"
        fontWeight="600"
        color={buttonColor[colorMode]}
        bg={bgButtonColor[colorMode]}
        variant="unstyled"
        mt="36px"
        _focus={{}}
      >
        Unlock Contact
      </Button>
    </Flex>
  );
};
