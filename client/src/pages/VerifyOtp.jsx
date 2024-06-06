// // import React, { useEffect, useState } from 'react'
// // import OTPInput from 'react-otp-input'
// // import { useDispatch, useSelector } from 'react-redux'
// // import { Link,useNavigate } from 'react-router-dom'
// // import { sendOtp, signUp } from '../services/operations/authAPI'
// // const VerifyOtp = () => {
// //     const dispatch = useDispatch();
// //     const Navigate = useNavigate();
// //     const [otp,setOtp] = useState("")
// //     const {loading,signupData} = useSelector((state)=>state.auth)
// //     const {firstName,lastName,email,password,confirmPassword,AccountType} = signupData
// //     useEffect(()=>{
// //         if(!signupData)
// //             {
// //                 Navigate('/signup')
// //             }
// //     },[])
// //     //         firstName,
// //     //         lastName,
// //     //         email,
// //     //         password,
// //     //         confirmPassword,
// //     //         AccountType,
// //     //         otp
// //     function HandleOnSubmit(e){
// //         e.preventDefault();
// //         console.log("First Name:", firstName);
// //         console.log("Last Name:", lastName);
// //         console.log("Email:", email);
// //         console.log("Password:", password);
// //         console.log("Confirm Password:", confirmPassword);
// //         console.log("OTP:", otp);
// //         console.log("Account Type:", AccountType);
    
// //         if (password !== confirmPassword) {
// //             alert("Passwords do not match");
// //             return;
// //         }
// //         dispatch(signUp(firstName,lastName,email,password,confirmPassword,otp,AccountType,Navigate))
// //     }
// //   return (
// //     <div className="text-black flex justify-center items-center">
// //       {
// //         loading ?(
// //             <div>Loading...</div>
// //         ):(
// //             <div className=' mt-[10%] flex flex-col gap-2'>
// //                 <h1 className=' text-4xl font-bold text-white'>Verify Email</h1>
// //                 <p className=' text-white'>A verification code has been sent to you. Enter it below</p>
// //                 <form onSubmit={HandleOnSubmit} className=' flex flex-col gap-4'>
// //                     <OTPInput
// //                         value={otp}
// //                         onChange={setOtp}
// //                         numInputs={6}
// //                         renderSeparator={<span>"  "</span>}
// //                         renderInput={(props) => <input {...props} placeholder='-' className="text-slate-100 font-bold text-2xl rounded-md p-1 bg-slate-700 content-center" />}
                        
// //                     />
// //                     <button type='submit' className=' bg-yellow-400 rounded-md text-black font-bold p-2'>
// //                         Verify Email
// //                     </button>
// //                 </form>

// //                 <div className='flex justify-between'>
// //                     <div>
// //                         <Link to='/login'>
// //                             <p className="text-white">Back To Login</p>
// //                         </Link>
                        
// //                     </div>
// //                     <button className='text-white' onClick={()=>dispatch(sendOtp(signupData.email,Navigate))}>
// //                         resend otp
// //                     </button>

// //                 </div>
// //             </div>
// //         )
// //       }
// //     </div>
// //   )
// // }

// // export default VerifyOtp
// import React, { useEffect, useState } from 'react'
// import OTPInput from 'react-otp-input'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { sendOtp, signUp } from '../services/operations/authAPI'

// const VerifyOtp = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const [otp, setOtp] = useState("")
//     const { loading, signupData } = useSelector((state) => state.auth)
//     const { firstName, lastName, email, password, confirmPassword, AccountType } = signupData || {}

//     useEffect(() => {
//         console.log("Current OTP:", otp);
//         if (!signupData) {
//             navigate('/signup')
//         }
//     }, [otp,signupData, navigate])

//     function handleOnSubmit(e) {
//         e.preventDefault();
//         if (password !== confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }
//         console.log("OTP Submitted:", otp); // Log OTP here
//         dispatch(signUp(firstName, lastName, email, password, confirmPassword, otp, AccountType, navigate))
//     }

//     return (
//         <div className="text-black flex justify-center items-center">
//             {
//                 loading ? (
//                     <div>Loading...</div>
//                 ) : (
//                     <div className=' mt-[10%] flex flex-col gap-2'>
//                         <h1 className=' text-4xl font-bold text-white'>Verify Email</h1>
//                         <p className=' text-white'>A verification code has been sent to you. Enter it below</p>
//                         <form onSubmit={handleOnSubmit} className=' flex flex-col gap-4'>
//                         <OTPInput
//                                 value={otp}
//                                 onChange={setOtp}
//                                 numInputs={6}
//                                 renderSeparator={<span>"  "</span>}
//                                 renderInput={(props) => <input {...props} placeholder='-' className="text-slate-100 font-bold text-2xl rounded-md p-1 bg-slate-700 content-center" />}
//                             />

//                             <button type='submit' className=' bg-yellow-400 rounded-md text-black font-bold p-2'>
//                                 Verify Email
//                             </button>
//                         </form>
//                         <div className='flex justify-between'>
//                             <div>
//                                 <Link to='/login'>
//                                     <p className="text-white">Back To Login</p>
//                                 </Link>
//                             </div>
//                             <button className='text-white' onClick={() => dispatch(sendOtp(signupData.email, navigate))}>
//                                 Resend OTP
//                             </button>
//                         </div>
//                     </div>
//                 )
//             }
//         </div>
//     )
// }

// export default VerifyOtp




import React, { useEffect, useState } from 'react';
import OTPInput from 'react-otp-input';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { sendOtp, signUp } from '../services/operations/authAPI';

const VerifyOtp = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [otp, setOtp] = useState("");
    const { loading, signupData } = useSelector((state) => state.auth);
    const { firstName, lastName, email, password, confirmPassword, AccountType } = signupData;

    useEffect(() => {
        if (!signupData) {
            navigate('/signup');
        }
    }, [signupData, navigate]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log("Submitting with data by verify otp:", {
            firstName, lastName, email, password, confirmPassword, AccountType, otp
        });
        dispatch(signUp(firstName, lastName, email, password, confirmPassword, otp, AccountType, navigate));
    };

    return (
        <div className="text-black flex justify-center items-center">
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <div className='mt-[10%] flex flex-col gap-2'>
                        <h1 className='text-4xl font-bold text-white'>Verify Email</h1>
                        <p className='text-white'>A verification code has been sent to you. Enter it below</p>
                        <form onSubmit={handleOnSubmit} className='flex flex-col gap-4'>
                            <OTPInput
                                value={otp}
                                onChange={setOtp}
                                numInputs={6}
                                renderSeparator={<span>"  "</span>}
                                renderInput={(props) => <input {...props} placeholder='-' className="text-slate-100 font-bold text-2xl rounded-md p-1 bg-slate-700 content-center" />}
                            />
                            <button type='submit' className='bg-yellow-400 rounded-md text-black font-bold p-2'>
                                Verify Email
                            </button>
                        </form>
                        <div className='flex justify-between'>
                            <div>
                                <Link to='/login'>
                                    <p className="text-white">Back To Login</p>
                                </Link>
                            </div>
                            <button className='text-white' onClick={() => dispatch(sendOtp(signupData.email, navigate))}>
                                Resend OTP
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default VerifyOtp;
