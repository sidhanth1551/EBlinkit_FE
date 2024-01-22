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

const ItemCard = ({product,forLandingPage}) => {

  const navigate = useNavigate();

  return (

  <>
    {!forLandingPage&& <Card h={'310px'} onClick={()=>{navigate('/p',{state:product})}} w={'320px'} m={2}flexDirection='column' alignItems={'center'} justifyContent={'center'}>
        <Image
          p={5}
          objectFit="cover"
          h={'200px'}
          w={'200px'}
          src={product.images[0]}
          alt="Caffe Latte"
        />
    <Flex flexDirection='column' justifyContent={'center'} alignItems={'center'}>
       <Text fontSize={'16px'} fontWeight={500}>{product.productname.length>10?product.productname.slice(0,15)+'.....':product.productname}</Text> 
       <Flex justifyContent={'space-around'} alignItems={'center'} mt={2} w="100%">
        <Text fontSize={'15px'} ml={6}>{product.price}</Text>
        <Button variant="outline" size={'sm'} color={'green'} mr={5}>ADD</Button>
       </Flex>

    </Flex>
  </Card>
  }
{forLandingPage && <Card
  h={'200px'}
  onClick={() => {
    navigate('/p', { state: product });
  }}
  minW={'200px'}
  m={2}
  flexDirection='column'
  alignItems={'center'}
  justifyContent={'center'}
  overflow="hidden" // added overflow property
>  
<Flex h={'130px'}>
  <Image
    p={5}
    objectFit="cover"
    h={'100%'}
    w={'100%'} // set width to 100% to ensure responsiveness
    src={product.images[0]}
    alt="Caffe Latte"
  />
  </Flex>
  <Flex flexDirection='column' h={'auto'} w={'100%'} justifyContent={'center'} alignItems={'center'}>
    <Text fontSize={'16px'} fontWeight={500} textAlign="center" mb={2}>
      {product.productname.length>10?product.productname.slice(0,8)+'...':product.productname}
    </Text>
    <Flex justifyContent={'space-around'} alignItems={'center'} w="100%">
      <Text fontSize={'15px'} color={'green'}>{product.price}</Text>
      {/* <Button variant="outline" size={'sm'} color={'green'}>
        ADD
      </Button> */}
    </Flex>
  </Flex>
</Card>
}
</>
  )
}

export default ItemCard
