const UserCard = ({ user }) => {
    return (
        <div className="card bg-base-500 w-72 shadow-sm">
            <figure className="h-64">
                <img
                    src={user.photoURL}
                    alt="User"
                    className="w-full h-full object-cover"
                />
            </figure>

            <div className="card-body p-4">
                <h2 className="card-title text-lg">
                    {user.firstName} {user.lastName}
                </h2>

                <p className="text-sm">
                    A card component has a figure, a body part,
                    and inside the body are title and actions parts.
                </p>

                <div className="card-actions justify-end">
                    <button className="btn bg-green-500 btn-sm">
                        Accept
                    </button>
                    <button className="btn bg-red-500 btn-sm">
                        Reject
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
