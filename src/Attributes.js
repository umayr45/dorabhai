import React from 'react';
import './Attributes.css';
import { Link } from 'react-router-dom';
import NetworkCheckIcon from '@material-ui/icons/NetworkCheck';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
function Attributes() {
    return (
        <div className='attributes'>
            <div className='attribute__element'>
                <Link >
                <h5><NetworkCheckIcon/> Timeline</h5>
                </Link>

            </div>
            <div className='attribute__element'>
                <Link>
                <h5><LiveTvIcon/> Live Class</h5>
                </Link>

            </div>
            <div className='attribute__element'>
                <Link>
                <h5><MenuBookIcon/> Notes</h5>
                </Link>

            </div>
            <div className='attribute__element'>
                <Link to='/assignment'>
                <h5><AssignmentIcon/> Assignment</h5>
                </Link>

            </div>
            <div className='attribute__element'>
                <Link to='/test'>
                <h5><PlaylistAddCheckIcon/> Test</h5>
                </Link>

            </div>
            <div className='attribute__element'>
                <Link to='/attendance'>
                <h5><PeopleOutlineIcon/> Attendance</h5>
                </Link>

            </div>
            
            <div className='attribute__element'>
                <Link>
                <h5>   Apply for Leave</h5>
                </Link>

            </div>

            
            
            
        </div>
    )
}

export default Attributes
