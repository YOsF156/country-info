import Country from "./Country";


export default function List(props) {
    const { list } = props;
    list.sort((a, b) => a.name.common > b.name.common ? 1 : -1)
    return (
        <ul className="main">
            {list.map(country => <Country key={country.name.common} {...country} />)}
        </ul>
    )
}