// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

function Random(){
    // const [gif,setGif] = useState('');
    // const [loading,setLoading]=useState('false');

    // // function for api call
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data} = await axios.get(url); 
    //     const imageSource = data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[])

//   --------------- Custom Hook ----------------

    const {gif,loading,fetchData} = useGif(); // custom Hook

    function clickHandler(){
        fetchData();
    }

    return(
        <div className='w-1/2 bg-green-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>

          <h1 className='text-3xl underline uppercase font-bold'>A Random Gif</h1>

          {
            loading ? (<Spinner/>):(<img src={gif} alt='gif' width="450" />)
          }

          

          <button className='w-10/12 bg-yellow-500 text-xl py-2 rounded-lg mb-[20px] font-bold'
          onClick={clickHandler}>
            Generate
        </button>
        </div>
    );
} 

export default Random;