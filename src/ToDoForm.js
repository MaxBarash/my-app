import { useState, useEffect } from "react"

function ToDoForm({ addTask }) {
   const [userInput, setUserInput] = useState("")



   // useEffect(() => {
   //    const userInput = JSON.parse(localStorage.getItem('userInput'));
   //    return userInput ? JSON.parse(userInput) : []
   // },[])

   // const localDate = localStorage, getItem('userInput');
   // return localDate
   //    ? JSON.parse(userInput)
   //    : []

   // useEffect(() => {
   //    localStorage.setItem('userInput', JSON.stringify(userInput))
   // }, [userInput]);

   const handleChange = (e) => {
      setUserInput(e.currentTarget.value)
   }

   const handleSubmit = (e) => {
      e.preventDefault()
      addTask(userInput)
      setUserInput("")
   }

   const handleKeyPress = (e) => {
      if (e.key === "Enter") {
         handleSubmit(e)
      }
   }

   return (
      <form onSubmit={handleSubmit}>
         <input
            value={userInput}
            type="text"
            onChange={handleChange}
            onKeyDown={handleKeyPress}
            placeholder="Введите значения..."
         />
         <button>Сохранить</button>
      </form>
   )
}

export default ToDoForm
