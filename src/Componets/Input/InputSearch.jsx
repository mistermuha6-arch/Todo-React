

import InpButton from "./InputButton";
import {  useState } from "react";


export default function InputSearch ({onAdd}) {

const [text,setText] = useState("")
function NewProdlem ()  {
  if (text.trim())
    {onAdd(text)
    setText("")}
}

return(
        <>
        <div className="inpButton"><input
        type="text"
        value={text}
        placeholder="Новая задача"
        onChange={(e) => setText(e.target.value)
        }></input><div className="InpButton"><InpButton onAdd = {NewProdlem}/></div></div>
        </>
    )
}