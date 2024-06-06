import React from 'react'
import HighlightText from './HighlightText'
import img2 from '../../../assets/Images/Compare_with_others.svg'
import img3 from '../../../assets/Images/Plan_your_lessons.svg'
import img1 from '../../../assets/Images/Know_your_progress.svg'
import CTAButton from './Button'
const LanguageSection = () => {
  return (
    <div className=" flex flex-col px-[120px] my-[90px]  ">
      <div className=" flex flex-col gap-[12px] px-[220px]">
        <div className=' text-[30px] font-bold text-black text-center'>Your swiss knife for<HighlightText text={"learning any language"}/></div>
        <div className=' text-center font-semibold font-inter'>Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</div>
      </div>
      <div className=' flex flex-row justify-center relative items-center'>
        <img src={img1} alt="" className=" -mr-32" />
        <img src={img2} alt="" className=" " />
        <img src={img3} alt=""  className=" -ml-36 "/>
      </div>

      <div className=' mt-[88px] flex justify-center items-center'>
            <CTAButton active={true} text={"Learn More"} linkto={"/signup"}/> 
      </div>
    </div>
  )
}

export default LanguageSection
