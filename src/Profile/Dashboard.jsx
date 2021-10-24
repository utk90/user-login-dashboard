import React from 'react';
import HeadNav from './HeadNav';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './DashStyle.css';
import { withRouter } from 'react-router';
import SideNav from './SideNav';
import CardGrid from './CardGrid';
import { Link, Redirect } from 'react-router-dom';

const Dashboard = (props) => {

    const token = localStorage.getItem('token');

    var isLogged = true;

    if (token == null) {
        isLogged = false;
    }

    return (
        <>
            { !isLogged ? <Redirect to='/login' /> :
                <div className="dash-main">
                    <div className="dash-mid">
                        <SideNav name={props.history.location.state.data.username} email={props.history.location.state.data.email} />
                        {/* <SideCard /> */}
                        <SideNav />
                        <Link to='/login' style={{ color: 'white' }} className='logout-link' onClick={() => { localStorage.removeItem('token') }}>Logout</Link>
                        <div className="dash-inner">
                            <h3>Motivation</h3>
                            <HeadNav />
                            <CardGrid />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default withRouter(Dashboard);