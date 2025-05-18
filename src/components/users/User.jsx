import React from 'react';
import { useLoaderData } from 'react-router';
import UserCard from './UserCard';

const User = () => {
    const users = useLoaderData();
    console.log(users)
    return (
        <div>
            <h2> All User this site </h2>
            {
                users.map((user, index) => <UserCard index={index} key={user._id} user={user}></UserCard>)
            }
        </div>
    );
};

export default User;