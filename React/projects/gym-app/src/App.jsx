import { useState } from 'react'
import './App.css'
import { exercises } from './exercises.json'

function App() {
  const listOfExercises = exercises
  const [count, setCount] = useState(0)
  const [toggle, setToggle] = useState(false)
  const [exerciseData, setExerciseData] = useState(listOfExercises)

  const handleClick = () => {
    setCount((count) => count + 1)
    setToggle(!toggle)
  }

  return (
    <>
      <h1 className='text-3xl font-bold'> Reading List</h1>
      <div className='card'>
        <button
          className={` p-2 rounded-sm ${toggle ? 'bg-blue-400' : 'bg-red-800'}`}
          onClick={() => handleClick()}
        >
          count is {count}
        </button>
      </div>
      <section>
        {exerciseData.map((exercise) => (
          <div key={exercise.name}>
            <h3>{exercise.name}</h3>
          </div>
        ))}
      </section>
    </>
  )
}

export default App
