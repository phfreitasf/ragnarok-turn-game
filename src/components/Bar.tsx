interface BarProps {
    color: string,
    current: number,
    max: number
}

export function Bar({ color, current, max }: BarProps) {

    return (
        <div className={`w-[205px] h-2 border border-black flex items-center justify-center relative`}><span className="absolute z-50 text-[16px]">{current}/{max}</span>
            <div className={`h-[100%] absolute ` + color} style={
                {
                    maxWidth:'203px',
                    width:(current / max) * 202.8,
                    left:0
                }
            }></div>
        </div>
    )

}