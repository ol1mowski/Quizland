import { Link } from "react-router-dom";

import style from './ErrorPage.module.css';

const ErrorPage = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.wrapper}>

                <h1 className={style.h1}>
                    404 Page no Found
                </h1>
                <Link className={style.a} to={'/'}>
                    Go To Home
                </Link>
                </div>

            </div>
        </>
    )
}

export default ErrorPage;