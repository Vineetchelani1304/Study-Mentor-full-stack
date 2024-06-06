import React from 'react'
import logo1 from '../../../assets/TimeLineLogo/Logo1.svg'
import logo2 from '../../../assets/TimeLineLogo/Logo2.svg'
import logo3 from '../../../assets/TimeLineLogo/Logo3.svg'
import logo4 from '../../../assets/TimeLineLogo/Logo4.svg'
import timelineimage from '../../../assets/Images/TimelineImage.png'
const Experience = () => {

    const TimeLine = [
        {
            logo : logo1,
            heading : "Leadership",
            subHeading : "Fully committed to the success company"
        },
        {
            logo : logo2,
            heading : "Responsibility",
            subHeading : "Students will always be our top priority"
        },
        {
            logo : logo3,
            heading : "Flexibility",
            subHeading : "FulThe ability to switch is an important skills"
        },
        {
            logo : logo4,
            heading : "Solve the problem",
            subHeading : "Code your way to a solution"
        },
    ]
  return (
    <div className=" flex flex-row w-11/12 max-w-maxContent mx-[120px] my-[52px] ">
        <div className=" w-[40%] flex flex-col gap-5 px-15 py-16">
                {
                    TimeLine.map((element,index)=>{
                        return (
                            <div className=" flex flex-row gap-[24px] ">
                                
                                <div className=' bg-white w-[70px] h-[70px] flex items-center justify-center rounded-full shadow-md'>
                                    <img src={element.logo}/>
                                </div>

                                <div className='flex flex-col '>
                                    <div className='font-bold text-[18px]'>{element.heading}</div>
                                    <div className='font-semibold'>{element.subHeading}</div>
                                </div>
                            </div>
                            
                        )
                    })
                }
            

        </div>
        <div className=' relative m-auto w-[50%] '>
            <img src={timelineimage} className=' object-cover h-fit shadow-[0_0px_20px_rgba(8,_112,_184,_0.7),_5px_5px_0px_rgba(255,_255,_255,_1)]'/>
            <div className='flex flex-row bg-[#014A32]  w-[45%] p-1 absolute top-[90%] right-[25%]'>
                <div className='flex flex-row gap-2 items-center border-r-2 m-3 border-[#037957] px-2'>
                    <p className=' font-bold text-white text-[30px]'>10</p>
                    <div>
                        <p>YEARS</p>
                        <p>EXPERIENCE</p>
                    </div>
                </div>
                <div className='flex flex-row gap-2 items-center    '>
                    <p className=' font-bold text-white text-[30px]'>250</p>
                    <div>
                        <p>TYPES OF</p>
                        <p>COURSES</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience
