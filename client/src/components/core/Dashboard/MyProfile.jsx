import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import IconButton from '../../common/IconButton'
import Sidebar from './Sidebar'
const MyProfile = () => {
    const {user} = useSelector((state)=>state.profile)
    const navigate = useNavigate()
  return (
    <div className=" text-white w-11/12">
        {/* <Sidebar/> */}
      <h1 className=" text-3xl  ">
        My Profile
      </h1>
      {/* section 1  */}
      <div>
        <div>
            <img src={`${user.image}`} alt="" class=" aspect-square w-[78px] rounded-full object-cover" />
            <div>
                <p>{user.firstName + ' ' + user.lastName}</p>
                <p>{user.email}</p>
            </div>
        </div>
        <IconButton text="edit" onClick={()=>{
            navigate("/dashboard/setting")
        }}/>
      </div>


    </div>
  )
}

export default MyProfile
