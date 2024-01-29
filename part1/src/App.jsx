import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Content from './components/content'
import Total from './components/Total'

function App() {
  const [count, setCount] = useState(0)
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercise: 10
      },
      {
        part: 'Using props to pass data',
        exercise: 7
      },
      {
        part: 'State of a component',
        exercise: 14
      },
    ]
  }

  return (
    <>
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={exercises1+exercises2+exercises3} />
    </div>
    </>
  )
}

export default App
