import React, { useState } from 'react'
import DefaultComponent from '../../Components/Default/Default'
import 'bootstrap/dist/css/bootstrap.min.css'
import Question1 from '../../Components/Questions/Question1/Question1'

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1)
    const [score, setScore] = useState(0)

    const incrementPageNumber = () => {
        setPageNumber(pageNumber + 1)
    }

    const incrementScore = () => {
      setScore(score+1)
    }

    const pickCorrectPage = (pageId) => {
        switch (pageId) {
            case 1:
                return <Question1 incrementScore={incrementScore}></Question1>

            default:
                return <DefaultComponent></DefaultComponent>
        }
    }
    return (
        <>
            <div>Score: {score}</div>
            <div className="container">
                <div className="row">
                    <div className="col">{pickCorrectPage(pageNumber)}</div>
                </div>
            </div>
        </>
    )
}

export default Home
