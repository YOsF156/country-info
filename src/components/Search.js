import { useContext } from "react"
import { inputContext } from "./Main"




export default function InputSearch() {
    const setInputVal = useContext(inputContext)

    return (
        <input type="text" onChange={(e) => { setInputVal(e.target.value) }} />
    )
}