// posts array in the Redux store by using the useSelector hook from react-redux
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  Image,
  SimpleGrid,
  Text,
  chakra,
  Icon,
  HStack,
} from "@chakra-ui/react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useToast } from "@chakra-ui/react";
const Products = ({ filter }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const { items, filteredPosts } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const toast = useToast();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast({
      title: "Product Added ",
      description: "We've added your Item into Cart.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <>
      <Text>
        showing {filter ? filteredPosts.length : items.length} posts of total{" "}
        {items.length} posts
      </Text>
      {/* Product Grid */}
      <SimpleGrid
        gridTemplateColumns={["1fr", "1fr 1fr ", "1fr 1fr 1fr 1fr"]}
        p={2}
        gap="5"
      >
        {/* withour filter */}
        {!filter &&
          items.map((el) => (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              p={4}
              mx="auto"
              key={el._id}
              pos="relative"
            >
              {el.brand && (
                <HStack
                  alignItems="left"
                  justifyContent="start"
                  p="1"
                  bg="red.400"
                  pos="absolute"
                  fontSize="xs"
                  fontWeight="500"
                  color="white"
                  top={4}
                  left={4}
                  letterSpacing="1.1px"
                  textTransform="uppercase"
                  borderTopLeftRadius="lg"
                >
                  <Text>{el.category}</Text> &nbsp;{" "}
                  <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
                </HStack>
              )}

              <Image
                bg="gray.600"
                maxH="sm"
                rounded="lg"
                shadow="md"
                objectFit="fit"
                src={el.image_src}
              />

              <Box
                bg="orange.100"
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                maxWidth="90%"
                minWidth="80%"
              >
                <Text
                  as="h3"
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.800"
                  size="md"
                  fontSize="sm"
                  p={2}
                  w="full"
                >
                  <Link to={`getprod/${el._id}`}> {el.name}</Link>
                </Text>

                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg="gray.200"
                >
                  {/* if userinfo is available then conditional */}
                  {userInfo ? (
                    <HStack w="full" gap="4" justifyContent="space-between">
                      <Button
                        bg="gray.800"
                        fontSize="xs"
                        fontWeight="bold"
                        color="white"
                        px={2}
                        py={1}
                        rounded="lg"
                        textTransform="uppercase"
                        _hover={{
                          bg: "#FD8A8A",
                        }}
                        onClick={() => handleAddToCart(el)}
                      >
                        Add to cart
                      </Button>
                      <chakra.span fontWeight="bold" size="lg" color="gray.800">
                        &#8377; {el.cost}
                      </chakra.span>
                    </HStack>
                  ) : (
                    <chakra.span
                      w="full"
                      fontWeight="bold"
                      size="lg"
                      color="gray.800"
                    >
                      &#8377; {el.cost}
                    </chakra.span>
                  )}
                </Flex>
              </Box>
            </Flex>
          ))}
        {/* with filter */}
        {filter &&
          filteredPosts.map((el) => (
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
              mx="auto"
              key={el._id}
              p={4}
              pos="relative"
            >
              {el.brand && (
                <HStack
                  alignItems="left"
                  justifyContent="start"
                  p="1"
                  bg="red.400"
                  pos="absolute"
                  fontSize="xs"
                  fontWeight="bold"
                  color="white"
                  top={4}
                  left={4}
                  letterSpacing="1.1px"
                  textTransform="uppercase"
                  borderTopLeftRadius="lg"
                >
                  <Text>{el.category}</Text> &nbsp;{" "}
                  <Icon as={AiOutlineExclamationCircle} h={4} w={4} />
                </HStack>
              )}
              <Image
                bg="gray.600"
                maxH="sm"
                rounded="lg"
                shadow="md"
                objectFit="fit"
                src={el.image_src}
              />

              <Box
                bg="orange.100"
                mt={-10}
                shadow="lg"
                rounded="lg"
                overflow="hidden"
                maxWidth="90%"
                minWidth="80%"
              >
                <Text
                  as="h3"
                  py={2}
                  textAlign="center"
                  fontWeight="bold"
                  textTransform="uppercase"
                  color="gray.800"
                  size="md"
                  fontSize="sm"
                  p={2}
                >
                  <Link to={`getprod/${el._id}`}> {el.name}</Link>
                </Text>

                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  py={2}
                  px={3}
                  bg="gray.200"
                >
                  {/* if userinfo is available then conditional */}
                  {userInfo ? (
                    <>
                      <Button
                        bg="gray.800"
                        fontSize="xs"
                        fontWeight="bold"
                        color="white"
                        px={2}
                        py={1}
                        rounded="lg"
                        textTransform="uppercase"
                        _hover={{
                          bg: "#FD8A8A",
                        }}
                        onClick={() => handleAddToCart(el)}
                      >
                        Add to cart
                      </Button>
                      <chakra.span fontWeight="bold" size="lg" color="gray.800">
                        &#8377; {el.cost}
                      </chakra.span>
                    </>
                  ) : (
                    <chakra.span
                      w="full"
                      fontWeight="bold"
                      size="lg"
                      color="gray.800"
                    >
                      &#8377; {el.cost}
                    </chakra.span>
                  )}
                </Flex>
              </Box>
            </Flex>
          ))}
      </SimpleGrid>
    </>
  );
};
export default Products;
