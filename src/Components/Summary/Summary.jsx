import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import style from './Summary.module.css';

const Summary = () => {

    const counter = useSelector((state) => state.counter.counter)

    return (
        <>
        <div className={style.container}>
           Your results: {counter} / 10
            <a className={style.a} href='/Quizland/game'>
            Let's play agin !

            </a>
        </div>
        </>
    )
}

export default Summary;