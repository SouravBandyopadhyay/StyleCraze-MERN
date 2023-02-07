import React from "react";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Text,
  Avatar,
  UnorderedList,
  HStack,
  Flex,
} from "@chakra-ui/react";
const Searching = ({ value, onChange, searchResult, searchQuery }) => {
  return (
    <Flex
      boxSized="full"
      h="20vh"
      width="full"
      position="relative"
      margin="auto"
      zIndex="2"
      p={30}
      justifyContent="center"
    >
      <Box w="50%">
        <Input
          width="full"
          placeholder="Search Here"
          value={value}
          onChange={onChange}
          type="text"
        />

        <UnorderedList w="full" p={2} borderRadius="md">
          {searchQuery &&
            searchResult.map(({ id, name, image_src }) => (
              <HStack
                width="full"
                bg={"blue.50"}
                align="center"
                justifyContent="left"
                margin="auto"
                p={2}
                spacing={2}
              >
                <Avatar size="sm" name={name} src={image_src} />
                <Text key={id} fontSize={["sm", "md"]}>
                  {name}
                </Text>
              </HStack>
            ))}
        </UnorderedList>
      </Box>
    </Flex>
  );
};
export default Searching;
