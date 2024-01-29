import { useEffect, useState } from 'react'

function Feedback() {
    const [feedback, setFeedback] = useState({good:0, neutral:0, bad:0})
    const [total, setTotal] = useState(0)
    const score = {good: 1, neutral: 0, bad: -1}

    const addScore = (response) => {
        console.log(response)
        const newFeedback = {...feedback}
        switch(response){
            case 'good':
                newFeedback.good += 1
                break;
            case 'neutral':
                newFeedback.neutral += 1
                break;
            case 'bad':
                newFeedback.bad += 1
                break;
        }
        setFeedback(newFeedback)
        const newTotal = Object.values(newFeedback).reduce((acc, curr)=> acc + curr)
        setTotal(newTotal)
    }

  return (
    <>
    <div>
        <h1>Give Feedback</h1>
        {Object.keys(feedback).map(text=> {
            return(
                <button key={text} onClick={()=>{addScore(text)}}>{text}</button>
            )
        })}
        <h2>Statistics</h2>
        {Object.keys(feedback).map(text=> {
            return(
                <p>{text}: {feedback[text]}</p>
            )
        })}
        <p>all {total}</p>
        <p>average {total && ((feedback.good * score.good) + (feedback.bad * score.bad))/total}</p>
        <p>positive {total && (feedback.good/total).toFixed(4) * 100 + '%'}</p>
    </div>
    </>
  )
}

export default Feedback;
