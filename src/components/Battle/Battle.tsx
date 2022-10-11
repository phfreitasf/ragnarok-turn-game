import { useState } from 'react'
import swStanding from '../../assets/character/swordmanStand.webp'
import swAttacking from '../../assets/character/sw-attack.gif'
import poringRosa from '../../assets/monster/poring-rosa.gif'
import { style } from './styles'

interface BattleProps {
    setMode: any
}

export function Battle({ setMode }: BattleProps) {

    const [currentAction, setCurrentAction] = useState(swStanding)
    const [currentMonter, setCurrentMonster] = useState(poringRosa)
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
            <div className='flex flex-col self-end mb-10'>
                <img src={currentAction} className="h-32 w-32" style={style.flip} />
                <section className='grid grid-cols-2 gap-2'>
                    <span className='gradient-button rounded-lg text-center' onClick={Attack}>Atacar</span>
                    <span className='gradient-button rounded-lg text-center'>Habilidades</span>
                    <span className='gradient-button rounded-lg text-center'>Curar</span>
                </section>
            </div>
            <div></div>


            {/* inimigo */}
            <div className='flex flex-col self-center mt-10'>
                <img src={currentMonter} className="h-10 w-10 self-center"/>
                <section className='grid grid-cols-1 gap-2'>
                    
                </section>
            </div>
        </section>

    )
}