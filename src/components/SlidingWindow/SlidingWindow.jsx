import React from 'react'
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
  import { useEffect,useRef,useState } from "react";
  import ItemCard from "../../components/ItemCard/ItemCard";
  import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const SlidingWindow = ({name,byBrandName,category}) => {
     
    const [brandList, setBrandList] = useState([]);

    useEffect(()=>{
        if(byBrandName){
        fetch(`http://localhost:1337/api/getProductsByBrand/${name}`)
        .then(async(res)=>{
          
          const resJson =  await res.json();
          setBrandList(resJson.products);
         // setLoader(false)
          console.log(resJson)
        })
        .catch((err)=>{
          console.log(err)
        //  setLoader(false)
        })}
        else{
            fetch(`http://localhost:1337/api/getProductsByCategory/${category}`)
            .then(async(res)=>{
              
              const resJson =  await res.json();
              setBrandList(resJson.products);
             // setLoader(false)
              console.log(resJson)
            })
            .catch((err)=>{
              console.log(err)
            //  setLoader(false)
            })}
        
      },[])

    const scrollContainerRef = useRef(null);

    const handleScroll = (direction) => {
      const scrollAmount = 300; // Adjust the scroll amount as needed
      const scrollContainer = scrollContainerRef.current;
      console.log(scrollContainer,scrollContainer.scrollLeft)
      if (direction === 'right') {
        scrollContainer.scrollLeft += scrollAmount;
      } else if (direction === 'left') {
        scrollContainer.scrollLeft -= scrollAmount;
      }
    };

  return (
    <>
    {brandList&&<Flex flexDirection={'column'}>
    {byBrandName&&<Text fontSize={'2xl'} fontFamily={'inherit'}>Products By <span style={{fontStyle:"italic"}}>{name}</span> </Text>}
    {!byBrandName&&<Text fontSize={'2xl'} fontFamily={'inherit'}>Products under <span style={{fontStyle:"italic"}}>{category}</span>  category</Text>}
  <Flex
    maxH={'280px'}
    w={'100%'}
    overflowX="auto"
    position={'relative'}
    backgroundColor={'white'}
    alignItems="center"
  >
         <IconButton icon={<ChevronLeftIcon />} variant={'ghost'} fontSize={'5xl'} opacity={0.7} onClick={() => handleScroll('left')} zIndex={1} position="absolute" left={0}/>
    <div ref={scrollContainerRef} style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', transition: 'transform 0.9s ease' }}>
      {brandList && brandList.map((item, idx) => (
        <ItemCard key={idx} forLandingPage={true} product={item} />
      ))}
    </div>
    <IconButton icon={<ChevronRightIcon />}variant={'ghost'}  fontSize={'5xl'}  opacity={0.7}  onClick={() => handleScroll('right')} zIndex={1} position="absolute" right={0}/>
  </Flex>
  </Flex>

      }
        </>
  )
}

export default SlidingWindow
