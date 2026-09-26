import React from 'react';
const UserCard = ({ user }) => {
    console.log("user:", user);
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={user.photoURL} alt="photo" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName} {user.lastName}</h2>
    {user.age && user.gender && <p>Age: {user.age}, Gender: {user.gender}</p>}
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}

export default UserCard;
