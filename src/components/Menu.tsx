import React, { ButtonHTMLAttributes } from 'react'


interface MenuProps {
  setMode: any
}

export function Menu({setMode} : MenuProps)  {
  return (
    <React.Fragment>
      <button onClick={setMode} className='font-pixel text-2xl py-1 px-2 border-slate-400 border font-medium text-black focus:outline-none rounded-full gradient-button'>New Game</button>
    </React.Fragment>
  )
}