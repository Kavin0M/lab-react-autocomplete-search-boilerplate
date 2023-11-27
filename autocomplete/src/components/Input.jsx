import { useState,useEffect } from "react"

import Popup from "./Popup"
import appData from "./resources/countryData.json"

const data = appData

function Input() {

    const [text, changeText] = useState("")
    const [result,setResult] = useState([])

    useEffect(() => {
        const list = data.map((item,index) => {
            if (item.name.includes(text) && text != ""){
                return (<div key={index} className="name">{item.name}</div>)
            }
            else{
                return
            }
        })

        setResult(list)
    },[text])

    function keydownEvent(e){
        if(e.key === "Escape"){
            console.log(e.key)
            setResult([])
        }
    }

  return (
    <div onKeyDown={(e) => keydownEvent(e)}>
        <input type="text" onChange={(e) => changeText(e.target.value)}/>
        <button>Submit</button>
        <Popup text={result}/>
    </div>
  )
}

export default Input