import React from 'react';
import { withRouter } from 'react-router';
import './DashStyle.css';

const HeadNav = () => {
    const userName = localStorage.getItem('userName');

    return (
        <>
            <div className="nav">
                <div className="navItem">
                    <a className="navLink active" href={`/user/${userName}/all`}>All</a>
                </div>
                <div className="navItem">
                    <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Articles</a>
                </div>
                <div className="navItem">
                    <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Podcast</a>
                </div>
                <div className="navItem">
                    <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Video</a>
                </div>
                <div className="navItem">
                    <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Downloads</a>
                </div>
                <div className="navItem playStyle">
                {/* <div className="navItem"> */}
                    <a className="navLink disabled" href="https://www.google.co.in/" target="_blank">Play All</a>
                    {/* <Button buttonType="button" buttonText="Play All" buttonClass="navLink disabled medium-btn" buttonBgColor='hotpink' buttonTextColor='white' isError='' /> */}
                </div>
            </div>
        </>
    )
}

export default withRouter(HeadNav);