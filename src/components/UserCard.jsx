import React from 'react';
const UserCard = ({ user }) => {
    console.log("user:", user);
    console.log("Photo URL:", user.photoURL);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={user.photoURL} alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    {user.age && user.gender && <p>Age: {user.age}, Gender: {user.gender}</p>}
    <p>{user.about}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Like</button>
    </div>
  </div>
</div>
  )
}

export default UserCard;
