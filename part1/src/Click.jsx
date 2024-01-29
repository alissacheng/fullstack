import { useState } from "react"
import History from "./components/History"
import Button from "./components/Button"
const Click = () => {
 const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
    setTotal(left + right)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(left + right)
  }

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text={'L'} />
      <Button handleClick={handleRightClick} text='R' />
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
      <History allClicks={allClicks} />
    </div>
  )
}

export default Click;