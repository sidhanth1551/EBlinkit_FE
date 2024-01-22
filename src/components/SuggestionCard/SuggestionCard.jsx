import React from 'react'
import {
    Card,
    CardHeader,
    Image,
    Stack,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Flex,
    Button,
  } from "@chakra-ui/react";
  import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const SuggestionCard = ({product}) => {

  const navigate = useNavigate();

  return (
    <Card h={'210px'} onClick={()=>{navigate('/p',{state:product})}} w={'220px'} m={2}flexDirection='column' alignItems={'center'} justifyContent={'center'}>
       <Image
          p={5}
          objectFit="cover"
          h={'150px'}
          w={'150px'}
          src={product.images[0]}
          alt="Caffe Latte"
        />
    <Flex flexDirection='column' mb={4} justifyContent={'center'} alignItems={'center'}>
       <Text fontSize={'16px'} fontWeight={500}>{product.productname}</Text> 
       <Flex justifyContent={'space-around'} alignItems={'center'} mt={2} w="100%">
        <Text fontSize={'15px'} ml={6}>{product.price}</Text>
        <Button variant="outline" size={'sm'} color={'green'} mr={5}>ADD</Button>
       </Flex>

    </Flex>
  </Card>
  )
}

export default SuggestionCard
