import Button from "./Button/Button"
import { useState } from "react"
import InputSearch from "./Input/InputSearch"
function ListProblem() {
    const [tasks,setTasc] = useState([
        {id: 1,text:'Помыть посуду',completed:false},
        {id:2,text:'Посмотреть фильм ',completed:false},
        {id:3,text:'Работать',completed:false},
        {id:4,text:'Поиграть',completed:false},
        {id:5,text:'Спать',completed:false},
        {id:6,text:'Покушать супчик мамин',completed:false}
    ])
    function handClick(newTack) {
        const newTaskObj = {
            id: Date.now(),
            text:newTack,
            completed:false
        }
        setTasc([...tasks,newTaskObj])
    }
        const deleteTask = (id) => {
             setTasc(tasks.filter(t=>t.id !== id))
        }
        const TooledTask = (id) => {
            setTasc(tasks.map(t=> t.id === id ?
                 {...t,completed:!t.completed}:t)
            )
        }
    
    return(
        <>
         <InputSearch onAdd = {handClick}/> 
         <ol>
            {tasks.map((t) => (
            <li>  <div className="debagList"><span key={t.id} style={{ textDecoration:t.completed ? 'line-through' : 'none'
            }}
                >{t.text}</span></div> <Button
                onDelete={() => deleteTask(t.id)}
                onToogle={() => TooledTask(t.id)}
                /></li>
            ))}
         </ol>
        </>
    )
}
export default ListProblem