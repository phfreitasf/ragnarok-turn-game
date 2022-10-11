import React, { useEffect, useState } from 'react'
import './App.css'
import { Battle } from './components/Battle/Battle'
import { Menu } from './components/Menu'
import { Stats } from './components/Stats'

export interface Swordman {
 
  Atributos: {
    STR: number,
    AGI: number,
    VIT: number,
    INT: number,
    DEX: number,
    LUK: number,
    POINTS: number,
  },
  Status: {
    Attack: number,
    Defense:number,
    Flee: number,
    Acc: number,
    Critical: number,
    HP : number,
    SP : number,
    CURRENTHP: number,
    CURRENTSP: number,
  },
  SKILLS? : Skills,
  
}

interface Skills {
  Bash: number,
  HPRecovery: number
}

function App() {

  const [swordman, setSwordman] = useState<Swordman>({
    Atributos: {
      STR: 1,
      AGI: 1,
      VIT: 1,
      INT: 1,
      DEX: 1,
      LUK: 1,
      POINTS: 99,
    },
    Status:{
      HP: 200,
      SP: 30,
      CURRENTHP: 100,
      CURRENTSP: 10,
      Attack:10,
      Defense:10,
      Acc:10,
      Critical:3,
      Flee:5
    }
  })

  const [mode, setMode] = useState('menu')

  return (
    <div className='cursor-ragnarok relative w-[1000px] h-[800px] border border-black m-auto mt-10 bg-white bg-opacity-60 flex flex-col items-center justify-center'>
      {mode == 'menu' && <Menu setMode={() => setMode('stats')} />}

      {mode == 'stats' && <Stats setMode={() => setMode('battle')} swordman={swordman} setSwordman={setSwordman} />}

      {mode == 'battle' && <Battle setMode={() => setMode('menu')} swordman={swordman} setSwordman={setSwordman}/>}

      {mode == 'option' && <Battle setMode={() => setMode('battle')} swordman={swordman} setSwordman={setSwordman}/>}
    </div>
  )
}

export default App
