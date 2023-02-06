import React, { useEffect, useState } from "react";
import { Box, Flex, Image, chakra, SimpleGrid } from "@chakra-ui/react";

export default function BlogCard() {
  const [item, setItem] = useState([]);
  const getData = async () => {
    let res = await fetch("https://3y4mt2-8000.preview.csb.app/blogs");
    let data = res.json();
    data
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <SimpleGrid
      gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"]}
      w="full"
      alignItems="center"
      justifyContent="center"
      p={4}
      gap={4}
    >
      {item?.map((el) => (
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          mx="auto"
          key={el.title}
        >
          <Image
            bg="gray.300"
            maxH="container.sm"
            rounded="lg"
            shadow="md"
            src={el.blog_img}
          />
          <Box
            w={{
              base: 56,
              md: 64
            }}
            bg="white"
            mt={-10}
            shadow="lg"
            rounded="lg"
            overflow="hidden"
          >
            <chakra.h3
              p={2}
              py={2}
              textAlign="center"
              fontWeight="bold"
              textTransform="uppercase"
              color="gray.800"
              letterSpacing={1}
            >
              {el.title}
            </chakra.h3>
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  );
}
