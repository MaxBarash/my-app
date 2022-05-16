import { useEffect, useState } from "react"
import ToDo from "./ToDo"
import ToDoForm from "./ToDoForm"
import RandomGif from "./RandomGif"
import NewRandomGif from "./NewRandomGif"

function App() {

   const getInitialState = () => {
      const localData = localStorage.getItem('todos');
      return localData
         ? JSON.parse(localData)
         : []
   }

   const [todos, setTodos] = useState(getInitialState())

   const addTask = (userInput) => {
      if (userInput) {
         const newItem = {
            id: Math.random().toString(36).substring(2.9),
            task: userInput,
            complete: false
         }
         setTodos([...todos, newItem])
      }

   }

   useEffect(() => {
      // if (todos.length >= 0) {} 

      localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos]);


   const removeTask = (id) => {
      setTodos([...todos.filter((todo) => todo.id !== id)])
   }

   const handleToggle = (id) => {
      setTodos([
         ...todos.map((todo) =>
            todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
         )
      ])
   }

   return (
      <div className="App">
         <header>
            <h1>Список задач: {todos.length}</h1>
         </header>
         <ToDoForm addTask={addTask} />
         {todos.map(function (todo) {
            return (
               <ToDo
                  todo={todo}
                  key={todo.id}
                  toggleTask={handleToggle}
                  removeTask={removeTask}
               />
            )
         })}

         {/* <RandomGif tag="dog" /> */}
         <NewRandomGif tag="cat" tag2="dog" />
         <button className="btn" onClick={() => NewRandomGif(document.location.reload())}>Reload this gif</button>
      </div>
   );
}


export default App;
