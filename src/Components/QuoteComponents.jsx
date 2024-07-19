
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchQuote } from '../Features/Quote/quoteSlice';

const QuoteComponents = () => {
  const { quoteData, isError, isLoading } = useSelector((state) => state.quote);
    
//    api fetch
 const dispatch=useDispatch();

 useEffect(()=>{
    dispatch(fetchQuote());
 },[]);
if(isError){
    return <h1 className="text-center text-danger">Somthinging Went rong...</h1>
}
if(isLoading||! quoteData){
 return <h1 className=""> Loading...</h1>;
}

  return (
    <marquee>
      <h1>
        {quoteData.content}....{quoteData.authore}
      </h1>
    </marquee>
  );
}

export default QuoteComponents
