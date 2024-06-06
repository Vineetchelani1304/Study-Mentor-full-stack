import React, { useEffect } from 'react'
import logo from "../../assets/Logo/Logo-Full-Light.png"
import { Link, matchPath, useNavigate } from 'react-router-dom'
import {NavbarLinks} from "../../data/navbar-links"
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {AiOutlineShoppingCart} from "react-icons/ai"
import ProfileDropDown from '../core/Auth/ProfileDropDown'
import { apiConnector } from '../../services/apiconnector'
import { categories } from '../../services/apis'
import { useState } from 'react'
import {IoIosArrowDropdownCircle} from "react-icons/io";
import { useDispatch } from 'react-redux'
import { logout } from '../../services/operations/authAPI'
const subLinks = [
    {
        title: "python",
        link:"/catalog/python"
    },
    {
        title: "web dev",
        link:"/catalog/web-development"
    },
];


const Navbar = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout=()=>{
        localStorage.removeItem('token');
        dispatch(logout(Navigate))
    }
    

    console.log("Printing base url: ",process.env.REACT_APP_BASE_URL);
    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector( (state) => state.profile );
    const {totalItems} = useSelector( (state) => state.cart )
    const location = useLocation();

    // const [ subLinks, setSsubLinks]  = useState([]);

    // const fetchSublinks = async() => {
    //     try{
    //         const result = await apiConnector("GET", categories.CATEGORIES_API);
    //         console.log("Printing Sublinks result:" , result);
    //         setSsubLinks(result.data.data);
    //     }
    //     catch(error) {
    //         console.log("Could not fetch the category list");
    //     }
    // }


    // useEffect( () => {
    //     fetchSublinks();
    // },[] )



    const matchRoute = (route) => {
        return matchPath({path:route}, location.pathname);
    }

  return (
    <div className='flex h-14 items-center justify-center border-b-[1px] border-b-slate-700'>
      <div className='flex w-11/12 max-w-maxContent items-center justify-between'>
        {/* Image */}
      <Link to="/">
        <img src={logo} width={160} height={42} loading='lazy'/>
      </Link>

      {/* Nav Links */}
      <nav>
        <ul className='flex gap-x-6 text-white'>
        {
            NavbarLinks.map( (link, index) => (
                 <li key={index}>
                    {
                        link.title === "Catalog" ? (
                            <div className='relative flex items-center gap-2 group'>
                                <p>{link.title}</p>
                                <IoIosArrowDropdownCircle/>

                                <div className='invisible absolute left-[50%]
                                    translate-x-[-50%] translate-y-[40%]
                                 top-[50%]
                                flex flex-col rounded-md bg-white p-4 text-slate-900
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px] z-50'>

                                <div className='absolute left-[50%] top-0
                                translate-x-[80%]
                                translate-y-[-40%] h-6 w-6 rotate-45 rounded bg-white'>
                                </div>

                                {
                                    subLinks.length ? (
                                            subLinks.map( (subLink, index) => (
                                                <Link to={`${subLink.link}`} key={index} className=" px-2 py-2 mt-4 rounded hover:bg-slate-400">
                                                    <p>{subLink.title}</p>
                                                </Link>
                                            ) )
                                    ) : (<div></div>)
                                }

                                </div>


                            </div>

                        ) : (
                            <Link to={link?.path}>
                                <p className={`${ matchRoute(link?.path) ? "text-yellow-500" : "text-white"}`}>
                                    {link.title}
                                </p>
                                
                            </Link>
                        )
                    }
                </li>
             ) )
        }

        </ul>
      </nav>


        {/* Login/SignUp/Dashboard */}
        <div className='flex gap-x-4 items-center'>
                    {
                        user && user?.AccountType !== "instructor" && (
                            <Link to="/dashboard/cart" className='relative'>
                                <AiOutlineShoppingCart />
                                {
                                    totalItems > 0 && (
                                        <span>
                                            {totalItems}
                                        </span>
                                    )
                                }
                            </Link>
                        )
                    }
                    {
                        !token && (
                            <>
                                <Link to="/login">
                                    <button className='border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100 rounded-md'>
                                        Log in
                                    </button>
                                </Link>
                                <Link to="/signup">
                                    <button className='border border-slate-700 bg-slate-800 px-[12px] py-[9px] text-slate-100 rounded-md'>
                                        Sign Up
                                    </button>
                                </Link>
                            </>
                        )
                    }
                    {
                        token && (
                            <>
                                <ProfileDropDown />
                                <button onClick={handleLogout} className='border border-slate-700 bg-slate-800 px-[12px] py-[8px] text-slate-100 rounded-md'>
                                    Logout
                                </button>
                            </>
                        )
                    }
                </div>


      </div>
    </div>
  )
}

export default Navbar
