import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/TestimonialSection";
import AdminDashboard from "./pages/AdminDashboard";
import CustomerDashboard from "./pages/CustomerDashboard";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/protectedRoutes";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* create protected route */}

          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                {" "}
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customer"
            element={
              <ProtectedRoute role="customer">
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
           <TestimonialSection />
        <Footer/>
      
      </div>
    </div>
  );
}

export default App;
