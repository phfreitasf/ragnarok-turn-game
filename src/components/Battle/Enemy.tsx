import React from "react";
import { Bar } from "../Bar";
import { Inimigo } from "./model/Inimigo";
import poringRosa from '../../assets/monster/poring-rosa.gif'

export class Enemy extends React.Component {
    state: Inimigo
    constructor(props: Inimigo) {
        super(props)
        this.state = this.gerarInimigo()
    }

    // o proprio react me alertou nao usar esse lifecycle
    // componentWillMount(): void {
    //     this.setState(this.gerarInimigo())
    // }

    render() {
        return (
            <div className='flex flex-col self-center mt-10 items-center gap-0.5'>
                <img src={this.state.image} className="h-10 w-10 self-center" />
                <Bar color='bg-red-500' current={this.state.Status.CURRENTHP} max={this.state.Status.HP} />
                <Bar color='bg-blue-500' current={this.state.Status.CURRENTSP} max={this.state.Status.SP} />
                <section className='grid grid-cols-1 gap-2'>

                </section>
            </div>
        )
    }

    gerarInimigo() {
        //placeholder, tem que randomizar depois
        const inimigo: Inimigo = {
            image: poringRosa,
            Status: {
                Attack: 10,
                Defense: 10,
                Flee: 10,
                Acc: 10,
                Critical: 10,
                HP: 10,
                SP: 10,
                CURRENTHP: 10,
                CURRENTSP: 10,
            }
        }
        return inimigo
    }
}