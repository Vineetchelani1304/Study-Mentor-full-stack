import React from 'react'
import { sidebarLinks } from '../../../data/dashboard-links'
import { logout } from '../../../services/operations/authAPI'
import { useDispatch, useSelector } from 'react-redux'
import SidebarLink from './SidebarLink'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { VscSignOut } from "react-icons/vsc";
import ConfirmationModal from '../../common/ConfirmationModal'

const Sidebar = () => {
    const { user, loading: profileLoading } = useSelector((state) => state.profile)
    console.log("printing User", user)
    console.log("user Acc",user.AccountType)
    const { loading: authLoading } = useSelector((state) => state.auth)
    const [modal, setModal] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    if (profileLoading || authLoading) {
        return (
            <div>Loading...</div>
        )
    }
    return (
        <div>
            <div className=" flex flex-col min-w-[250px] border-r-[1px] border-slate-700 h-[cal(100vh-5.5rem)] bg-slate-800">
                <div className="flex flex-col ">
                    {
                        sidebarLinks.map((link, index) => {
                            if (link.type !== user.AccountType) return null;
                            return (
                                <SidebarLink key={link.id} link={link} iconName={link.icon} />
                            )
                        })
                    }
                </div>
                <div className="mx-auto bg-slate-500 h-[1px] mb-6 mt-6 w-10/12"></div>

            </div>
            <div className=" flex flex-col min-w-[250px] border-r-[1px] border-slate-700 h-[cal(100vh-3.5rem)] bg-slate-800">
                <SidebarLink link={{ name: "settings", path: "dashboard" }} iconName="VscSettingsGear" />

                <button
                    onClick={
                        () => setModal({
                            text1: "Are you Sure ?",
                            text2: "You Will Be Logged Out",
                            btn1Text: "LogOut",
                            btn2Text: "Cancel",
                            btn1Handler: () => {
                                dispatch(logout(navigate))
                            },
                            btn2Handler: () => setModal(null)
                        })
                    }
                    className=' text-sm font-medium relative px-8 py-2 transition-all text-sm font-medium text-white'>

                    <div className="flex items-center gap-2 ">
                        <VscSignOut className='text-lg' />
                        <span>Logout</span>
                    </div>

                </button>

            </div>
            {modal && <ConfirmationModal modalData={modal} />}
        </div>
    )
}

export default Sidebar
