import './App.css'
import Heder from './Componets/Heder'
import ListProblem from './Componets/ListProblem'
import { useState,useEffect } from 'react'
function App() {
 const [todos,setTodos] = useState(() => {
  const saved = localStorage.getItem("todos")
  return saved ? JSON.parse(saved) : []
 })
 useEffect(() => {
  localStorage.setItem('todos',JSON.stringify(todos))
 },[todos])
  return (
    <>
     <Heder></Heder> 
     <ListProblem></ListProblem>
    </>
  )
}

export default App
