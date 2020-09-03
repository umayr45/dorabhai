import React from 'react';
import './About.css'
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


function About() {
    return (
        <div className='about'>
            <div className='card'>
                
            <Card id='card' >
                <CardHeader>
                    About Classroom
                </CardHeader>
                <CardBody>

                </CardBody>
            </Card>
            
            <div className='class_detail'>
                <h5>In class</h5>
            <Link >
                
                <div className='sidebarChat'>
                    <Avatar   />
                    <div className='sidebarChat__info'>
                    <h2>name</h2>
                    <p>Hello</p>

                    </div>
                    
                </div>
            </Link>
            <Link >
                
                <div className='sidebarChat'>
                    <Avatar   />
                    <div className='sidebarChat__info'>
                    <h2>name</h2>
                    <p>Hello</p>

                    </div>
                    
                </div>
            </Link>
            <Link >
                
                <div className='sidebarChat'>
                    <Avatar   />
                    <div className='sidebarChat__info'>
                    <h2>name</h2>
                    <p>Hello</p>

                    </div>
                    
                </div>
            </Link>
            <Link >
                
                <div className='sidebarChat'>
                    <Avatar   />
                    <div className='sidebarChat__info'>
                    <h2>name</h2>
                    <p>Hello</p>

                    </div>
                    
                </div>
            </Link>
            <Link >
                
                <div className='sidebarChat'>
                    <Avatar   />
                    <div className='sidebarChat__info'>
                    <h2>name</h2>
                    <p>Hello</p>

                    </div>
                    
                </div>
            </Link>
            <Link >
                
                <div className='sidebarChat'>
                    <Avatar   />
                    <div className='sidebarChat__info'>
                    <h2>name</h2>
                    <p>Hello</p>

                    </div>
                    
                </div>
            </Link>


            </div>

            </div>
        </div>

    )
}

export default About
