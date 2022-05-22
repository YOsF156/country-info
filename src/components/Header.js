import InputSearch from "./InputSearch";



export default function Header(props) {

    return (
        <header>
            <h3> numbers of countries <span>{props.num}</span></h3>
            <InputSearch />
        </header>
    )
}