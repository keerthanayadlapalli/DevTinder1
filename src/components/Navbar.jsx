import React from 'react';
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Base_URL from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../utils/userSlice';
const Navbar = () => {
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await axios.post(Base_URL + '/logout',{}, {withCredentials: true});
      dispatch(removeUser());
      return navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };
  return (
      <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to = "/" className="btn btn-ghost text-xl">DevTinder</Link>
  </div>
  <div className="flex gap-2">
    
    {user &&(<div className="dropdown dropdown-end mx-5">
      <p>Welcome {user.lastName}</p>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Photo"
            src={user.photoUrl} />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link to="/settings">Settings</Link></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>)}
  </div>
</div>

  )
}
  export default Navbar;
