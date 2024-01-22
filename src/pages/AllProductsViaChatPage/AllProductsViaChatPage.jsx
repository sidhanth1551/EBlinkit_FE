import React, { useEffect } from 'react'
import ItemCard from '@/components/ItemCard/ItemCard'
import {
    Card
  } from "@chakra-ui/react";
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AllProductsViaChatPage = () => {

    const location = useLocation();
    const url = location.state; 
    const totalProducts= [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];

    const [list,setList] = useState([]);

    
    useEffect(()=>{
        console.log('url',url)
      fetch(url)
      .then(async(res)=>{
        const resJson =  await res.json();
        setList(resJson.products);
        console.log(resJson)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[url])
  return (
    <>

        <Card display={'flex'} flexDirection={'row'} flexWrap={'wrap'}>
        {list.map((item,idx)=>{
            return <ItemCard key={idx} product={item}/>
        })}
        </Card>
    </>
  )
}

export default AllProductsViaChatPage
