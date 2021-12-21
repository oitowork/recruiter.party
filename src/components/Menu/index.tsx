import {
  Text,
  Button,
  Avatar,
  Menu as ChakraMenu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorMode,
} from "@chakra-ui/react";

import CopyIcon from "../../public/copy-icon.svg";
import ExternalIcon from "../../public/external-icon.svg";
import WalletIcon from "../../public/wallet-icon.svg";

const menuItems = [
  {
    title: "Copy Address",
    icon: CopyIcon,
  },
  {
    title: "View on Explorer",
    icon: ExternalIcon,
  },
  {
    title: "Change Wallet",
    icon: WalletIcon,
  },
];

export const Menu = () => {
  const { colorMode } = useColorMode();

  const borderColor = { light: "#C9B8FF", dark: "#5932C4" };

  const color = { light: "#0E0333", dark: "#F0EBFF" };

  const fillColor = { light: "#6F3FF5", dark: "#FFDB4C" };

  return (
    <ChakraMenu gutter={4}>
      <MenuButton
        w="192px"
        as={Button}
        variant="outline"
        leftIcon={<Avatar size="xs" name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />}
        borderColor={borderColor[colorMode]}
        color={color[colorMode]}
        textAlign="left"
        fontWeight="400"
        fontFamily="'Space Mono', monospace, sans-serif"
        _hover={{}}
        _active={{}}
        _focus={{}}
      >
        0x63AB...CC11
      </MenuButton>
      <MenuList w="192px" minW="100%" borderColor={borderColor[colorMode]} p="16px" bg="none">
        {menuItems.map(({ title, icon }, index) => {
          const Icon = icon;
          return (
            <MenuItem key={index} p="0" my={index === 1 ? "16px" : 0} _active={{}} _focus={{}}>
              <Icon fill={fillColor[colorMode]} />
              <Text as="span" ml="10px" fontWeight="400" fontFamily="'Libre Franklin', sans-serif">
                {title}
              </Text>
            </MenuItem>
          );
        })}
      </MenuList>
    </ChakraMenu>
  );
};
