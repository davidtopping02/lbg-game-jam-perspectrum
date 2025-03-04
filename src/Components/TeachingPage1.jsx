import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const TeachingPage1 = ({ incrementPageNumber }) => {
    return (
        <div>
            <div className="container">
                <div
                    className="row"
                    id="question"
                    style={{
                        backgroundColor: 'white',
                        border: '4px solid green',
                        padding: '20px',
                        marginBottom: '10px',
                        marginTop: '20px',
                    }}
                >
                    <div className="col-12 d-flex">
                        <div className="col-9">
                            <p>
                                All of these scenarios are based on personal
                                experiences of ADHD individuals.
                            </p>
                            <p>
                                Executive dysfunction is one of the most common
                                struggles for people with ADHD and manifests in
                                many forms, with the most common being
                                forgetfulness, difficulty starting tasks (often
                                leading to self directed frustration), and
                                difficulty staying focused. It often makes
                                simple tasks difficult for those it affects, so
                                these situations are designed to simulate these
                                challenges for non-ADHD people.
                            </p>
                            <p>
                                Time blindness is another common difficulty ADHD
                                people face and involves the inability to
                                process time at a consistent rate. This can
                                manifest in not being able to correctly estimate
                                the time it takes to perform a task or lacking
                                awareness of time passing. This is not something
                                the ADHD person has control over and isn’t due
                                to a lack of respect of others time. It can
                                often lead to missing deadlines, birthdays and
                                often rushing by leaving tasks to the last
                                minute.
                            </p>
                        </div>
                        <div className="col-3">
                            <img
                                src="public/IMG_7751.png"
                                alt="Breakfast"
                                style={{ width:'120%' }}
                            ></img>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col d-flex justify-content-end">
                        <Button onClick={incrementPageNumber}>
                            <p>Continue</p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeachingPage1