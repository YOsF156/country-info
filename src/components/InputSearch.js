import { useContext } from "react"
import { InputContext } from "./Main"



export default function InputSearch() {

    const setValue = useContext(InputContext)
    return (
        <input type="search" placeholder="search" onChange={e => setValue(e.target.value)} />
    )
}