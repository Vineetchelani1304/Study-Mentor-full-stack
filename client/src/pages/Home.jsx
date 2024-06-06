import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'

import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'

const Home = () => {
  return (
    <div>
    {/* section one */}
    <div className=' group relative mx-auto flex flex-col w-11/12 items-center text-white justify-between max-w-maxContent'>
      <Link to='/signUp'>
        <div className=' mx-auto bg-slate-900 rounded-full  border-slate-300 p-1  transition-all duration-200 hover:scale-105 mt-10  font-ubantu text-slate-400 group-hover:bg-slate-800 px-5 shadow-2xl shadow-slate-600 '>
          <div className="flex flex-row justify-center items-center gap-2">
            <p>Become an Instructor</p>
            <FaArrowRight />
          </div>
        </div>
      </Link>
      <div className=' font-bold text-[32px] mt-7 w-[70%] text-center '>
          Empower Your Future With
          <HighlightText text={"Coding Skills"}/>
      </div>

      <div className=' text-[16px] w-[65%] text-center text-lg font-bold text-slate-500 mt-4'>
      With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
      </div>

      <div className=' flex flex-row gap-[24px] mt-6'>
        <CTAButton text={"Learn More"} linkto={""} active={true}>Learn More</CTAButton>
        <CTAButton text={"Book a Demo"}linkto={""} active={false}>Book a Demo</CTAButton>
      </div>

      <div className= 'mx-auto p-5 w-[70%] mt-10 h-[35%] shadow-white'>
        <video muted autoPlay loop className=' shadow-[0_-20px_50px_rgba(8,_112,_184,_0.7),_10px_10px_0px_rgba(255,_255,_255,_1)]'><source  src={Banner} type="video/mp4" /></video>
      </div>


      <div className=' flex flex-col w-[75%] gap-10'>
        <CodeBlocks position={"lg:flex-row"}
          heading={<div className=' font-semibold '>Unlock your<HighlightText text={"coding potential"}/>with our online courses.</div>}
          subheading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
          CTAButton1={
            {
              btnText : "Try it Yourself",
              linkto : "/signup",
              active : true
            }
          }
          CTAButton2={
            {
              btnText : "Learn More",
              linkto : "/login",
              active : false
            }
          }
          codeblock = {`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/\n">Two</a><ahref="three/">Three</a>\n/nav>`}
          codeColor={" text-yellow-200"}
        />
        <CodeBlocks position={"lg:flex-row-reverse"}
          heading={<div className=' font-semibold '>Start<HighlightText text={"coding in seconds"}/></div>}
          subheading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
          CTAButton1={
            {
              btnText : "Continue Lesson",
              linkto : "/signup",
              active : true
            }
          }
          CTAButton2={
            {
              btnText : "Learn More",
              linkto : "/login",
              active : false
            }
          }
          codeblock = {`<!DOCTYPE html>\n<html>\nhead><title>Example</\ntitle><linkrel="stylesheet"href="styles.css">\n/head>\nbody>\nh1><ahref="/">Header</a>\n/h1>\nnav><ahref="one/">One</a><ahref="two/\n">Two</a><ahref="three/">Three</a>\n/nav>`}
          codeColor={" text-yellow-200"}
        />
      </div>


      <ExploreMore/>
      
    </div>

    {/* section 2 */}
    <div className=" bg-white text-slate-500 border-2 border-white mt-10">
        <div className=" home_bg h-[333px] flex items-center gap-3">
          <div className=" w-11/12 max-w-maxContent flex flex-row justify-center gap-4 m-auto">
              <CTAButton text={"Explore Full Catalog"} active={true} linkto={""}/>
              <CTAButton text={"Learn More"} active={false} linkto={""}/>
          </div>
        </div>
        <div className='flex flex-row justify-center px-[120px] mt-[90px] '>
          <div className=' text-[32px] text-slate-900 font-bold w-[50%]'>
          Get the skills you need for a<HighlightText text={"job that is in demand."}/>
          </div>
          <div className=' flex flex-col w-[50%] gap-4 m-auto'>
            <div className=' text-[16px] text-[#2C333F] font-semibold'>
              The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
            </div>
            <div className=' w-[25%] text-center mt-5'>
              <CTAButton text={"learn More"} active={true} linkto={"/signup"}/>
            </div>
          </div>
        </div>

          <TimelineSection/>
          <LearningLanguageSection/>
    </div>
    <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-center '>
          <InstructorSection/>
    </div>

    
    
    <Footer/>
  </div>
  )
}

export default Home
