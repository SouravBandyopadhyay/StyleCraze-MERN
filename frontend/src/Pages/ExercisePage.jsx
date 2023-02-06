import React, { useEffect, useState } from "react";
import { Box, Badge, SimpleGrid, Container, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const ExercisePage = () => {
  const [exe, setExe] = useState([]);
  const getData = async () => {
    let res = await fetch("https://3y4mt2-8000.preview.csb.app/exercise");
    let data = res.json();
    data
      .then((res) => {
        setExe(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container maxWidth="1200px" mx="auto" my="auto" p={{ base: 5, md: 10 }}>
      <SimpleGrid columns={[1, 2, 3]} spacing="15px">
        {exe?.map((el) => {
          return (
            <Box position="relative" key={el.id}>
              <Box
                fontSize="sm"
                position="absolute"
                right="5px"
                margin="5px"
                zIndex="1"
              >
                <Badge
                  rounded="full"
                  p="2px 8px"
                  colorScheme="red"
                  textTransform="uppercase"
                  as="button"
                >
                  {el.equipment ? "equipment required" : "no equipment"}
                </Badge>
              </Box>
              <Link to={`/fit/${el.id}`}>
                <Box
                  borderWidth="1px"
                  shadow="md"
                  rounded="lg"
                  overflow="hidden"
                  position="relative"
                >
                  <Image
                    p={2}
                    src={el.demo}
                    alt="Exercise gif"
                    objectFit={"fit"}
                  />
                  <Box p={{ base: 4, lg: 6 }}>
                    <Box d="flex" alignItems="baseline">
                      <Box
                        fontWeight="semibold"
                        as="h2"
                        letterSpacing="wide"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {el.name}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Link>
            </Box>
          );
        })}
      </SimpleGrid>
    </Container>
  );
};

export default ExercisePage;
