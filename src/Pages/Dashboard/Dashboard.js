import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hookes/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user);
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h1 className='text-2xl'>welcome to Your Dashboard</h1>
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-48 text-base-content">
                {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Bookings</Link></li>
                    <li><Link to="/dashboard/review">Add Your Review</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/bookings">All Bookings</Link></li>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addService">Add Service</Link></li>
                        <li><Link to="/dashboard/airportService">Add Airport Service</Link></li>
                        <li><Link to="/dashboard/manageService">Manage Service</Link></li>
                        <li><Link to="/dashboard/manageAirportService">Manage Airport Service</Link></li>
                        <li><Link to="/dashboard/manageReviews">Manage Reviews</Link></li>
                    </>}
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;