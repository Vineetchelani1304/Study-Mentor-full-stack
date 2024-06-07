import React from 'react'

const IconButton = ({
    text,
    onClick,
    children,
    disabled,
    outline=false,
    customClasses,
    type
}) => {
  return (
    <button 
    disabled={disabled}
    onClick={onClick}
    className='bg-yellow-400 p-1 rounded-md hover:scale-105 font-bold w-fit text-black'
    >
        {
            children?(
                <div className='bg-yellow-400 w-fit flex flex-row gap-2 items-center justify-center'>
                    <span>
                        {text}
                    </span>
                    {children}
                </div>
            ) :(text)
        }
    </button>
  )
}

export default IconButton
