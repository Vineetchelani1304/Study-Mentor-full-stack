import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RiEditBoxLine } from "react-icons/ri"
import { formattedDate } from '../../../utils/dateFormatter'
import { useNavigate } from 'react-router-dom'
import IconButton from '../../common/IconButton'
import Sidebar from './Sidebar'
const MyProfile = () => {
    const { user } = useSelector((state) => state.profile)
    const navigate = useNavigate()
    return (
        <>
            <div className=" text-white mx-auto">
                {/* <Sidebar/> */}
                <h1 className="mb-14 text-3xl font-medium text-white">
                    My Profile
                </h1>
                {/* section 1  */}
                <div className='flex items-center justify-evenly rounded-md border-[1px] border-slate-700 bg-slate-800 p-8 px-12'>
                    <div className='flex items-center gap-x-4'>
                        <img src={`${user.image}`} alt="" className=" aspect-square w-[78px] rounded-full object-cover" />
                        <div className='space-y-1 mt-6'>
                            <p className='text-lg font-semibold text-white'>{user.firstName + ' ' + user.lastName}</p>
                            <p className='text-sm text-slate-400'>{user.email}</p>
                        </div>
                    </div>
                    <IconButton text="Edit" onClick={() => {
                        navigate("/dashboard/setting")
                    }}>
                        <RiEditBoxLine />
                    </IconButton>
                </div>
                <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-slate-700 bg-slate-800 p-8 px-12">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-lg font-semibold text-white">About</p>
                        <IconButton text="Edit" onClick={() => {
                            navigate("/dashboard/setting")
                        }}>
                            <RiEditBoxLine />
                        </IconButton>
                    </div>
                    <p
                        className={`${user?.additionalDetails?.about
                            ? "text-white"
                            : "text-slate-400"
                            } text-sm font-medium`}
                    >
                        {user?.additionalDetails?.about ?? "Write Something About Yourself"}
                    </p>
                </div>

                <div className="my-10 flex flex-col gap-y-10 rounded-md border-[1px] border-slate-700 bg-slate-800 p-8 px-12">
                    <div className="flex w-full items-center justify-between">
                        <p className="text-lg font-semibold text-white-5">
                            Personal Details
                        </p>
                        <IconButton text="Edit" onClick={() => {
                            navigate("/dashboard/setting")
                        }}>
                            <RiEditBoxLine />
                        </IconButton>
                    </div>
                    <div className="flex max-w-[500px] justify-between gap-4">
                        <div className="flex flex-col gap-y-5">
                            <div>
                                <p className="mb-2 text-sm text-slate-600">First Name</p>
                                <p className="text-sm font-medium text-white">
                                    {user?.firstName}
                                </p>
                            </div>
                            <div>
                                <p className="mb-2 text-sm text-slate-600">Email</p>
                                <p className="text-sm font-medium text-white">
                                    {user?.email}
                                </p>
                            </div>
                            <div>
                                <p className="mb-2 text-sm text-slate-600">Gender</p>
                                <p className="text-sm font-medium text-white">
                                    {user?.additionalDetails?.gender ?? "Add Gender"}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-5 ">
                            <div>
                                <p className="mb-2 text-sm text-slate-600">Last Name</p>
                                <p className="text-sm font-medium text-white">
                                    {user?.lastName}
                                </p>
                            </div>
                            <div>
                                <p className="mb-2 text-sm text-slate-600">Phone Number</p>
                                <p className="text-sm font-medium text-white">
                                    {user?.additionalDetails?.contactNumber ?? "Add Contact Number"}
                                </p>
                            </div>
                            <div>
                                <p className="mb-2 text-sm text-slate-600">Date Of Birth</p>
                                <p className="text-sm font-medium text-white">
                                    {formattedDate(user?.additionalDetails?.dateOfBirth) ??
                                        "Add Date Of Birth"}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default MyProfile
