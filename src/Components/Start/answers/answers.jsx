// Answers.js
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './answer.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../../../store/counterState';

const Answers = (props) => {
  // local state 
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAnswers, setCurrentAnswers] = useState('');

  // refs
  const button = useRef(null);


  const navigate = useNavigate()


  const counter = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  useEffect(() => {
    const indexIncrement = () => {
      if (currentIndex === 8) {
        button.current.innerText = 'Finish';
      }
      if (currentIndex === 9) {
        navigate('/summary');
      }
      else if (currentIndex <= 9) {
        setCurrentIndex((prev) => prev + 1);
      }
      const radioInputs = document.querySelectorAll('.form-check input[type="radio"]');

      // Odznacz wszystkie zaznaczone inputy
      radioInputs.forEach((input) => {
        input.checked = false;
      });
    };

    const buttonElement = button.current;

    if (buttonElement) {
      buttonElement.addEventListener('click', indexIncrement);
    }

    return () => {
      if (buttonElement) {
        buttonElement.removeEventListener('click', indexIncrement);
      }
    };
  }, [currentIndex, button, navigate, setCurrentIndex]);



  useEffect(() => {
    const response = props.resp;
    if (response && response.length > 0 && response[0].category) {
      setCurrentCategory(response[0].category);
      console.log(response);
      setCurrentQuestion(response[currentIndex].question);
      const tab = []
      tab.push(response[currentIndex].correct_answer)
      const other = response[currentIndex].incorrect_answers;
      tab.push(...other);
      setCurrentAnswers(tab);



    } else {
      console.log('Category does not exist.');
    }
  }, [props.resp, currentQuestion, currentIndex]);





  function getRandomUniqueIndices(count, max) {
    if (count > max) {
      throw new Error('Count cannot be greater than max');
    }

    const uniqueIndices = new Set();

    while (uniqueIndices.size < count) {
      const newIndex = Math.floor(Math.random() * max);
      uniqueIndices.add(newIndex);
    }

    return Array.from(uniqueIndices);
  }

  const uniqueRandomIndices = getRandomUniqueIndices(4, 4);



  let answerA = currentAnswers[uniqueRandomIndices[0]]
  let answerB = currentAnswers[uniqueRandomIndices[1]]
  let answerC = currentAnswers[uniqueRandomIndices[2]]
  let answerD = currentAnswers[uniqueRandomIndices[3]]


  const inpSelect = (e) => {
    console.log(e.target.value);
  }


  return (
    <>
      <h1>Category: {currentCategory}</h1>
      <div className={style.question}>
        {currentQuestion}
      </div>
      {answerA !== undefined ? <div className={style.answers}>
        <div className="form-check">
          <input
            onChange={inpSelect}
            value={answerA}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioDefault`}
          />
          <label className="form-check-label" htmlFor={`flexRadioDefault`}>
            {answerA}
          </label>
        </div>
      </div> : null}
      {answerB !== undefined ? <div className={style.answers}>
        <div className="form-check">
          <input
            onChange={inpSelect}
            value={answerB}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioDefault`}
          />
          <label className="form-check-label" htmlFor={`flexRadioDefault`}>
            {answerB}
          </label>
        </div>
      </div> : null}
      {answerC !== undefined ? <div className={style.answers}>
        <div className="form-check">
          <input
            onChange={inpSelect}
            value={answerC}
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id={`flexRadioDefault`}
          />
          <label className="form-check-label" htmlFor={`flexRadioDefault`}>
            {answerC}
          </label>
        </div>
      </div> : null}
      {answerD !== undefined ?
        <div className={style.answers}>
          <div className="form-check">
            <input
              onChange={inpSelect}
              value={answerD}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`flexRadioDefault`}
            />
            <label className="form-check-label" htmlFor={`flexRadioDefault`}>
              {answerD}
            </label>
          </div>
        </div> : null}
      <button
        style={{
          marginTop: '2vw',
        }}
        type="button"
        className="btn btn-primary"
        ref={button}
      >
        Submit
      </button>
    </>
  );
};

export default Answers;
