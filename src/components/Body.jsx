import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import Base_URL from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const fetchUser = async () => {
    try{
        const res = await axios.get(Base_URL + "/profile/view",{withCredentials : true});
        dispatch(addUser(res.data)); 
    }
    catch(err){
      if(err.response?.status === 401){
        navigate('/login');
      }
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(()=>{
   fetchUser(); 
  },[]);
if (isLoading) return null;
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default Body;