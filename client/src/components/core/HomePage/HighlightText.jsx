import React from 'react'

const HighlightText = ({text}) => {
  return (
    <span className=' text-blue-300 text-[32px] text-5xl p-4 text-center font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
        {""}
        {text}
    </span>
  )
}

export default HighlightText
