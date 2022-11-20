import { useContext } from "react"
import { popupContext } from "../App"

export default function Popup() {


    const { popup, setPopup } = useContext(popupContext)

    return <div
        className={`overlay ${popup ? "" : "close"}`}
        onClick={() => setPopup('')}
    >
        <div className='popup'>{popup}</div>
    </div>
}