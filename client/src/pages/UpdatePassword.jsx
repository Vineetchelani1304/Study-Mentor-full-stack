import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { resetPassword } from '../services/operations/authAPI';
// import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const UpdatePassword = () => {
    // const location = useLocation();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.auth);
    const [showPass, setShowPass] = useState(false);
    const [showConfirmPass, setShowConfirmPass] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
    });

    // Extract token from URL
    // const token = location.pathname.split('/').at(-1);
    const { id: token } = useParams(); 
    console.log('Token extracted from URL:', token); // Debug log to verify token extraction

    function handleOnChange(e) {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    }

    const { password, confirmPassword } = formData;

    function handleOnSubmit(e) {
        e.preventDefault();
        dispatch(resetPassword(password, confirmPassword, token));
    }

    return (
        <div className=' flex justify-center items-center gap-6'>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div className='flex gap-2 flex-col m-auto mt-[10%]'>
                    <h1 className='text-white text-3xl font-bold '>Choose New Password</h1>
                    <p className='text-white'>Almost done. Enter your new password and you're all set.</p>
                    <form onSubmit={handleOnSubmit} className='flex flex-col gap-4'>
                        <label className='items-center justify-center gap-2 text-white'>
                            <p>New Password</p>
                            <div className='flex flex-row'>
                            <input
                                className=' outline-none rounded-md p-2 px-3 text-black'
                                type={showPass ? 'text' : 'password'}
                                name="password"
                                required
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Enter your new password"
                            />
                            <span onClick={() => setShowPass((prev) => !prev)} className='text-white text-3xl mt-1'>
                                {showPass ? <IoIosEye /> : <IoIosEyeOff />}
                            </span>
                            </div>
                        </label>
                        <label className=' text-white items-center justify-center gap-2'>
                            <p>Confirm Password</p>
                            <div className='flex flex-row'>
                            <input
                               className=' outline-none rounded-md p-2 px-3 text-black'
                                type={showConfirmPass ? 'text' : 'password'}
                                name="confirmPassword"
                                required
                                value={confirmPassword}
                                onChange={handleOnChange}
                                placeholder="Confirm your new password"
                            />
                            <span onClick={() => setShowConfirmPass((prev) => !prev)} className='text-white text-3xl mt-1'>
                                {showConfirmPass ? <IoIosEye /> : <IoIosEyeOff />}
                            </span>
                            </div>
                        </label>
                        <button type="submit" className='text-black rounded-md w-fit font-bold bg-yellow-400 p-1'>Reset Password</button>
                    </form>
                    <div>
                        <Link to="/login">Back to Login</Link>
                    </div>
                    {/* Display the token for verification */}
                    
                </div>
            )}
        </div>
    );
};

export default UpdatePassword;
