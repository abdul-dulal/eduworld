import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Contact from "./Components/pages/Contact";
import Course from "./Components/pages/corse/Course";

import Home from "./Components/pages/home/Home";
import Login from "./Components/pages/login/Login";
import Signup from "./Components/pages/signup/Signup";
import Footer from "./Components/shere/Footer";
import { ToastContainer } from "react-toastify";
import Order from "./Components/pages/order/Payment";
import Myorder from "./Components/pages/Myorder";
import PrivateRoute from "./Components/shere/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Course />} />
        <Route path="/contact" element={<Contact />} />

        <Route
          path="/payment/:id"
          element={
            <PrivateRoute>
              <Order />
            </PrivateRoute>
          }
        />
        <Route path="/myorder" element={<Myorder />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
