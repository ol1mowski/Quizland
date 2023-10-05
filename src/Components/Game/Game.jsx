import { useDispatch, useSelector } from 'react-redux';
import style from './game.module.css';

import React, { useEffect, useRef, useState } from 'react';
import { updateUrl } from '../../store';
import { Link } from 'react-router-dom';

const Game = () => {

    const category = useRef(null);
    const level = useRef(null);
    const type = useRef(null);
    const button = useRef(null);

    const [link, setLink] = useState('');

    const dispatch = useDispatch();

    const url = useSelector((state) => state.url.url)

    useEffect(() => {

        const paramsHandler = () => {
            const l = level.current.value;
            const c = category.current.value;
            const t = type.current.value;

            dispatch(updateUrl(`https://opentdb.com/api.php?amount=10&category=${c}&difficulty=${l}&type=${t}`))
            setLink(`https://opentdb.com/api.php?amount=10&category=${c}&difficulty=${l}&type=${t}`)



            // fetch(`https://opentdb.com/api.php?amount=10&category=${c}&difficulty=${l}&type=${t}`).then((resp) => resp.json()).then((resp) => console.log(resp));

        }

        button.current.addEventListener('click', paramsHandler);


    }, [button, dispatch, url])


    return (
        <>
            <div className={style.container}>
                <h2>Select category</h2>
                <div className={style.containerForm}>
                    <select defaultValue='18' ref={category} className="form-select">
                        <option value='23'>History</option>
                        <option value="27">Animal</option>
                        <option value="21">Sports</option>
                        <option value="18">Computers</option>
                    </select>
                </div>
                <h2>Select dificulty</h2>
                <div className={style.containerForm}>
                    <select defaultValue='easy' ref={level} className="form-select">
                        <option value='easy'>Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">hard</option>
                    </select>
                </div>
                <h2>Select type</h2>
                <div className={style.containerForm}>
                    <select defaultValue='' ref={type} className="form-select">
                        <option value=''>any type</option>
                        <option value="multiple">Multiple choice</option>
                        <option value="boolean">True / false</option>
                    </select>
                </div>

                <Link to={'/start'}>
                    <button className={style.button} ref={button}>Start</button>
                </Link>
            </div>
        </>
    );
};

export default Game;
