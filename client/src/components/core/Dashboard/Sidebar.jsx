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
    console.log("user Acc", user.AccountType)
    const { loading: authLoading } = useSelector((state) => state.auth)
    const [modal, setModal] = useState(null)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    if (profileLoading || authLoading) {
        return (
            <div className="grid h-[calc(100vh-3.5rem)] min-w-[220px] items-center border-r-[1px] border-r-slate-700 bg-slate-800">
                <div className="spinner"></div>
            </div>
        )
    }
    return (
        <div>
            <div className=" flex h-[calc(100vh-3.5rem)] min-w-[220px] flex-col border-r-[1px] border-r-slate-700 bg-slate-800 py-10">
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
                <SidebarLink link={{ name: "settings", path: "dashboard/Settings" }} iconName="VscSettingsGear" />

                <button
                    onClick={() =>
                        setModal({
                            text1: "Are you sure?",
                            text2: "You will be logged out of your account.",
                            btn1Text: "Logout",
                            btn2Text: "Cancel",
                            btn1Handler: () => dispatch(logout(navigate)),
                            btn2Handler: () => setModal(null),
                        })
                    }
                    className="px-8 py-2 text-sm font-medium text-white"
                >
                    <div className="flex items-center gap-x-2">
                        <VscSignOut className="text-lg" />
                        <span>Logout</span>
                    </div>
                </button>

            </div>
            {modal && <ConfirmationModal modalData={modal} />}
        </div>
    )
}

export default Sidebar
