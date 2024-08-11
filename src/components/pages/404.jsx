import { Helmet } from "react-helmet";
import {Link} from "react-router-dom";

import ErrorMessage from "../errorMessage/ErrorMessage";
import './404.scss'

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta 
                    name="description"
                    content="This page is not found"
                />
                <title>This page is not found</title>
            </Helmet>
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