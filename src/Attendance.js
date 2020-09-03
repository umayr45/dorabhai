import React from 'react';
import './Attendance.css';
import { Card, CardHeader, CardText, CardBody } from 'reactstrap';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Attendance() {
    return (
        <div className='attendance'>
                    
            <div><h4 >Attendance</h4></div>
            <hr/>
        <div id='attendance__info'>
            <div className='attendance__detail'>

            <span className='card__text'>5 July 2020 10:12 AM</span><br/>
                <span className='card__text'>Duration:  </span><span><strong>60min</strong></span><br/>
                <span className='card__text'>Total class attendance</span><span><strong> 65%</strong></span>
            </div>
            <div className='attendance__detail'>
                <LiveTvIcon/>Online<br/>
                <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                <span className='card__text'>Your Attendance: </span><span><strong>Absent</strong></span>
            

            </div>
            
            

        

        </div>

        <div id='attendance__info'>
            <div className='attendance__detail'>

            <span className='card__text'>5 July 2020 10:12 AM</span><br/>
                <span className='card__text'>Duration:  </span><span><strong>60min</strong></span><br/>
                <span className='card__text'>Total class attendance</span><span><strong> 65%</strong></span>
            </div>
            <div className='attendance__detail'>
                <LiveTvIcon/>Online<br/>
                <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                <span className='card__text'>Your Attendance: </span><span><strong>Present</strong></span>
            

            </div>
            
            

        

        </div>

        <div id='attendance__info'>
            <div className='attendance__detail'>

            <span className='card__text'>4 July 2020 10:12 AM</span><br/>
                <span className='card__text'>Duration:  </span><span><strong>60min</strong></span><br/>
                <span className='card__text'>Total class attendance</span><span><strong> 65%</strong></span>
            </div>
            <div className='attendance__detail'>
                <LiveTvIcon/>Online<br/>
                <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                <span className='card__text'>Your Attendance: </span><span><strong>Absent</strong></span>
            

            </div>
            
            

        

        </div>


        <div id='attendance__info'>
            <div className='attendance__detail'>

            <span className='card__text'>3 July 2020 10:12 AM</span><br/>
                <span className='card__text'>Duration:  </span><span><strong>60min</strong></span><br/>
                <span className='card__text'>Total class attendance</span><span><strong> 65%</strong></span>
            </div>
            <div className='attendance__detail'>
                <LiveTvIcon/>Online<br/>
                <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                <span className='card__text'>Your Attendance: </span><span><strong>Absent</strong></span>
            

            </div>
            
            

        

        </div>


        <div id='attendance__info'>
            <div className='attendance__detail'>

            <span className='card__text'>2 July 2020 10:12 AM</span><br/>
                <span className='card__text'>Duration:  </span><span><strong>60min</strong></span><br/>
                <span className='card__text'>Total class attendance</span><span><strong> 65%</strong></span>
            </div>
            <div className='attendance__detail'>
                <LiveTvIcon/>Online<br/>
                <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                <span className='card__text'>Your Attendance: </span><span><strong>Absent</strong></span>
            

            </div>
            
            

        

        </div>

        <div id='attendance__info'>
            <div className='attendance__detail'>

            <span className='card__text'>1 July 2020 10:12 AM</span><br/>
                <span className='card__text'>Duration:  </span><span><strong>60min</strong></span><br/>
                <span className='card__text'>Total class attendance</span><span><strong> 65%</strong></span>
            </div>
            <div className='attendance__detail'>
                <LiveTvIcon/>Online<br/>
                <StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><br/>
                <span className='card__text'>Your Attendance: </span><span><strong>Absent</strong></span>
            

            </div>
            
            

        

        </div>
 

            
        </div>
    )
}

export default Attendance
