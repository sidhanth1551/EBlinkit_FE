import React from "react";
import {
  Card,
  CardHeader,
  Image,
  Stack,
  CardBody,
  CardFooter,
  IconButton,
  Heading,
  Text,
  Button,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import ItemCard from "../../components/ItemCard/ItemCard";
import TrendingCards from "@/components/TrendingCards/TrendingCards";
import { useNavigate } from "react-router-dom";
import { useEffect,useRef } from "react";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import SlidingWindow from "@/components/SlidingWindow/SlidingWindow";

const LandingPage = () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 9];

  const trendArr = [1, 2, 3, 3];
  const trendHeadings = [
    {
      label: "Cameras",
      value: "cameras",
      url: "https://dynl.mktgcdn.com/p/qCB7K4n5d4XWdmS8rA9OCnuv-DyUcRtALVi9U3M8lZY/600x338.png",
    },
    {
      label: "Speakers",
      value: "speakers",
      url: "https://upload.wikimedia.org/wikipedia/commons/b/bc/JBL_logo.svg",
    },
    {
      label: "Mobile Phones",
      value: "phones",
      url: "https://media.designrush.com/inspiration_images/134802/conversions/_1511456315_653_apple-mobile.jpg",
    },
    {
      label: "LED TVs",
      value: "tvs",
      url: "https://static.vecteezy.com/system/resources/previews/014/018/566/non_2x/samsung-logo-on-transparent-background-free-vector.jpg",
    },
  ];





  return (
    <Flex flexDirection={"column"} p={10}>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        width={"95%"}
        backgroundColor={"red"}
        opacity={0.7}
        position={"absolute"}
        p={0}
        mt={'60px'}
      >
        <Flex h={"300px"} w={"100%"}>
          <Image
            w={"1400px"}
            h={"500px"}
            src="https://m.media-amazon.com/images/I/61SAKmyYTRL._SX3000_.jpg"
          />
        </Flex>
      </Card>
      
  
      <SimpleGrid
        mt={"360px"}
        columns={{ sm: 1, md: 2, lg: 4 }}
        p={3}
        spacing={4}
      > 
        {trendHeadings.map((item, index) => (
          <TrendingCards key={index} heading={item} />
        ))}
      </SimpleGrid>
      <SimpleGrid spacing={4} mt={10} columns={{ sm: 1, md: 2, lg: 4 }}>
        {/* {arr.map((item, index) => (
          <ItemCard key={index} />
        ))} */}
      </SimpleGrid>

      <SlidingWindow name={'jbl'} byBrandName={true}/>
      <SlidingWindow category={'phones'} byBrandName={false}/>
      <SlidingWindow category={'speakers'} byBrandName={false}/>
    </Flex>
  );
};

export default LandingPage;
