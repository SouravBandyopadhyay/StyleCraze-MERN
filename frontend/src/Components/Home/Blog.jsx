import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  HStack,
  Tag,
  useColorModeValue,
  Container
} from "@chakra-ui/react";

const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="pink" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Text fontWeight="700">Reviewed by</Text>
      <Text fontWeight="700" color="pink.400">
        {props.name}
      </Text>
      <Text fontWeight="700">Licensed Esthetician</Text>
    </HStack>
  );
};

const ArticleList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" fontWeight="400" marginBottom="6">
        MAKEUP
      </Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://cdn2.stylecraze.com/wp-content/uploads/2022/04/Amazing-Prom-Makeup-Ideas-And-Tips-To-Follow-In-2022-1-1.jpg.webp"
                }
                alt="brokenimg"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <Heading marginTop="1" size="lg" textAlign="left">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Amazing Prom Makeup Ideas And Tips To Follow In
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="md"
            textAlign="left"
            noOfLines="6"
          >
            Prom season is just around the corner, and let us get one thing
            straight — events may come and go, but a prom night rules them all.
            So naturally, you need to get your hands on the best prom makeup
          </Text>
          <BlogTags marginTop="3" tags={["Makeup", "Product", "Style"]} />
          <BlogAuthor name="Daria Kruchinina" />
        </Box>
      </Box>
    </Container>
  );
};

export default ArticleList;
