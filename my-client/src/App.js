import './App.css';
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import ContactUs from './pages/ContactUs';
import AddStudent from './pages/AddStudent';

function App() {
  return (
    <>
    <Navbar />

    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/services" element={<Service />} />
      <Route path="/add-student" element={<AddStudent />} />
      <Route path="/contactus" element={<ContactUs />} />
    
    </Routes>
    </>
  );
}

export default App;
