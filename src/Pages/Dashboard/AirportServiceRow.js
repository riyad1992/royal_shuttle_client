import React from 'react';
import { toast } from 'react-toastify';

const AirportServiceRow = ({service, index, refetch, updateService, setUpdateService}) => {

    const {name, _id, price, img} = service




    const handelDelete = id => {
        const procced = window.confirm('Are You Sure you want Delete Service')
        if(procced){
            fetch(`http://localhost:5000/airportservice/${id}`, {
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
            {/* <td><Link to={`/dashboard/updateservice/${_id}`}><button className="btn btn-xs btn-error" >Update</button></Link></td> */}
            <td><label htmlFor="modal-1" onClick={() => setUpdateService(service)} className="btn btn-xs btn-error" >Update</label></td>
        </tr>
    );
};

export default AirportServiceRow;