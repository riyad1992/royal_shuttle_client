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
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <Outlet></Outlet>
            </div> 
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label> 
                <ul className="menu p-4 overflow-y-auto w-48 text-base-content bg-base-100 lg:bg-white">
                {/* <!-- Sidebar content here --> */}
                    <li><Link to='/dashboard'>My Bookings</Link></li>
                    <li><Link to="/dashboard/review">Add Your Review</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/bookings">All Bookings</Link></li>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addService">Add Service</Link></li>
                        <li><Link to="/dashboard/airportService">Add Airport Service</Link></li>
                        <li><Link to="/dashboard/addtours">Add Tours</Link></li>
                        <li><Link to="/dashboard/manageService">Manage Service</Link></li>
                        <li><Link to="/dashboard/manageAirportService">Manage Airport Service</Link></li>
                        <li><Link to="/dashboard/manageTours">Manage Tours</Link></li>
                        <li><Link to="/dashboard/manageReviews">Manage Reviews</Link></li>
                    </>}
                </ul>
            
            </div>
        </div>
    );
};

export default Dashboard;