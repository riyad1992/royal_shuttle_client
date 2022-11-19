import React from 'react';
import { toast } from 'react-toastify';

const ToursServiceRow = ({tour, index, refetch, updateService, setUpdateService}) => {

    const {name, _id, price, img} = tour

    const handelDelete = id => {
        const procced = window.confirm('Are You Sure you want Delete Service')
        if(procced){
            fetch(`https://royal-shuttle-server.onrender.com/tours/${id}`, {
            method: 'DELETE',
            headers: {'authorization': `Bearer ${localStorage.getItem('accessToken')}`}
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount){
                    toast(`Service: ${name} is Deleted`)
                    refetch()
                }
            })
        }
        
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div className="avatar">
                    <div className="w-8 rounded">
                        <img src={img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>
            
            <td><button onClick={() => handelDelete(_id)} className="btn btn-xs btn-error" >Delete</button></td>
            <td><label htmlFor="tour-modal-1" onClick={() => setUpdateService(tour)} className="btn btn-xs btn-error" >Update</label></td>
        </tr>
    );
};

export default ToursServiceRow;