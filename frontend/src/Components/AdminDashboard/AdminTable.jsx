import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
  ButtonGroup,
  IconButton
} from "@chakra-ui/react";
import { AiFillEdit, AiTwotoneLock } from "react-icons/ai";
import { BsBoxArrowUpRight, BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
const AdminTable = () => {
  const [data, setData] = useState([]);
  const [delc, setDel] = useState(0); // delete
  const getData = async () => {
    let res = await fetch("https://3y4mt2-8000.preview.csb.app/producs");
    let data = res.json();
    data
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getData();
  }, []);
  const deleteApi = (id) => {
    console.log(id);
    fetch(`https://3y4mt2-8000.preview.csb.app/producs/${id}`, {
      method: "DELETE"
    }).then((response) => {
      if (response.ok) {
        setDel(delc + 1);
      }
    });
  };
  return (
    <>
      <TableContainer width="95%" margin="auto">
        <Table variant="striped" colorScheme="orange">
          <TableCaption fontSize="md">Product Details </TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th isNumeric>Product Cost</Th>
              <Th textAlign={{ md: "center" }}>Actions</Th>
            </Tr>
          </Thead>
          <Tbody overflowY="auto" overflowX="hidden">
            {data?.map((el) => (
              <Tr key={el.id}>
                <Td>{el.name}</Td>
                <Td>{el.category}</Td>
                <Td isNumeric>&#8377;{el.cost}</Td>
                <Td>
                  <Flex justify={{ md: "center" }}>
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      <IconButton
                        colorScheme="blue"
                        icon={<BsBoxArrowUpRight />}
                        aria-label="Up"
                      />
                      <IconButton
                        colorScheme="green"
                        icon={<AiFillEdit />}
                        aria-label="Edit"
                      />
                      <IconButton
                        colorScheme="red"
                        variant="outline"
                        icon={<BsFillTrashFill />}
                        aria-label="Delete"
                        onClick={() => deleteApi(el.id)}
                      />
                    </ButtonGroup>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Total Items Registered:{data.length}</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  );
};
export default AdminTable;
