import React from 'react'
import { useData } from '../services/useData'
import Navbar from '../components/Navbar';
const ShopPage = () => {
  const { 
    isLoading, 
    isError, 
    data, 
    error, 
    isFetching, 
    refetch,
  } = useData();
  // console.log(data)

  if(isError){
    return(
     <h2>This is Error : {error.message}</h2>
    )
}

if(isLoading || isFetching){
    return(
    <>
    <h2>Loading..</h2>
    <button onClick={refetch} className='text-black'>Fetching</button>
    </>
    )
}

// console.log({isLoading,isFetching})
  return (
    <>
    <h1>Hello World</h1>
    <div>
      {data?.map((item) => {
        return(
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default ShopPage
