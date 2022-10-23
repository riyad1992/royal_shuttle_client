import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
    const {email, role, _id} = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>{
            if(res.status === 403){
                toast.error('Faild to make an Admin')
            }
            return res.json()
        })
        .then(data => {
            if(data.modifiedCount > 0){
                refetch()
                toast.success('Successfully made an Admin')
            }
        })
    }

    const handelDelete = id => {
        const procced = window.confirm('Are You Sure you want Delete Service')
        if(procced){
            fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE',
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    toast(`User: ${email} is Deleted`)
                    refetch()
                }
            })
        }
        
    }

    return (
         <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' &&<button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td>
            <td><button onClick={() => handelDelete(_id)} className="btn btn-xs btn-error" >Remove User</button></td>
        </tr>)
};

export default UserRow;