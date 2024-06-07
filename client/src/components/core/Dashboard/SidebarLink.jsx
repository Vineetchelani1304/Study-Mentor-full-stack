import React from 'react'
import * as Icons from 'react-icons/vsc'
import { NavLink, matchPath, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
const SidebarLink = ({link,iconName}) => {
    const Icon = Icons[iconName]
    const location = useLocation();
    const dispatch = useDispatch();

    function matchRoute(route){
        return matchPath({path: route},location.pathname)
    }
  return (
    <NavLink
        to={link.path}
        className={`${matchRoute(link.path) ? " bg-yellow-800 border-l-[2px] border-l-yellow-500" : " bg-opacity-0"}  relative px-8 py-2 transition-all text-sm font-medium text-white`}
    >
        <div className=" flex flex-row gap-2">
            <Icon className=" text-lg"/>
            <span>{link.name}</span>
        </div>
    </NavLink>
  )
}

export default SidebarLink
