import React from 'react';
import './info.css'
import { Card,CardHeader,CardText, CardBody, Button } from 'reactstrap';

function Info() {
    return (
        <div className='info'>
            <div className='data'>
                <Card  className='cards'>
                    
                    <CardHeader className='bg-light'>
                    <CardText><span className='card__text'>Assignment on</span></CardText>
                        <span className='card__heading'>Expressjs</span> <br/>
                        <span className='card__text'>Submission Deadline: </span><span><strong>11 July 9:00 AM</strong></span><br/>
                        <span className='card__text'>Total marks:</span><span><strong> 20 Marks</strong></span>

                    </CardHeader>
                    <CardBody  >
                        <div className='body'>
                        <button type='button' className='btn btn-outline-danger text-dark '>Download</button>
                        <button type='button' className='btn btn-dark text '>Upload Assignment</button>
          

                        </div>
                    </CardBody>
                </Card>
                
                
                    <Card  className='cards'>
                        
                        <CardHeader className='bg-light'>
                        <CardText><span className='card__text'>Assignment on</span></CardText>
                            <span className='card__heading'>Mongo DB</span> <br/>
                            <span className='card__text'>Submission Deadline: </span><span><strong>2 July 10:00 PM</strong></span><br/>
                            <span className='card__text'>Total marks:</span><span><strong> 25 Marks</strong></span>

                        </CardHeader>
                        <CardBody  >
                            <div className='body'>
                            <button type='button' className='btn btn-outline-danger text-dark '>Download</button>
                            <button type='button' className='btn btn-dark text '>Upload Assignment</button>
            

                            </div>
                        </CardBody>
                    </Card>
            
            </div>
        </div>
    )
}

export default Info
