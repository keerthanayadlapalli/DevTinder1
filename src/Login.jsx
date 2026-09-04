import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from './utils/userSlice';

const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const handleLogin = async() => {
    try{
      const res = await axios.post("http://localhost:7777/login",{
      emailId,
      password
    },{withCredentials: true});
    console.log(res.data);
    dispatch(addUser(res.data));
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div className="w-full flex justify-center items-center my-8">
      <div className="bg-base-300 rounded-box w-96 p-8 shadow-lg">

        <h1 className="text-2xl font-bold mb-7">
          Login
        </h1>

        <label className="label">Email</label>
        <input
          type="email"
          value={emailId}
          onChange={(e) => setEmailId(e.target.value)}
          className="input w-full"
          placeholder="Enter your email"
        />

        <label className="label mt-4">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input w-full"
          placeholder="Enter your password"
        />

        <button className="btn btn-neutral w-full mt-8" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;