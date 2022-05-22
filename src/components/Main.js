import { createContext, useEffect, useState } from "react";
import CountriesList from "./CountriesList.js";
import Header from "./Header.js";

export const InputContext = createContext()

export default function Main() {
    const [list, setList] = useState("")
    const [inputQuery, setInputQuery] = useState("")



    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
            .then(res => res.json())
            .then(data => {
                setList(data)
                console.log(data);
            })
    }, [])


    if (!list) return (<h1>loading...</h1>)

    const filteredList = list.filter(country => country.name.common.toLowerCase().startsWith(inputQuery.toLowerCase()))

    return (
        <main>
            <InputContext.Provider value={setInputQuery}>
                <Header num={filteredList.length} />
            </InputContext.Provider>
            <CountriesList filteredList={filteredList} />
        </main>
    )
}