import { useEffect, useState } from "react"

function useCurrecyInfo(currency){
    const[data, setData] = useState({}) // empty object, if kuch nai bhi aaya api se toh empty obj aa hi jayega 

    useEffect(() => {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(url)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))
            console.log(data);
    }, [currency]) // jab bhi currency mein change ho toh ye function update hoga
    
    return data;

}

export default useCurrecyInfo