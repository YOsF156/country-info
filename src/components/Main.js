import { createContext, useEffect, useState } from "react";
import List from "./List.js";
import Header from "./Header.js";

export const inputContext = createContext()


export default function Main() {
    const [countriesList, setCountriesList] = useState("")
    const [inputVal, setInputVal] = useState("")
    // 
    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
            .then((res) => res.json())
            .then((data) => {
                setCountriesList(data)
            })

    }, [])



    if (!countriesList) return <div>No countries<h1>loading...</h1></div>


    const filteredList = countriesList.filter(country => country.name.common.toLowerCase().startsWith(inputVal.toLowerCase()))
    console.log(filteredList);

    return (
        <main>
            <inputContext.Provider value={setInputVal}>
                <Header num={countriesList.length} />
            </inputContext.Provider>
            <List />
        </main>
    )
}