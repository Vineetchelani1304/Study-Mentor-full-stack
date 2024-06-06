import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPasswordResetToken } from '../services/operations/authAPI'

const ForgotPassword = () => {
    const {loading} = useSelector((state)=>state.auth)
    const [emailSent,setEmailSent] = useState(false)
    const [email,setEmail] = useState("");
    const dispatch = useDispatch()

    function handleOnSubmit(e){
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))
    }
  return (
    <div className=" text-white flex justify-center items-center">
      {
        loading ? ( <div>Loading...</div> ): (
            <div className=" m-auto mt-[10%]">
                <h1 className=" text-3xl font-bold">
                    {
                        !emailSent ? "Reset Your Password" : "Check Email"
                    }
                </h1>
                <p>
                    {
                        !emailSent ? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery" : `We have sent the reset email to ${email}`
                    }
                </p>

                <form onSubmit={handleOnSubmit} className=' flex flex-col' >
                    {
                        !emailSent && (
                            <label>
                                <p>Email Address</p>
                                <input type="text" required placeholder="Enter your email address" className=' outline-none rounded-md p-2 text-black' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </label>
                        )
                    }
                    <button className=' bg-yellow-400 font-bold p-2 text-black rounded-md w-fit' type='submit'>
                    {
                        !emailSent ? "Reset Password" : "Resend Email"
                    }
                    </button>
                </form>

                <div>
                    <Link to = {"/login"}>
                        <p>Back to Login</p>
                    </Link>
                </div>
            </div>
        )    
      }
    </div>
  )
}

export default ForgotPassword
