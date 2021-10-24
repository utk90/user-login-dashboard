import React from 'react';
import { withRouter } from 'react-router';
import Avatar from 'react-avatar';
import './DashStyle.css';
import Contentful from './Contentful';

const SideNav = (props) => {

    const [,,,avatar] = Contentful();
    const userName = localStorage.getItem('userName');

    return (
        <>
            <div className='profile-main'>
                <div className="profile-image">
                    {/* <Avatar googleId="118096717852922241760" src="https://cdn.pixabay.com/photo/2017/10/25/16/54/african-lion-2888519_1280.jpg" size='55' round={true} /> */}
                    {/* Contentful Avatar  */}
                    <Avatar googleId="118096717852922241760" src={avatar} size='55' round={true} />
                </div>

                <div className="profile-data">
                    <span style={{ textTransform: 'capitalize' }}>{props.history.location.state.data.username}</span><br />{props.history.location.state.data.email}
                </div>


                <div className="col-nav" style={{ fontSize: '14px' }}>
                    <div className="navItem">
                        <a className="navLink active" href={`/user/${userName}/motivation`}>Motivation</a>
                    </div>
                    <div className="navItem">
                        <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Productivity</a>
                    </div>
                    <div className="navItem">
                        <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Design</a>
                    </div>
                    <div className="navItem">
                        <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Study</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(SideNav);