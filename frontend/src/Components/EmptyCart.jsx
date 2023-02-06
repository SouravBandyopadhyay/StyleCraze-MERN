import { Box, Text, IconButton, Button, Icon } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <Box height="50vh">
      <Text as="h2" fontSize="2xl" marginTop="5">
        Your Cart Is Empty
      </Text>
      <Box>
        <Button
          bottom="0"
          marginTop="2"
          colorScheme="purple"
          onClick={() => navigate("/prod")}
        >
          <Icon as={ArrowBackIcon} color="white" />
          &nbsp; Continue to Shipping
        </Button>
      </Box>
    </Box>
  );
};
export default EmptyCart;
