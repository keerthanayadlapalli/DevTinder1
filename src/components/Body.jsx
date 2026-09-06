import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import axios from 'axios';
import Base_URL from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUser = async () =>{
    try{
        const res = await axios.get(Base_URL + "/profile/view",{withCredentials : true});
        dispatch(addUser(res.data));
    }
    catch(err){
      if(err.response && err.response.status === 401){
      navigate('/login');
      }
      console.log(err);
    }
  }
  useEffect(()=>{
    fetchUser();
  },[]); 
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;