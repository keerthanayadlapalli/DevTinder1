import UserCard from './UserCard';
import { useState } from 'react';
import axios from 'axios';
import Base_URL from '../utils/constants';
const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [photoURL, setPhotoURL] = useState(user.photoURL);
    const [error, setError] = useState("");
    const saveProfile = async() => {
        try{
            const res = await axios.patch( Base_URL + "/profile/edit",{
                firstName,
                lastName,
                age,
                gender,
                about,
                photoURL
            },{withCredentials: true});
            console.log("Profile updated successfully:", res.data);
        }
        catch (err) {
    console.log("Error:", err.response?.data || err.message);

    setError(
        typeof err.response?.data === "string"
            ? err.response.data
            : err.response?.data?.message ||
              "Profile update failed. Please try again."
    );
}
    }
  return (
    <div className = "flex justify-center my-8">
    <div className="w-full flex justify-center items-center my-8">
      <div className="bg-base-300 rounded-box w-96 p-8 shadow-lg">

        <h1 className="text-2xl font-bold mb-7">
          Edit Profile
        </h1>

        <label className="label">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="input w-full"
        />
        <label className="label">Last Name</label>
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="input w-full"
        />
        <label className="label">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="input w-full"
        />
        <label className="label">Gender</label>
        <input
          type="text"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="input w-full"
        />
        <label className="label">About</label>
        <textarea
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="textarea w-full"
        />
         <label className="label">Photo</label>
        <input
          type="text"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          className="input w-full"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="btn btn-neutral w-full mt-8" onClick={saveProfile}>
          Save Changes
        </button>

      </div>
    </div>
    <UserCard  user={{ firstName, lastName, age, gender, about, photoURL}}/>
    </div>
  )
}
export default EditProfile;
