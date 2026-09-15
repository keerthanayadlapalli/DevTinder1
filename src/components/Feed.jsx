import React from 'react'
import axios from 'axios';
import {Base_URL} from '../utils/constants';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';

const Feed = () => {
  const feed = useSelector((store) =>store.feed);
  const dispatch = useDispatch();

  const getFeed = async()=> {
    if(feed) return;
    try{
      const res = await axios.get(Base_URL + "/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
    }
    catch(err){
      console.log("message:", err.message);
      console.log("status:", err.status);
      console.log("response:", err.response);
      console.log("response data:", err.response?.data);
    }
  }
  useEffect(()=>{
    getFeed();
  },[]);
  return <div>Feed</div>
}

export default Feed;
