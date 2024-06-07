import React from 'react'
import IconButton from './IconButton'

const ConfirmationModal = ({modalData}) => {
  return (
    <div className=" w-[210px] flex mx-auto mt-[15%] text-white bg-opacity-5 border-[2px] p-4 rounded-xl right-[20%] gap-3 ">
      <div className=" flex flex-col gap-2">
        <p className=" text-2xl font-bold">
            {modalData.text1}
        </p>
        <p className="">
            {modalData.text2}
        </p>
        <div className=" flex gap-2">
            <IconButton
            onClick={modalData.btn1Handler}
            text={modalData.btn1Text}
            />
            <button onClick={modalData.btn2Handler} className=' bg-slate-400 font-bold text-slate-800 hover:border-[1px] hover:border-slate-300 w-fit p-1 rounded-md'>
                {modalData.btn2Text}
            </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmationModal
