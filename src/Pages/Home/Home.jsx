import React, { useState } from 'react'
import DefaultComponent from '../../Components/Default/Default'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Question1 from '../../Components/Questions/Question1/Question1'

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const incrementPageNumber = () => {
        setPageNumber(pageNumber + 1)
    }

    const pickCorrectPage = (pageId) => {
        switch (pageId) {
            case 1:
                return <Question1></Question1>

            default:
                return <DefaultComponent></DefaultComponent>
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">{pickCorrectPage(pageNumber)}</div>
            </div>
        </div>
    )
}

export default Home
