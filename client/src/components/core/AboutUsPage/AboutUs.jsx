import React from 'react'
import HighlightText from '../HomePage/HighlightText'
import image1 from '../../../assets/Images/aboutus1.webp'
import image2 from '../../../assets/Images/aboutus2.webp'
import image3 from '../../../assets/Images/aboutus3.webp'
import image4 from '../../../assets/Images/FoundingStory.png'
import CTAButton from '../HomePage/Button'
import Footer from '../../common/Footer'
import ContactForm from '../../common/ContactForm'
const AboutUs = () => {
  return (
    <div className=" text-white ">
      <div className="flex flex-col bg-slate-400   max-w-maxContent mx-auto pt-10 relative">
            <div className=" m-auto">
                <p className=' text-3xl font-bold text-center'>Driving Innovation in Online Education for a</p> 
                <p className='text-center'><HighlightText text={"Brighter Future"}/></p>
                <p className='text-slate-600 text-center mx-[20%] font-semibold mt-8'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
            </div>
            <div className=' flex lg:flex-row flex-col   gap-10 mt-16 mx-auto content-center mb-6'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
            </div>
      </div>

      {/* section 2 */}
      <div className='mt-[10%]'>
        <p className=' text-2xl font-bold text-center lg:mx-[10%] mx-4'>
        We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={"combines technology,"}/><span className=" text-orange-400">expertise</span>, and community to create an <span className=" text-orange-400">unparalleled educational experience.</span>
        </p>
      </div>

      <div className='flex lg:flex-row flex-col mt-28 mb-28 w-11/12 mx-auto  '>
        <div className=' flex flex-col lg:w-[45%] w-[80%]  mx-auto '>
            <div className='lg:w-[50%] w-[100%]'>
                <h1 className=' text-orange-400 text-3xl font-bold text-center lg:text-left'>Our Founding Story</h1>
            </div>
            <div className='flex flex-col  mt-8'>
                <p className='text-[16px] text-slate-400'>Our e-learning platform was born out of a shared vision and passion for transforming education. It all began with a group of educators, technologists, and lifelong learners who recognized the need for accessible, flexible, and high-quality learning opportunities in a rapidly evolving digital world.</p>
                <br />
                <br />
                <p className='text-[16px] text-slate-400'>As experienced educators ourselves, we witnessed firsthand the limitations and challenges of traditional education systems. We believed that education should not be confined to the walls of a classroom or restricted by geographical boundaries. We envisioned a platform that could bridge these gaps and empower individuals from all walks of life to unlock their full potential.</p>
            </div>
        </div>
        <div className='  w-[85%] lg:w-[35%] mx-auto flex lg:items-center mt-6  '>
            <img src={image4} alt="" className=' lg:w-fit mx-auto shadow-orange-300 shadow-lg' />
        </div>

      </div>
      <div className='flex lg:flex-row flex-col mt-28 lg:mb-28 gap-8 w-11/12 mx-auto   '>
        <div className='  flex flex-col lg:w-[45%] w-[80%]  mx-auto  '>
            <div className='lg:w-[50%] w-[100%] lg:text-left text-center'>
                <h1 className=' text-orange-400 text-3xl font-bold'>Our Vision</h1>
            </div>
            <div className='flex flex-col  mt-8'>
                <p className='text-[16px] text-slate-400'>With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.
                </p>
                
            </div>
        </div>
        <div className=' flex flex-col lg:w-[45%] w-[80%]  mx-auto  '>
            <div className='lg:w-[50%] w-[100%] lg:text-left text-center'>
                <HighlightText text={"Our Mission"}/>
            </div>
            <div className='flex flex-col  mt-8'>
                <p className='text-[16px] text-slate-400'>Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
                </p>
            </div>
        </div>
      </div>
      <div className='flex justify-center items-center mb-10 mt-6'>
        <CTAButton text={"Learn More"} active={true} linkto={"/signup"}/>
      </div>
      <div className=' mt-[5%] mb-[10%]'>
        <ContactForm/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs
