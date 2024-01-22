import React from "react";
import {
  Modal,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Text,
  ModalBody,
  Heading,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Login = (props) => {
  const { isOpen, onClose,setLoginTrue } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);


  useEffect(() => {
    console.log(email, password);
  }, [email, password]);

  const loginCall = () => {
    console.log(email, password);
    console.log("logging in..");
    setButtonLoading(true);
    axios
      .post("http://localhost:1337/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
        setButtonLoading(false);
        setLoginTrue(false)
        localStorage.setItem("token",res.data.accessToken)
        onClose();
      })
      .catch((err) => {
        console.log(err);
        setButtonLoading(false);
        onClose();
      });
  };
 
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Login</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            m={2}
            placeholder="Email"
            w={"360px"}
            ml={4}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            m={2}
            placeholder="Password"
            w={"360px"}
            ml={4}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ModalBody>

        <ModalFooter justifyContent={"center"}>
          <Button
            isLoading={buttonLoading}
            colorScheme="green"
            w={"360px"}
            mr={3}
            onClick={loginCall}
          >
            Login
          </Button> 
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default Login;
