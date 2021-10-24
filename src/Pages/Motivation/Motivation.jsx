import { withRouter } from 'react-router';
import './Motivation.css';

const Motivation = (props) => {
    const userName = localStorage.getItem('userName');
    return (
        <div className="all-motivation">
            <h1>Welcome to Motivation page</h1>
            <p style={{ color: 'gray', fontSize: '30px' }}>Go back to</p>
            <button onClick={() => {
                props.history.push({
                    pathname: `/user/${userName}`,
                    state: { data: { username: userName } }
                })
            }}
            >
                Dashboard
            </button>
        </div>
    )
}

export default withRouter(Motivation);
