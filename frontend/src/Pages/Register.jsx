import React from "react";
import {
  chakra,
  Box,
  GridItem,
  Button,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  VisuallyHidden,
  Input
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { registerUser } from "../Redux/authActions";
export default function Register() {
  const { loading, userInfo, error, success } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) navigate("/profile");
    if (success) navigate("/login");
  }, [navigate, userInfo, success]);
  const submitForm = (data) => {
    dispatch(registerUser(data));
  };

  return (
    <Box px={8} py={24} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{ base: "full", xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <GridItem
          colSpan={{ base: "auto", lg: 7 }}
          textAlign={{ base: "center", lg: "left" }}
        >
          <chakra.h1
            mb={4}
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="bold"
            lineHeight={{ base: "shorter", md: "none" }}
            color="gray.900"
            letterSpacing={{ base: "normal", md: "tight" }}
          >
            Ready to <chakra.span color={"pink.300"}> Get Fit ?</chakra.span>
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="thin"
            color="gray.500"
            letterSpacing="wider"
          >
            StyleCraze is committed to giving you access to the most authentic,
            useful, and practical information about beauty, health, and wellness
            available on the internet. We provide answers in all spheres to
            celebrate unique needs and individuality.
          </chakra.p>
        </GridItem>
        <GridItem colSpan={{ base: "auto", md: 4 }}>
          <Box
            as="form"
            mb={6}
            rounded="lg"
            shadow="xl"
            onSubmit={handleSubmit(submitForm)}
          >
            <Center pb={0} color="gray.700" _dark={{ color: "gray.600" }}>
              <chakra.p pt={2}>Fill Your Credentials</chakra.p>
            </Center>
            <SimpleGrid
              columns={1}
              px={6}
              py={4}
              spacing={4}
              borderBottom="solid 1px"
              _dark={{ color: "gray.700" }}
            >
              <Flex>
                <VisuallyHidden>Name</VisuallyHidden>
                <Input
                  {...register("firstName")}
                  required
                  mt={0}
                  type="text"
                  placeholder="Name"
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Email Address</VisuallyHidden>
                <Input
                  {...register("email")}
                  required
                  mt={0}
                  type="email"
                  placeholder="Email Address"
                />
              </Flex>
              <Flex>
                <VisuallyHidden>Password</VisuallyHidden>
                <Input
                  {...register("password")}
                  required
                  mt={0}
                  type="password"
                  placeholder="Password"
                />
              </Flex>
              <Button
                color="white"
                colorScheme="green"
                w="full"
                py={2}
                type="submit"
              >
                Sign up for free
              </Button>
            </SimpleGrid>
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
