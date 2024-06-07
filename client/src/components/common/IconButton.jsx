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
    className='bg-yellow-400 p-1 rounded-md font-bold w-fit text-black'
    >
        {
            children?(
                <>
                    <span>
                        {text}
                    </span>
                    {children}
                </>
            ) :(text)
        }
    </button>
  )
}

export default IconButton
