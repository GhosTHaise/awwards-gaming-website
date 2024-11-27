import React from 'react'

type ButtonProps = {
    id : string;
    title : string;
    containerClass : string;
    leftIcon? : React.ReactNode;
    rightIcon? : React.ReactNode;
}

const Button = ({id,containerClass,rightIcon,leftIcon,title} : ButtonProps) => {
  return (
    <div id={id} className={`group relative z-1- w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>
            {title} 
        </div>
      </span>
      {rightIcon}
    </div>
  )
}

export default Button
