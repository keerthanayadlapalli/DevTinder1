import axios from 'axios';
import Base_URL from '../utils/constants';
import { useDispatch } from 'react-redux';
import {useEffect} from 'react';
import { useSelector } from 'react-redux';
import { addFeed } from '../utils/feedSlice';
import UserCard from './UserCard';

const Feed = () => {
  const feed = useSelector((store) =>store.feed);
  console.log("feed:", feed);
  const dispatch = useDispatch();

  const getFeed = async()=> {
    if(feed) return;
    try{
      const res = await axios.get(Base_URL + "/feed", {withCredentials: true});
      dispatch(addFeed(res.data));
    }
    catch(err){
      console.log("response data:", err.response?.data);
    }
  }
  useEffect(()=>{
    getFeed();
  },[]);
  return (
  feed && (<div className ="flex flex-wrap gap-4 justify-center">
    <UserCard  user={feed[0]}/>
  </div>
  )
);
}

export default Feed;
