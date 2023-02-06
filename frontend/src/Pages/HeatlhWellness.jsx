import {
  Box,
  Image,
  VStack,
  SimpleGrid,
  Heading,
  Text
} from "@chakra-ui/react";
import BmiCheck from "../Components/Bmi/BmiCalci";
const Healthwellness = () => {
  return (
    <>
      <Heading as="h1" fontWeight="400">
        HEALTH AND WELLNESS
      </Heading>
      <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]} gap="20px" p={3}>
        <Image src="https://cdn2.stylecraze.com/wp-content/uploads/2014/09/How-Are-Hormones-Responsible.jpg.webp" />
        <Box margin="auto" padding="2">
          {" "}
          <Heading as="h2" fontWeight="200">
            Hormones And Weight Gain: Symptoms And Ways To Control
          </Heading>
          <Text marginTop="5">
            “There is a direct link between hormones and weight gain. Sudden
            weight gain and difficulty losing weight could be the symptoms of
            hormonal weight gain. A balanced diet and exercise alone may not be
            as effective in such cases.
          </Text>
        </Box>
      </SimpleGrid>
      <Box>
        <BmiCheck />
      </Box>
    </>
  );
};
export default Healthwellness;
