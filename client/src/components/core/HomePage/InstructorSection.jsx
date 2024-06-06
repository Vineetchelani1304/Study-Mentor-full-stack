import React from 'react'
import instuctorimg from '../../../assets/Images/Instructor.png'
import HighlightText from './HighlightText'
import CTAButton from './Button'
const InstructorSection = () => {
  return (
    <div className=' flex flex-row mx-16 gap-14 my-14 '>
      <img src={instuctorimg} alt="" className=' w-[50%] shadow-white rounded-md' />
      <div className='flex flex-col w-[50%] my-auto gap-2'>
          <div className=' font-bold font-inter text-[30px] text-white w-[55%]'>Become an<HighlightText text={"instructor"}/></div>
          <div className=' text-slate-300 w-[70%] '>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</div>
          <div className=' w-fit mt-12'>
            <CTAButton text={"Start Teaching Today"} active={true} linkto={"/signup"} />
          </div>
      </div>
    </div>
  )
}

export default InstructorSection
