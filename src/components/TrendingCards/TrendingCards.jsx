import React from "react";
import {
  Card,
  CardBody,
  Image,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const TrendingCards = ({ heading }) => {
  const navigate = useNavigate();

  return (
    <Card
      w="320px"
      borderRadius="15px"
      boxShadow="lg"
      overflow="hidden"
      _hover={{ cursor: "pointer",border:'1px',borderColor:'#38A169' ,transform: "scale(1.02)" }}
      onClick={() => {
        navigate("/ap", { state: heading.value });
      }}
    >
      <Image
        src={heading.url}
        alt="Green double couch with wooden legs"
        borderRadius="lg"
        h="150px"
        objectFit="fill"
      />
      <CardBody p={4}>
        <Heading fontSize="xl" fontFamily="heading" mb={2}>
          {heading.label}
        </Heading>
        <Text fontSize="md" color="gray.600">
          A brief description or tagline about the feature can go here.
        </Text>
      </CardBody>
      <Button
        borderTopWidth="1px"
        borderRadius="none"
        py={2}
        fontWeight="bold"
        color="white"
        backgroundColor={'#38A169'}
        onClick={() => {
          // Handle the "Buy Now" action
        }}
      >
       Explore
      </Button>
    </Card>
  );
};

export default TrendingCards;
