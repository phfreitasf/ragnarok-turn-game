import { FirstAid } from "phosphor-react"
import { useEffect, useState } from "react"
import { Swordman } from "../App"
import swordmanImg from '../assets/character/sw-walking.gif'
import { Bar } from "./Bar"

interface StatsProps {
    setMode: any
    swordman: Swordman
    setSwordman: any
}

export function Stats({ setMode, swordman, setSwordman }: StatsProps) {

    function addStatus(status: string) {
        //verifica se tem pontos e altera status de acordo com o atributo
        if (swordman.Atributos.POINTS > 0) {
            swordman.Atributos.POINTS -= 1;
            if (status == 'STR') swordman.Status.Attack += 3
            if (status == 'AGI') swordman.Status.Flee += (0.3)

            if (status == 'VIT') {
                swordman.Status.Defense += 1;
                swordman.Status.HP += Math.floor((swordman.Atributos.VIT * 1.3))
                swordman.Status.CURRENTHP += Math.floor((swordman.Atributos.VIT * 1.3))
            }

            if (status == 'INT') {
                swordman.Status.SP += Math.floor((swordman.Atributos.INT * 1.1))
                swordman.Status.CURRENTSP += Math.floor((swordman.Atributos.INT * 1.1))
            }

            if (status == 'DEX') swordman.Status.Acc += 1

            if (status == 'LUK') swordman.Status.Critical = Math.floor(swordman.Atributos.LUK * 0.4)

            Object.entries(swordman.Atributos).map((value: any) => {
                if (value[0] == status) {
                    value[1] += 1
                    setSwordman({
                        ...swordman,
                        Atributos: {
                            ...swordman.Atributos,
                            [value[0]]: value[1]
                        },
                        Status: {
                            ...swordman.Status
                        }
                    })

                }
            })
        }
    }

    return (
        <section className="flex flex-col items-center justify-center">

            {/* Personagem e HP/SP */}
            <div className="grid grid-cols-3 w-full h-full gap-2 items-center">
                <section className=" flex flex-col gap-[3px] items-center">
                    <img src={swordmanImg} className="h-32 m-auto" />
                    <Bar color='bg-red-500' current={swordman.Status.CURRENTHP} max={swordman.Status.HP} />
                    <Bar color='bg-blue-500' current={swordman.Status.CURRENTSP} max={swordman.Status.SP} />
                </section>

                {/* Lista de atributos */}
                <ul className="list-none w-full select-none">
                    {Object.entries(swordman.Atributos).map((val, index) => {
                        if (index != 6)
                            return (
                                <li key={val[0]} className="flex items-center gap-1"><span className="w-[100px]">{val[0]}: {val[1]} </span><FirstAid className="cursor-ragnarok-pointer" onClick={() => addStatus(val[0])} size={24} color="#39b329" weight="fill" /></li>
                            )
                    })}
                    <li className="flex items-center gap-0">PONTOS RESTANTES: {swordman.Atributos.POINTS}</li>
                </ul>

                {/* Status atuais */}
                <section className="mb-auto">
                    <ul className="list-none w-full select-none">
                        <li>Ataque: {swordman.Status.Attack}</li>
                        <li>Defesa: {swordman.Status.Defense}</li>
                        <li>Esquiva: {Math.floor(swordman.Status.Flee)}%</li>
                        <li>Precis??o: {swordman.Status.Acc}</li>
                        <li>Cr??tico: {swordman.Status.Critical}%</li>
                    </ul>
                </section>
            </div>
            <button onClick={setMode} className='self-end mt-5 text-sm px-2 border-slate-400 border font-medium text-black focus:outline-none rounded-full gradient-button cursor-ragnarok-pointer'>Confirmar</button>
        </section>
    )
}