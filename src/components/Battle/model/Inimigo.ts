
export interface Inimigo {
    image: string,
    Status: {
        Attack: number,
        Defense: number,
        Flee: number,
        Acc: number,
        Critical: number,
        HP: number,
        SP: number,
        CURRENTHP: number,
        CURRENTSP: number,
    }
}