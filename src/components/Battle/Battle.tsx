import { useState } from 'react'
import swStanding from '../../assets/character/swordmanStand.webp'
import swAttacking from '../../assets/character/sw-attack.gif'

import { style } from './styles'
import { Bar } from '../Bar'
import { Swordman } from '../../App'

import { Enemy } from './Enemy'

interface BattleProps {
    //tipar corretamente depois
    setMode: any,
    swordman: Swordman,
    setSwordman: any
}


export function Battle({ setMode, swordman }: BattleProps) {

    const [currentAction, setCurrentAction] = useState(swStanding)

    const [action, setAction] = useState(false)


    

    function Attack() {
        setAction(true)
        setCurrentAction(swAttacking)
        setTimeout(() => {
            setCurrentAction(swStanding)
        }, 1000);
    }


    return (
        <section className="grid grid-cols-3 h-full">
            {/* espadachim */}
            <div className='flex flex-col self-end mb-10 items-center gap-0.5'>
                <Bar color='bg-red-500' current={swordman.Status.CURRENTHP} max={swordman.Status.HP} />
                <Bar color='bg-blue-500' current={swordman.Status.CURRENTSP} max={swordman.Status.SP} />
                <img src={currentAction} className="h-32 w-32" style={style.flip} />
                <section className='grid grid-cols-2 gap-2'>
                    <span className='gradient-button rounded-lg text-center' onClick={Attack}>Atacar</span>
                    <span className='gradient-button rounded-lg text-center'>Habilidades</span>
                    <span className='gradient-button rounded-lg text-center'>Curar</span>
                </section>
            </div>
            {/* todo: adicionar contador do numero de batalha */}
            <div className='text-center text-2xl mt-6'>
                Batalha 1
            </div>


            {/* inimigo */}
            <Enemy/>
        </section>

    )
}