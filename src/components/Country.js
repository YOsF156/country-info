import { useContext } from "react"
import { popupContext } from "../App"

export default function Country(props) {

    const { setPopup } = useContext(popupContext)
    return (
        <li onClick={() => setPopup(<CountryOpen {...props} />)}>
            <div
                className='flag'
                style={{ backgroundImage: `url(${props.flags.svg})` }}
            >

            </div>
            <div>
                <div><strong>{props.name.common}</strong> - {props.capital}</div>
                <label>{props.region}</label>
            </div>
        </li>
    )
}


function CountryOpen(props) {
    const { name, flags, languages, population } = props
    console.log(Object.values(languages))
    return <div className='countryOpen'>
        <h2>{name.common}</h2>
        <img src={flags.svg} alt="" />
        <h4>Population: </h4>
        <span>{population.toLocaleString()}</span>
        <h4>Languages:</h4>
        <ul>{Object.values(languages).map(l => <li key={l} >{l}</li>)}</ul>
    </div>
}