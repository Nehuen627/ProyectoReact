import { Link } from 'react-router-dom';
import "../App.css"
const ButtonLink = ({ to, children }) => {
    return (
        <div>
            <Link className='btnlnk' to={to}><button>{children}</button></Link>
        </div>
    )
}

export default ButtonLink