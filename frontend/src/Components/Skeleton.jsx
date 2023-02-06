import {
  Box,
  SimpleGrid,
  SkeletonCircle,
  SkeletonText
} from "@chakra-ui/react";

const Skeleton = () => {
  return (
    <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]} gap="2">
      <Box border="2px solid red" padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Box>
      <Box border="2px solid red" padding="6" boxShadow="lg" bg="white">
        <SkeletonCircle size="10" />
        <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
      </Box>
    </SimpleGrid>
  );
};
export default Skeleton;
