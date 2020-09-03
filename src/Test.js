import React from 'react'
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
import './test.css';

function Test() {
    return (
        <div className='test'>
            <div><h4 >Tests</h4></div>
            <hr/>
        <Card  className='cards'>
            
            <CardHeader className='bg-light'>
            <CardText><span className='card__text'>Name of the quiz</span></CardText>
                <span className='card__heading'>Test</span> <br/>
                <span className='card__text'>Test Deadline: </span><span><strong>16 May 5:31 AM</strong></span><br/>
                <span className='card__text'>Number of Student Appeared</span><span><strong> 0</strong></span>

            </CardHeader>
            <CardBody  >
                <div className='body'>
                <button type='button' className='btn btn-outline-danger text-dark '>Check results</button>
                <button type='button' className='btn btn-dark text-danger '>Appear now</button>


                </div>
            </CardBody>
        </Card>
            
        <Card  className='cards'>
            
            <CardHeader className='bg-light'>
            <CardText><span className='card__text'>Name of the quiz</span></CardText>
                <span className='card__heading'>Test</span> <br/>
                <span className='card__text'>Test Deadline: </span><span><strong>16 May 5:31 AM</strong></span><br/>
                <span className='card__text'>Number of Student Appeared</span><span><strong> 0</strong></span>

            </CardHeader>
            <CardBody  >
                <div className='body'>
                <button type='button' className='btn btn-outline-danger text-dark '>Check results</button>
                <button type='button' className='btn btn-dark text-danger '>Appear now</button>


                </div>
            </CardBody>
        </Card>
        </div>
    )
}

export default Test
