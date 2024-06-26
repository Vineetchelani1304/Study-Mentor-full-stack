import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/core/Dashboard/Sidebar'

const Dashboard = () => {
    const { loading: profileLoading } = useSelector((state) => state.profile)
    const { loading: authLoading } = useSelector((state) => state.auth)
    
    if (profileLoading || authLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className='relative flex min-h-[calc(100vh-3.5rem)]'>
            <Sidebar />
            <div className='flex-grow h-[calc(100vh-3.5rem)] overflow-auto'>
                <div className='mx-auto max-w-[1000px] py-10 px-4'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
