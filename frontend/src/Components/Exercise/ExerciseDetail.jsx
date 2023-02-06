import {
  chakra,
  Container,
  Stack,
  HStack,
  VStack,
  Flex,
  Text,
  Image,
  Box,
  OrderedList,
  ListItem,
  Heading,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const [item, setItem] = useState({});
  const params = useParams();
  const url = `https://3y4mt2-8000.preview.csb.app/exercise/${params.id}`;

  const getData = async () => {
    let res = await fetch(url);
    let data = res.json();
    data.then((res) => {
      console.log(res);
      setItem(res);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <Container maxW="6xl" py={5}>
      <chakra.h2
        fontSize="4xl"
        fontWeight="bold"
        textAlign="center"
        mb={2}
        color="#913175"
      >
        {item.name}
      </chakra.h2>
      <HStack
        width="full"
        bg="#FFCEFE"
        fontSize="xl"
        spacing={2}
        p={2}
        borderRadius="md"
      >
        <Text fontWeight="bold"> Primary Target Muscle:</Text>
        {item.primary_muscle?.map((el) => (
          <Text textTransform="capitalize">{el}</Text>
        ))}
      </HStack>
      <HStack
        width="full"
        bg="#FFCEFE"
        fontSize="xl"
        spacing={2}
        p={2}
        marginTop={4}
        borderRadius="md"
      >
        <Text fontWeight="bold"> Secondary Target Muscle:</Text>
        {item.secondary_muscle?.map((el) => (
          <Text textTransform="capitalize">{el}</Text>
        ))}
      </HStack>

      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 0, md: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <VStack
          spacing={2}
          alignItems="flex-start"
          mb={{ base: 2, md: 0 }}
          maxW="md"
        >
          <Heading
            bg="#FFCEFE"
            p={2}
            width="full"
            as="h3"
            textAlign="left"
            fontSize="2xl"
            borderRadius="md"
          >
            Instruction
          </Heading>
          <OrderedList spacing={3}>
            {item.instruction?.map((el, index) => (
              <ListItem textAlign="left" fontSize="xl" key={index}>
                {el}
              </ListItem>
            ))}
          </OrderedList>
        </VStack>
        <Image
          boxSize={{ base: "auto", md: "lg" }}
          objectFit="contain"
          src={item.imgsrc}
          rounded="lg"
        />
      </Stack>
      <VStack textAlign="left" p={2} spacing={2}>
        <Heading width="full" bg="#FFCEFE" size="lg" px={5} borderRadius="md">
          Benefits
        </Heading>
        <Text fontSize="xl" px={5}>
          {item.benefits}
        </Text>
      </VStack>
    </Container>
  );
};

export default ExerciseDetail;
