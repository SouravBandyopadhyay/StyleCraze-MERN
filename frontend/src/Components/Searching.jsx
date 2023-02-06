import React from "react";
import { Avatar, Text, Flex } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList
} from "@choc-ui/chakra-autocomplete";
import { useGetAllProductsQuery } from "../Redux/productsApi";
import { useNavigate } from "react-router-dom";

export default function SearchProduct() {
  const { data } = useGetAllProductsQuery();
  const navigate = useNavigate();

  return (
    <Flex
      boxSize="full"
      p={30}
      justifyContent="center"
      width="40%"
      margin="auto"
    >
      <AutoComplete rollNavigation>
        <AutoCompleteInput variant="filled" placeholder="Search..." autoFocus />
        <AutoCompleteList>
          {data?.map((el) => (
            <AutoCompleteItem
              key={el.id}
              value={el.name}
              textTransform="capitalize"
              align="center"
              onClick={() => {
                navigate(`/makeup/${el.id}`);
              }}
            >
              <Avatar size="sm" name={el.name} src={el.image_src} />
              <Text ml="4">{el.name}</Text>
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </Flex>
  );
}
