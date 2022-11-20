import { inputContext } from "./Main"
import { useContext } from "react"



export default function InputSearch() {
    const { setInputVal } = useContext(inputContext)

    return (
        <input type="text" onChange={({ target }) => setInputVal(target.value)} />
    )
}