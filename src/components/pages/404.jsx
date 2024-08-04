import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";
import './404.scss'

const Page404 = () => {
    return (
        <div>
            <ErrorMessage/>
            <p className="p404">Page doesn't exist</p>
            <p className="p404">
                Plese, back to
                <Link className="react-link" to='/'> main page</Link>
            </p>
        </div>
    )
} 

export default Page404