import {
  Flex,
  Box,
  Avatar,
  Text,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { Select, AsyncSelect, CreatableSelect, AsyncCreatableSelect } from "chakra-react-select";

import React, { Component } from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const customStyles = {
  menu: (provided, state) => ({
    ...provided,
    width: state.selectProps.width,
    borderBottom: "1px dotted pink",
    color: state.selectProps.menuColor,
    padding: 20,
  }),
};

export const CreateProfile = () => {
  return (
    <Box maxW="1110px" mx="auto" fontFamily="'Libre Franklin', sans-serif">
      <Text
        color="#6F3FF5"
        fontSize="32px"
        fontFamily="'Space Mono', monospace, sans-serif"
        mb="48px"
      >
        Build your Profile
      </Text>
      <form>
        <FormControl id="name" mb="48px">
          <FormLabel>Name</FormLabel>
          <Input type="text" placeholder="Placeholder" />
        </FormControl>

        <FormControl id="description" mb="48px">
          <FormLabel>Description</FormLabel>
          <Text>This is a description</Text>
          <Textarea resize="none" placeholder="Placeholder" />
        </FormControl>

        <FormControl id="skills" mb="48px">
          <FormLabel>Skills</FormLabel>
          <Text>This is a description</Text>
          <Select styles={customStyles} isMulti options={options} />
        </FormControl>

        <FormControl id="title" mb="48px">
          <FormLabel>Title</FormLabel>
          <Text>This is a description</Text>
          <Input />
        </FormControl>

        <FormControl id="title">
          <FormLabel>Title</FormLabel>
          <Text>This is a description</Text>

          <VStack align="left">
            <Checkbox colorScheme="purple">Option 1</Checkbox>
            <Checkbox colorScheme="purple">Option 2</Checkbox>
          </VStack>
        </FormControl>
      </form>
    </Box>
  );
};
