import { Box, Image, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import React from "react";
// import { connect } from "react-redux";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Index from "../Components/Makeup/Banner";
const Makeup = () => {
  return (
    <>
      <Heading as="h1" fontWeight="400">
        MAKE UP
      </Heading>
      <SimpleGrid gridTemplateColumns={["1fr", "1fr 1fr"]} gap="20px" p={3}>
        <Image src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/1415-3-Perfect-Eyebrow-Shape-Ideas-For-Round-Face-Shapes-720x810.jpg.webp" />
        <Box margin="auto" padding="2">
          {" "}
          <Heading as="h2" fontWeight="200">
            3 Perfect Eyebrow Shape Ideas For Round Face Shapes
          </Heading>
          <Text marginTop="5">
            Eyebrows can make or break your looks because they are an important
            part of your face. You can shape your brows depending on how you
            like them, but you also need to keep in mind the shape of your face.
          </Text>
        </Box>
      </SimpleGrid>
      <Index />
    </>
  );
};
export default Makeup;
