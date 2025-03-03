import React, { useState } from 'react'
import Question1 from '../../Components/Questions/Question1/Question1'
import DefaultComponent from '../../Components/Default/Default'
import 'bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
    const [score, setScore] = useState(0)
    const [pageNumber, setPageNumber] = useState(1)

    const incrementScore = () => {
        setScore(score + 1)
    }

    const pickCorrectPage = (pageId) => {
        switch (pageId) {
            case 1:
                return <Question1 incrementScore={incrementScore} />
            default:
                return <DefaultComponent />
        }
    }

    return (
        <>
            <div
                style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    fontSize: '24px',
                    fontWeight: 'bold',
                }}
            >
                Score: {score}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">{pickCorrectPage(pageNumber)}</div>
                </div>
            </div>
        </>
    )
}

export default Home
