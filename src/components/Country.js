import { useContext } from "react"
import { PopupContext } from "../App"

export default function Country(props) {
    const [popup, setPopup] = useContext(PopupContext)
    return (
        <li onClick={() => setPopup("xcbfdbfdb")} >
            <div
                className='flag'
                style={{ backgroundImage: `url(${props.flags.svg})` }}
            />
            <div>
                <div><strong>{props.name.common}</strong> - {props.capital}</div>
                <label>{props.region}</label>
            </div>
        </li>
    )
}