import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const User = () => {
    const loadUsers = useLoaderData();
    const [users, setUsers] = useState(loadUsers)
    const handleDelete=(id)=>{
       fetch(`http://localhost:5000/users/${id}`,{
        method: 'DELETE'
       })
       .then(res => res.json())
       .then(data =>{
        console.log(data)
        const remaining = users.filter(user => user._id !== id)
        setUsers(remaining)
       })
    }
    return (
        <div>
            <h1>this is users data :{users.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
        users.map(user =>  <tr key={user._id}>
            <th>1</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className=''>
                <button className='bg-red-500 p-2 rounded' onClick={()=>handleDelete(user._id)}>X</button>
                <button className='bg-green-500 p-2 rounded'>U</button>
            </td>
          </tr>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;