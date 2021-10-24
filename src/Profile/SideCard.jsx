import React from 'react';
import { withRouter } from 'react-router';

const SideCard = () => {
    return (
        <>
                <div className="card" style={{ backgroundColor: 'rgb(64, 67, 74)', position: 'absolute'}}>
                    <p className="side-card-content">Pro account is more powerful. Get 30% off</p>
                    <p className="side-card-logo">LOGO</p>
                    <button className="side-card-button">Get Pro</button>
                </div>
        </>
    )
}
export default withRouter(SideCard);