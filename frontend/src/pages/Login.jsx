import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import { ToastContainer, toast } from "react-toastify"; // Assuming React Toastify for toast notifications

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true });
      setUser(res.data);

      toast.success("Login Successful!", {
        position: "center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        toastId: "loginSuccess", // Optional: Unique ID for managing toasts
      });

      navigate("/"); // Redirect to desired page after successful login
    } catch (err) {
      setError(true);
      console.error(err); // Log the error for debugging
      alert("Login Failed! Please check your email and password.", {
         // Optional: Unique ID for managing toasts
      });
    }
  };

  // Clear error state on component mount (optional for better UX)
  useEffect(() => {
    setError(false);
  }, []);

  return (
    <>
      <ToastContainer /> {/* Include ToastContainer for toast notifications */}
      <div className="flex items-center justify-between px-6 md:px-[200px] py-4">
        <h1 className="text-lg md:text-xl font-extrabold">
          <Link to="/">Interview Insights</Link>
        </h1>
        <h3>
          <Link to="/register">Register</Link>
        </h3>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh]">
        <div className="flex flex-col justify-center items-center space-y-4 w-[80%] md:w-[25%]">
          <h1 className="text-xl font-bold text-left">Log in to your account</h1>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter your email"
            type="email" // Use type="email" for better validation
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border-2 border-black outline-0"
            placeholder="Enter your password"
            type="password"
          />
          <button onClick={handleLogin} className="w-full px-4 py-4 text-lg font-bold text-white bg-black rounded-lg hover:bg-gray-500 hover:text-black">
            Log in
          </button>
          {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
          <div className="flex justify-center items-center space-x-3">
            <p>New here?</p>
            <p className="text-gray-500 hover:text-black">
              <Link to="/register">Register</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
