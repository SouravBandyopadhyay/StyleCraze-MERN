import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../Redux/cartSlice";
import {
  Container,
  Box,
  chakra,
  Flex,
  VStack,
  HStack,
  Icon,
  Text,
  Button,
  IconButton,
  SimpleGrid,
  Image,
  useToast,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { FaTrashAlt, FaArrowRight } from "react-icons/fa";
import EmptyCart from "../Components/EmptyCart";
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const toast = useToast();
  const { cartTotalQuantity } = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast({
      title: "Product Removed ",
      description: "Item Removed from Cart",
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };
  const handleClearCart = () => {
    dispatch(clearCart());
    toast({
      title: "You Emptied Cart ",
      description: "Oops your Cart is Empty",
      status: "error",
      duration: 1000,
      isClosable: true,
    });
  };
  return (
    <>
      {cart.cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <SimpleGrid gridTemplateColumns={["1fr", "5fr 2fr"]} gap="4" p={2}>
          <Container maxW="5xl" p={{ base: 5, md: 10 }}>
            <Flex justify="left" mb={3}>
              <chakra.h2 fontSize="2xl" fontWeight="bold" textAlign="center">
                Cart Items:{cart.cartItems.length}
              </chakra.h2>
            </Flex>
            <VStack
              border="1px solid"
              borderColor="gray.400"
              rounded="md"
              overflow="hidden"
              spacing={2}
              p={4}
            >
              {cart.cartItems &&
                cart.cartItems.map((el) => (
                  <HStack
                    key={el.id}
                    p={2}
                    justifyContent="space-between"
                    w="full"
                  >
                    <HStack
                      justifyContent="space-between"
                      maxW="400px"
                      spacing={0}
                    >
                      <Box ml="0 !important">
                        <Image
                          rounded="lg"
                          w={{ base: "100%", md: "18rem" }}
                          maxH="-webkit-fit-content"
                          objectFit="contain"
                          src={el.image_src}
                          alt="product image"
                          boxSize="150px"
                        />
                      </Box>
                      <Text textAlign="left">{el.title}</Text>
                    </HStack>
                    <Text fontWeight="bold">&#8377;{el.cost}</Text>
                    <IconButton
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<AddIcon />}
                      onClick={() => handleAddToCart(el)}
                    />
                    <Text>{el.cartQuantity}</Text>
                    <IconButton
                      variant="outline"
                      colorScheme="teal"
                      aria-label="Call Sage"
                      fontSize="20px"
                      icon={<MinusIcon />}
                      onClick={() => handleDecreaseCart(el)}
                    />
                    <IconButton
                      colorScheme="red"
                      variant="outline"
                      aria-label="Call Segun"
                      size="lg"
                      icon={<FaTrashAlt />}
                      onClick={() => handleRemoveFromCart(el)}
                    />
                  </HStack>
                ))}
              <Box>
                <Button
                  fontWeight="600"
                  bgColor="black"
                  color="white"
                  borderRadius="md"
                  _hover={{
                    bg: "#FD8A8A",
                  }}
                  onClick={() => handleClearCart()}
                >
                  Clear Cart
                </Button>
              </Box>
            </VStack>
          </Container>
          {/* Order Summary Content */}
          <Container marginTop="5" p={{ base: 5, md: 10 }} borderRadius="md">
            <chakra.h3 fontSize="lg" fontWeight="bold" textAlign="left">
              Order Summary
            </chakra.h3>
            <VStack p={1} justifyContent="center" alignContent="center">
              <HStack width="full" justify="space-between">
                <Text>Subtotal</Text>
                <Text> &#8377; {cart.cartTotalAmount}</Text>
              </HStack>
              <HStack width="full" justify="space-between">
                <Text>Shipping + Tax</Text>
                <Text> &#8377; {(cart.cartTotalAmount * 0.18).toFixed(2)}</Text>
              </HStack>
              <HStack width="full" justify="space-between">
                <Text>Total Quantity</Text>
                <Text>{cartTotalQuantity}</Text>
              </HStack>
              <HStack
                fontWeight="bold"
                width="full"
                fontSize="lg"
                justify="space-between"
              >
                <Text>Total</Text>
                <Text>
                  &#8377;{" "}
                  {(cart.cartTotalAmount + cart.cartTotalAmount * 0.18).toFixed(
                    2
                  )}
                </Text>
              </HStack>
              <Button
                bottom="0"
                marginTop="2"
                width="full"
                colorScheme="messenger"
              >
                Checkout &nbsp;
                <Icon as={FaArrowRight} color="white" />
              </Button>
            </VStack>
          </Container>
        </SimpleGrid>
      )}
    </>
  );
};

export default Cart;
