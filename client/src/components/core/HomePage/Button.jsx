import React from 'react'
import { Link } from 'react-router-dom'

const CTAButton = ({ children, linkto, active, text }) => {
    return (
        <div>
            <Link to={linkto}>
            {active && <div className=" text-[16px] bg-yellow-500 font-bold text-slate-800 shadow-[#FFFFFF] shadow-sm rounded-[8px] px-[24px] py-[12px] font-inter hover:scale-105 transition-all">
                {text}
            </div>}

            </Link>
            <Link to={linkto}>
                {!active && <div className=" text-[16px] bg-[#161D29] font-bold text-[#F1F2FF] shadow-[#FFFFFF] shadow-sm rounded-[8px] px-[24px] py-[12px] font-inter hover:scale-105 transition-all">
                    {text}
                </div>}

            </Link>
        </div>
    )
}

export default CTAButton
