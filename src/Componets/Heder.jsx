import { useState } from "react"
import { useEffect } from "react"
function Heder () {
    const [date,setDate] = useState(new Date())
useEffect(() => {
    const timer = setInterval(() => setDate(new Date()),1000)
    return () => clearInterval(timer)
},[])  
    return(
        <>
    <div className="Time"><p>{date.toLocaleString()}</p></div>
    <h1>Ваши задачи на сегодня</h1>
</>)}
export default Heder