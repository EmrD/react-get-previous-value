import { useEffect, useRef } from "react"

export default function Dollar({amount}){

    const oldAmount = useRef(amount)
    const ref = useRef()


    useEffect(()=>{


        if (amount !== oldAmount.current){
            if (amount > oldAmount.current){
                ref.current.classList.remove("down")
                ref.current.classList.add("up")
            } else if (amount < oldAmount.current){
                ref.current.classList.remove("up")
                ref.current.classList.add("down")
            }
            const timeout = setTimeout(()=>{
                ref.current.classList.remove("up")
                ref.current.classList.remove("down")
            },1000)

        }
        oldAmount.current = amount},[amount])

    return(
        <>
        <div ref={ref}>
            {amount.toFixed(2)}
        </div>
        </>
        )
}