import { useRef } from 'react';
import style from '../answer.module.css';

const Answer = props => {

    const inp = useRef(null);
    

    const answers = props.answer;

    

    return (
        <>
            {answers && <div className={style.answers}>
                <div className="form-check">
                    <input
                    ref={inp}
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id={`flexRadioDefault`}
                    />
                    <label className="form-check-label" htmlFor={`flexRadioDefault`}>
                        {answers}
                    </label>
                </div>
            </div>}
            
        </>
    )
}

export default Answer;