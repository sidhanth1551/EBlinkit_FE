import React, { useState } from "react";
import {
  Card,
  CardHeader,
  Image,
  Stack,
  CardBody,
  CardFooter,
  Heading,
  Text,
  InputLeftElement,
  InputGroup,
  Flex,
  Input,
  Button,
  Select,
  Divider,
  useDisclosure,
  VStack,
  Avatar,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import Login from "../login/Login";
import {jwtDecode} from 'jwt-decode';
import { useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginTrue, setLoginTrue] = useState(true);

  useEffect(()=>{
    const tokenValue = localStorage.getItem("token")
    if(tokenValue){
    const decodedToken = jwtDecode(tokenValue);
    console.log(decodedToken)
    setLoginTrue(false);
    }
  },[])

  const debounceAPICall = (cb,d)=>{
    let timer;

    return function (...args){
        if(timer) 
        clearTimeout(timer);

        timer = setTimeout(()=>{
           cb(...args);
        },d)
    }
  }

  const handleInputChange = debounceAPICall((e)=>{
    console.log(e.target.value)
  },1000)

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        h={20}
        variant="outline"
        mt={0}
        position={'fixed'}
        zIndex={2}
        top={0}
      >
        <Flex w="20%" justifyContent={"space-around"}>
          <Image
            w="140px"
            h="80px"
            p={5}
            objectFit="inherit"
            src="https://cdn1.desidime.com/topics/photos/1414800/original/blinkit-logo-header-05a0b5f.png?1647490076"
            alt="Caffe Latte"
          />
          <Divider orientation="vertical" />
        </Flex>
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <Flex justifyContent={"center"} wrap={"wrap"} mr={10}>
            <Heading size="20px">Deliver in 10 minutes</Heading>
            <Select placeholder="Select option" size="xs" h={4}>
              <option value="option1">Mumbai</option>
              <option value="option2">Delhi</option>
              <option value="option3">Pune</option>
            </Select>
          </Flex>

          <InputGroup>
            <InputLeftElement pointerEvents="none" mt={1}>
              <Search2Icon color="gray.300" />
            </InputLeftElement>
            <Input placeholder="Search Products.." onChange={handleInputChange} size="lg" w="600px" />
          </InputGroup>

          {loginTrue ? (
            <Button
              variant="outline"
              w={"160px"}
              onClick={() => {
                setIsOpen(true);
              }}
              mr={10}
            >
              Login
            </Button>
          ) : (
            <Button
              variant="outline"
              w={"160px"}
              onClick={() => {
                localStorage.clear("token");
                setLoginTrue(true)
              }}
              mr={10}
            >
              Logout
            </Button>
          )}

          <Button variant="solid" w={"160px"} colorScheme="green" mr={10}>
            My Cart
          </Button>
          {/* {!loginTrue && (
            <Stack direction="row">
              <Avatar bg='teal.500' mr={1} name="Sasuke Uchiha" size={'md'}  />
            </Stack>
          )} */}
        </Flex>
      </Card>
      <Login
        isOpen={isOpen}
        setLoginTrue={setLoginTrue}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;
