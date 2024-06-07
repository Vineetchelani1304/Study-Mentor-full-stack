import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UpdatePassword from "./pages/UpdatePassword";
import VerifyOtp from "./pages/VerifyOtp";
import AboutUs from "./components/core/AboutUsPage/AboutUs";
import ContactUs from "./components/core/ContactUsPage/ContactUs";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgotPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyOtp/>
            </OpenRoute>
          }
        />
        <Route
          path="about"
          element={
            <OpenRoute>
              <AboutUs  />
            </OpenRoute>
          }
        />
        <Route
          path="contact"
          element={
            <OpenRoute>
              <ContactUs  />
            </OpenRoute>
          }
        />
        <Route path="dashboard/my-profile" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
