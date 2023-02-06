import React from "react";
import {
  Box,
  Flex,
  Image,
  Link,
  chakra,
  Button,
  Text,
  HStack,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
export default function Profile() {
  const { userInfo } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  return (
    <Box>
      <Text>Welcome {userInfo?.firstName.toUpperCase()}</Text>
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          w="xs"
          bg="white"
          shadow="lg"
          rounded="lg"
          overflow="hidden"
          mx="auto"
        >
          <Image
            w="full"
            h={56}
            fit="cover"
            src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
          />

          <Box py={5} textAlign="center">
            <Text
              display="block"
              fontSize="lg"
              color="gray.800"
              fontWeight="bold"
            >
              You have {cart.cartItems.length} items in cart
            </Text>
            <NavLink to="/prod">
              <Box>
                <Button bottom="0" marginTop="2" bg="#E4C988">
                  <Icon as={FaShoppingBag} color="white" />
                  &nbsp; Continue to Shipping
                </Button>
              </Box>
            </NavLink>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
