import { Link } from 'react-router-dom';
import style from './home.module.css';

const Home = () => {
    return (
        <>
            <div className={style.container}>
                <h1 className={style.h1}>
                    Welcom in my Quiz aplication !
                </h1>
                <Link className={style.rest} to={'/game'}>
                    <button className={style.button}>
                        Let's start
                    </button>

                </Link>
            </div>
        </>
    )
}

export default Home;