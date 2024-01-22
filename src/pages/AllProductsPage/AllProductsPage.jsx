import React, { useEffect } from 'react'
import ItemCard from '@/components/ItemCard/ItemCard'
import {
    Card,
    Spinner,
    CircularProgress
  } from "@chakra-ui/react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AllProductsPage = () => {

    const location = useLocation();
    const url = location.state; 
    const totalProducts= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

    const [list,setList] = useState([]);
    const [loader, setLoader] = useState(false)
    
    useEffect(()=>{
      setLoader(true)
        console.log('url',url)
      fetch(`http://localhost:1337/api/getProductsByCategory/${url}`)
      .then(async(res)=>{
        
        const resJson =  await res.json();
        setList(resJson.products);
        setLoader(false)
        console.log(resJson)
      })
      .catch((err)=>{
        console.log(err)
        setLoader(false)
      })
    },[])
  return (
    <>      
            {loader&&<Card display={'flex'}  flexDirection={'row'} h={'100vh'} justifyContent={'center'} alignItems={'center'} >
            <CircularProgress isIndeterminate color={'#38A169'} value={59} size='120px'thickness='7px' />
            </Card>}
        <Card display={'flex'} flexDirection={'row'} h={'100vh'} justifyContent={'flex-start'} alignItems={'flex-start'} flexWrap={'wrap'}>

        {list.map((item,idx)=>{
            return <ItemCard key={idx} product={item}/>
        })}
        </Card>
    </>
  )
}

export default AllProductsPage
