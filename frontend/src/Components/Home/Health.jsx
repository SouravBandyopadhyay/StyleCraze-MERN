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
  Container,
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
      <Text fontWeight="700"> Certified Personal Trainer</Text>
    </HStack>
  );
};

const HealthArticle = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" fontWeight="400" marginBottom="6">
        HEALTH & WELLNESS
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
                  "https://cdn2.stylecraze.com/wp-content/uploads/2021/08/HIIT-For-Fat-Loss-15-Exercises-For-Women-To-Burn-Fat-1.jpg.webp"
                }
                alt="brokenimg"
                objectFit="fill"
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
              HIIT For Fat Loss: 15 Exercises For Women To Burn Fat
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
            Have you tried HIIT for fat loss? HIIT (high-intensity interval
            training) burns fat effectively. In this form of exercise, you do
            small bursts of high-intensity exercises and space them out with
            resting phases. HIIT is effective for weight loss, toning...
          </Text>
          <BlogTags marginTop="3" tags={["Fitness", "Wellness", "Exercise"]} />
          <BlogAuthor name=" Rakesh Rathod" />
        </Box>
      </Box>
    </Container>
  );
};

export default HealthArticle;
