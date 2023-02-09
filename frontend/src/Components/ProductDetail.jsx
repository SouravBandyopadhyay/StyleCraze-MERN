import {
  Box,
  Flex,
  Image,
  chakra,
  Button,
  IconButton,
  HStack,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
// import { useGetAllProductsQuery } from "../Redux/productsApi";
import { addToCart } from "../Redux/cartSlice";
import { FaLock } from "react-icons/fa";
const ProductDetail = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const toast = useToast();
  const url = `https://stylecraze-backend.onrender.com/prod/getprod/${params.id}`;
  // console.log(url);
  const getData = async () => {
    let res = await fetch(url);
    let data = res.json();
    data.then((res) => {
      // console.log(res);
      setItem(res);
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state.auth);
  // const { data, isLoading } = useGetAllProductsQuery();
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
  useEffect(() => {
    getData();
  }, []);
  return (
    <Flex
      bg="#FFFFE8"
      p={50}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box mx="auto" rounded="lg" shadow="md" bg="white" maxW="lg">
        <Image
          borderRadius="md"
          w="full"
          fit="contain"
          src={item.image_src}
          alt="Product Image"
          boxSize="md"
          margin="auto"
        />

        <Box p={6}>
          <Box>
            <chakra.span
              fontSize="md"
              textTransform="uppercase"
              color="brand.800"
            >
              {item.name}
            </chakra.span>
            <chakra.p
              mt={2}
              fontSize="sm"
              color="gray.600"
              _dark={{
                color: "gray.400",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie
              parturient et sem ipsum volutpat vel. Natoque sem et aliquam
              mauris egestas quam volutpat viverra. In pretium nec senectus
              erat. Et malesuada lobortis.
            </chakra.p>
          </Box>

          <Box mt={4}>
            {userInfo ? (
              <HStack gap="4" margin="auto" justifyContent="center">
                <chakra.span fontWeight="bold" size="lg" color="gray.800">
                  &#8377; {item.cost}
                </chakra.span>
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
                  onClick={() => handleAddToCart(item)}
                >
                  Add to cart
                </Button>
              </HStack>
            ) : (
              <IconButton
                variant="outline"
                colorScheme="teal"
                aria-label="Locked"
                icon={<FaLock />}
                size="lg"
              />
            )}
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
export default ProductDetail;
