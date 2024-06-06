import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from './Button'
import {TypeAnimation} from 'react-type-animation' 
const CodeBlocks = ({ heading, position, subheading, backGroundgredient, codeColor, CTAButton1, CTAButton2,codeblock }) => {
    return (
        <div className={`flex ${position} my-20 justify-between gap-10`}>
            <div className=' flex flex-col gap-8 w-[50%]'>
                <div className='font-bold text-[32px]'>{heading}</div>
                <div className='text-[16px] text-lg font-bold text-slate-500'>{subheading}</div>
            <div className=' flex flex-row gap-7 mt-7'>
                <CTAButton text={"try it Yourself"} active={CTAButton1.active} linkto={CTAButton1.linkto} />
                <CTAButton text={"Learn More"} active={CTAButton2.active} linkto={CTAButton2.linkto} />
            </div>
            </div>

            <div className=' flex flex-row text-[16px] w-[100%] py-4 lg:w-[500px] border-2 rounded-lg p-4 transition-all bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-slate-900 via-gray-600 to-slate-800'>
                <span className='flex flex-col w-[12%] text-slate-900 font-bold font-inter text-center'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                    <p>5</p>
                    <p>6</p>
                    <p>7</p>
                    <p>8</p>
                    <p>9</p>
                    <p>10</p>
                    <p>11</p>
                    
                </span>
                <span className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
                    <TypeAnimation
                        sequence={[codeblock,5000,""]}
                        repeat={Infinity}
                        omitDeletionAnimation={true}
                        cursor={true}
                        style={
                            {
                                whiteSpace:"pre-line",
                                display:"block"
                            }
                        }
                    
                    />
                </span>
            </div>
        </div>

    )
}

export default CodeBlocks
