
import './App.css';
import Navber from './Pages/Shared/Navbar/Navber';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import Services from './Pages/Services/Services';
import Footer from './Pages/Shared/Footer/Footer';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyBookings from './Pages/Dashboard/MyBookings';
import MyReview from './Pages/Dashboard/MyReview';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddService from './Pages/Dashboard/AddService';
import ManageService from './Pages/Dashboard/ManageService';
import Airport from './Pages/Airport/Airport';
import AddAirportService from './Pages/Dashboard/AddAirportService';
import ManageAirportService from './Pages/Dashboard/ManageAirportService';
import ServiceInquire from './Pages/ServiceInquire/ServiceInquire';
import AllBookings from './Pages/Dashboard/AllBookings';
import AllReview from './Pages/Dashboard/AllReview';

function App() {
  return (
    <div  className='max-w-7xl mx-auto px-12'>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>}>
          <Route index element={<MyBookings></MyBookings>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='bookings' element={<RequireAdmin><AllBookings></AllBookings></RequireAdmin>}></Route>
          <Route path='addService' element={<RequireAdmin><AddService></AddService></RequireAdmin>}></Route>
          <Route path='airportService' element={<RequireAdmin><AddAirportService></AddAirportService></RequireAdmin>}></Route>
          <Route path='manageService' element={<RequireAdmin><ManageService></ManageService></RequireAdmin>}></Route>
          <Route path='manageAirportService' element={<RequireAdmin><ManageAirportService></ManageAirportService></RequireAdmin>}></Route>
          <Route path='manageReviews' element={<RequireAdmin><AllReview></AllReview></RequireAdmin>}></Route>
        </Route>
        <Route path="airport" element={<Airport />} />
        <Route path="serviceInquire" element={<ServiceInquire />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
