import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
        <h1>
            404 Page no Found
        </h1>
        <Link to={'/'}>
            Go To Home
        </Link>
        </>
    )
}

export default ErrorPage;