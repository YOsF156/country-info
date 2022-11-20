import { createContext, useEffect, useState } from "react";
import List from "./List.js";
import Header from "./Header.js";

export const inputContext = createContext()


export default function Main() {
    const [countriesList, setCountriesList] = useState([])
    const [inputVal, setInputVal] = useState("")
    const [filteredList, setFilteredList] = useState("")


    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                setCountriesList(data)
            })

    }, [])



    useEffect(() => {
        setFilteredList(countriesList.filter(country => country.name.common.toLowerCase().startsWith(inputVal.toLowerCase())))
    }, [inputVal, countriesList])

    if (countriesList.length === 0) return <div>No countries<h1>loading...</h1></div>

    return (
        <main>
            <inputContext.Provider value={{ setInputVal, inputVal }} >
                <Header num={filteredList.length} />
                <List list={filteredList} />
            </inputContext.Provider>
        </main>
    )
}