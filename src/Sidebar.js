import React from 'react';
import './Sidebar.css';
import ShareIcon from '@material-ui/icons/Share';
import { Button, IconButton } from '@material-ui/core';
import Attributes from './Attributes';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <img height='60px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQmksdS4gL6q0RJFUub6qZes2YmwMXNVMefig&usqp=CAU'/>
                <div className='sidebar__headerInfo'>
                    <p>Bse 1st Sem Cse <br/>
                    All Subjects <br/>
                    <span className='teacher'>by Jeet Sir</span></p>
                    
                    
                    <div className='header__material'>
                        <table>
                            <tr>
                                <th><span>0</span></th>
                                
                                <th><span>15</span></th>
                                
                                <th><span>4</span></th>
                                
                            </tr>
                            <tr className='heading' >
                                <td>Materials</td>
                                <td>Posts</td>
                                <td>Members</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div className='Join'>
                
                    <Button id='btn' variant="contained" color="secondary">
                    Join Class
                    </Button>
                    <div>
                        
                    <IconButton><ShareIcon/></IconButton>
                    </div>
            </div>
            <div classname='sidebar__footer'>
                <Attributes/>

            </div>
        </div>
    )
}

export default Sidebar
