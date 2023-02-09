// import { useSelector } from "react-redux";
// import { NavLink, Outlet } from "react-router-dom";
// import {Box,Text} from "@chakra-ui/react"
// const ProtectedRoute = () => {
//   const { userInfo } = useSelector((state) => state.auth);
//   // finding out if userInfo available or not for accessing the page
//   if (!userInfo) {
//     return (
//       <Box>
//         <Text>Unauthorized !!! Kindly Login First</Text>
//         <span>
//           <NavLink to="/login">Login</NavLink> to gain access
//         </span>
//       </Box>
//     );
//   }

//   return <Outlet />;
// };

// export default ProtectedRoute;

import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
export default function ProtectedRoute() {
  const { userInfo } = useSelector((state) => state.auth);
  if (!userInfo) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Box display="inline-block">
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bg={"red.500"}
            rounded={"50px"}
            w={"55px"}
            h={"55px"}
            textAlign="center"
          >
            <CloseIcon boxSize={"20px"} color={"white"} />
          </Flex>
        </Box>
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Unauthorized !!! Kindly Login First
        </Heading>
        <Text color={"gray.500"}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Text>
        <NavLink to="/login">
          <Button
            colorScheme="pink"
            bgGradient="linear(to-r, pink.400, pink.500, pink.600)"
            color="white"
            variant="solid"
          >
            Login
          </Button>
        </NavLink>
      </Box>
    );
  }
  return <Outlet />;
}
