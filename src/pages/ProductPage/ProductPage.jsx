import {
  Divider,
  Text,
  Button,
  Flex,
  Heading,
  Image,
  VStack,
  ModalOverlay,
  ModalContent,
  HStack,
  Modal,
  ModalHeader,
  ModalBody,
  CircularProgress,
  Card,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import React, { useState,useCallback , useEffect} from "react";
import { ClockIcon } from "@heroicons/react/24/solid";
import { useLocation } from "react-router-dom";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import axios from "axios";
import {jwtDecode} from 'jwt-decode';

const ProductPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const location = useLocation();
  const product = location.state;
  const noOfImages = product.images;
  const [currentImage, setCurrentImage] = useState(noOfImages[0]);
  const [suggestList , setSuggestList] = useState([]);
  const [loader, setLoader] = useState(false)
  const [buttonLoader, setButtonLoader] = useState(false)
  const [isDataFetched, setIsDataFetched] = useState(false);

 

  useEffect(()=>{
    console.log('url',product)
    setLoader(true)
  fetch(`http://localhost:1337/api/getProductsByCategory/${product.category}`)
  .then(async(res)=>{
    const resJson =  await res.json();
    setSuggestList(resJson.products);
    console.log(resJson)
    setLoader(false)
  })
  .catch((err)=>{
    console.log(err)
    setLoader(false)
  })
},[currentImage])

const handleBuy = async () => {
  try {
    
    const userDetails = localStorage.getItem("token") ? jwtDecode(localStorage.getItem("token")) : null;
    
    if (!userDetails) {
      console.log('Login required...');
      return;
    }

    // console.log('Buying...');
    // const payload = {
    //   productId: product._id,
    //   userId: userDetails.user.id,
    //   addressId: "11111",
    //   amountPaid: product.price,
    // };

    // console.log(payload);
    // const res = await axios.post("http://localhost:1337/api/placeOrder", payload);
    // console.log('Final Buy', res.data);

     //  This API is used to create OrderId
    const orderData = await axios.post(`http://localhost:1337/api/payment/checkout`,{
      amount:product.price
    })
    const orderDetails = orderData.data.orderId;
      console.log(orderData)
      setButtonLoader(false)
      onClose()
   console.log(`http://localhost:1337/api/placeOrder/${product._id}/${userDetails.id}/${product.price}/${'11111111'}`)
        const options = {
              key: `rzp_test_i4ZgJ0NMuWOiEn`,
              amount: "500", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
              currency: "INR",
              name: "BlinkIt",
              description: "Test Transaction",
              image: "/logo-black.png",
              order_id: orderDetails.id,
              callback_url: `http://localhost:1337/api/placeOrder/${product._id}/${userDetails.user.id}/${product.price}/${'11111111'}`,
              prefill: {
                  name: "Gaurav Kumar",
                  email: "gaurav.kumar@example.com",
                  contact: "9000090000"
              },
              notes: {
                  "address": "Razorpay Corporate Office"
              },
              theme: {
                  "color": "#38A169"
              }
        };
        console.log('Order Data from BE:');
        console.log('Razorpay Options:', options);

              const rzp1 = new (window).Razorpay(options);
              rzp1.open();
  } catch (error) {
    console.error('Error during buy:', error.message);
  }
};
  return (
    //   <Grid
    //   templateColumns="repeat(2, 8fr)" // Divide the available space into three columns
    //   gap={5} // Add some spacing between the columns
    // >
    <Flex>
    {loader&&<Card display={'flex'} flexDirection={'row'} h={'100vh'} w={'100%'} justifyContent={'center'} alignItems={'center'} >
            <CircularProgress isIndeterminate value={59} size='120px'thickness='7px' />
            </Card>}
    {!loader &&<Flex>
         
      <Flex p={20} w={"50%"} flexDirection="column">
        <Image h={"480px"} w={"480px"} src={currentImage} />
        <Flex mt={7} overflowX={"scroll"}>
          {noOfImages.map((item, index) => {
            return (
              <Button
                variant="outline"
                h={"60px"}
                minW={"90px"}
                key={index}
                p={5}
                m={3}
              >
                <Image
                  h={"40px"}
                  w={"70px"}
                  src={item}
                  onClick={()=>setCurrentImage(item)}
                />
              </Button>
            );
          })}
        </Flex>
        <HStack justifyContent={"center"} mt={5} alignItems={"center"}>
          <Image src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" />
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"13px"} mt={0}>
              Superfast Delivery
            </Text>
            <Text fontSize={"12px"} color={"gray.500"} mt={0}>
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent={"center"} mt={5} alignItems={"center"}>
          <Image src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" />
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"13px"} mt={0}>
              Superfast Delivery
            </Text>
            <Text fontSize={"12px"} color={"gray.500"} mt={0}>
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </Text>
          </VStack>
        </HStack>
        <HStack justifyContent={"center"} mt={5} alignItems={"center"}>
          <Image src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" />
          <VStack alignItems={"flex-start"}>
            <Text fontSize={"13px"} mt={0}>
              Superfast Delivery
            </Text>
            <Text fontSize={"12px"} color={"gray.500"} mt={0}>
              Get your order delivered to your doorstep at the earliest from
              dark stores near you.
            </Text>
          </VStack>
        </HStack>
      </Flex>
      <Divider orientation="vertical" alignSelf="stretch" />
      <Flex p={25} w={"50%"} flexDirection="column">
        <Heading fontSize={"27px"}>{product.productname}</Heading>
        <Button
          color={"black.400"}
          mt={2}
          mb={2}
          w={20}
          p={0}
          h={6}
          fontSize={11}
        >
          <ClockIcon
            style={{ height: "13px", margin: "2px", color: "green" }}
          />
          13 MINS
        </Button>

        <Divider mt={3} mb={3} alignSelf="stretch" />
        <Text
          fontSize={"14px"}
          mt={3}
          mb={3}
          fontWeight={700}
          color={"gray.600"}
        >
          Available Units {product.units}
        </Text>
        <Button
          variant="outline"
          w="150px"
          h="60px"
          mt={3}
          mb={3}
          alignItems="center"
          justifyContent="center"
        >
          <VStack>
            {/* <Text fontSize="14px" fontWeight="bold">
              {product.units} units
            </Text> */}
            <Text fontSize="17px" color="gray.600">
              MRP {product.price}/-
            </Text>
          </VStack>
        </Button>

        <Button
          variant={"outline"}
          color={"green"}
          colorScheme={"green"}
          w={20}
          mt={3}
          mb={3}
          bg={"green.50"}
          onClick={()=>{
            onOpen()
            console.log('hiii')
          }}
        >
          BUY
        </Button>

        

        <Heading fontSize={"27px"}>Product Details</Heading>
        <Heading fontSize={"17px"} mt={7}>
        About this item
        </Heading>
        <Text fontSize={"12px"} mt={2}>
          Carbonated Water, Sugar, Acidity Regulator (338), Caffeine, Colour
          (150D), Contains Permitted Natural Colour and Added Flavours
        </Text>

        <Heading fontSize={"17px"} mt={7}>
          Units
        </Heading>
        <Text fontSize={"12px"} mt={2}>
          {product.units}
        </Text>

        <Heading fontSize={"17px"} mt={7}>
          Manufacturer Details
        </Heading>
        <Text fontSize={"12px"} mt={2}>
          HINDUSTAN COCA-COLA BEVERAGES PVT. LTD. , SURVEY NO. 284-P, POST
          KUDUS, TALUKA WADA, DISTRICT PALGHAR- 421 312, MAHARASHTRA
        </Text>

        <Heading fontSize={"17px"} mt={7}>
          Return Policy
        </Heading>
        <Text fontSize={"12px"} mt={2}>
          This Item is non-returnable. For a damaged, defective, incorrect or
          expired item, you can request a replacement within 72 hours of
          delivery. In case of an incorrect item, you may raise a replacement or
          return request only if the item is sealed/ unopened/ unused and in
          original condition.
        </Text>

        <Heading fontSize={"17px"} mt={7}>
          Description
        </Heading>
        <Text fontSize={"12px"} mt={2}>
          Live your life to the fullest with a passion to do something crazy
          each day. Taste the thunder and set yourself free to take audacious
          steps in life. From skydiving to going on a solo trip, bring out the
          toofani, adventurous side of yours with Thums Up. Add some enthusiasm
          to your life and dare to do something big every day. Raise the
          excitement of any occasion to toofani levels with that strong,
          refreshing fizz and thunderous taste of Thums Up drink, packed with a
          punch of soda. Whether itâ€™s about getting a second wind in the match
          or cheering up your team, thereâ€™s a Thums Up for every champion in
          you. Ride the epic wave of excitement and adventure with Thumbs Up
          soft drink â€“ anytime, anywhere.
        </Text>
        <Flex wrap={'wrap'}>
        <Heading fontSize={"27px"} mt={9}>Products you may like</Heading>
        <Divider mt={3} mb={3} alignSelf="stretch" />
        {suggestList && suggestList.splice(0,4).map((item,idx)=>{
          if(item._id!==product._id)
          return <SuggestionCard key={idx} product={item}/>
        })}
        </Flex>
      </Flex>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Checkout</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
            <Flex>
              <Image src={noOfImages[0]} boxSize={"150px"}/>
              <Flex ml={9} flexDirection={'column'}>
              <Heading size={'sm'}>{product.brand} {product.productname}</Heading>
              <Text mt={2} fontSize={8}>{product.description}</Text>
        
              <Text mt={2}>Price: {product.price}</Text>
           
              </Flex>
            </Flex>
            <Divider/>
            <Flex justifyContent={'space-between'}>
            <Heading size={'sm'} ml={3} mt={6}>Total Price: </Heading>
            <Heading size={'sm'} ml={3} mt={6}>{product.price}</Heading>
            </Flex>
          </ModalBody>
          <ModalFooter>
            <Button isLoading={buttonLoader} backgroundColor={'#38A169'} onClick={()=>{
              handleBuy()
              setButtonLoader(true)
              }}>Proceed To Payment</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>}
    </Flex>

    
  );
};

export default ProductPage;
