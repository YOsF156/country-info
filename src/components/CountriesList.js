import Country from "./Country";



export default function CountriesList(props) {

    return (
        <ul>
            {props.filteredList.map((c) => <Country key={c.cca2} {...c} />)}
        </ul>
    )
}