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
  const [odp, setOdp] = useState('');
  const [correctOdp, setCorrectOdp] = useState([]);

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
        window.history.pushState(null, '', '/Quizland/summary');
    
        // Wymuszenie ponownego renderowania komponentu
        // Jeśli korzystasz z funkcji komponentu funkcyjnego
        window.dispatchEvent(new Event('popstate'));
      }
      else if (currentIndex < props.resp.length - 1) { // Dodane sprawdzenie, czy currentIndex jest mniejszy niż długość tablicy props.resp
        setCurrentIndex((prev) => prev + 1);
      }
      const radioInputs = document.querySelectorAll('.form-check input[type="radio"]');

      // Odznacz wszystkie zaznaczone inputy
      radioInputs.forEach((input) => {
        input.checked = false;
      });

      if (odp === correctOdp) {
        dispatch(increment());
      }

      console.log(counter);

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
  }, [currentIndex, button, navigate, setCurrentIndex, odp]);



  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');

  useEffect(() => {
    const response = props.resp;
    if (response && response.length > 0 && response[0].category) {
      setCurrentCategory(response[0].category);
      setCurrentQuestion(response[currentIndex].question);
      setCorrectOdp(response[currentIndex].correct_answer)
      const tab = []
      tab.push(response[currentIndex].correct_answer)
      const other = response[currentIndex].incorrect_answers;
      tab.push(...other);
      setCurrentAnswers(tab);

      // Przy każdej zmianie odpowiedzi, generuj nowe unikalne indeksy
      const uniqueRandomIndices = getRandomUniqueIndices(4, 4);

      // Przypisz odpowiedzi do odpowiednich zmiennych za pomocą setState
      setAnswerA(tab[uniqueRandomIndices[0]]);
      setAnswerB(tab[uniqueRandomIndices[1]]);
      setAnswerC(tab[uniqueRandomIndices[2]]);
      setAnswerD(tab[uniqueRandomIndices[3]]);
    } else {
      console.log('Category does not exist.');
    }
  }, [props.resp, currentQuestion, currentIndex, correctOdp]);

  console.log('poprawna: ', correctOdp);




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


  const inpSelect = (e) => {
    setOdp(e.target.value)
  }



  return (
    <>
      <h1>Category: {currentCategory}</h1>
      <h2 className={style.question}>
        {currentQuestion}
      </h2>
      <h3>
        Question number: { currentIndex+1 } / 10
      </h3>
      <div className={style.answerContainer}>
        {answerA !== undefined ? <div className={style.answers}>
          <div className="form-check">
            <input
              onChange={inpSelect}
              value={answerA}
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id={`flexRadioDefault${answerA}`} // unikalny identyfikator dla każdego inputa

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
              id={`flexRadioDefault${answerB}`} // unikalny identyfikator dla każdego inputa

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
              id={`flexRadioDefault${answerC}`} // unikalny identyfikator dla każdego inputa

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
                id={`flexRadioDefault${answerD}`} // unikalny identyfikator dla każdego inputa

              />
              <label className="form-check-label" htmlFor={`flexRadioDefault`}>
                {answerD}
              </label>
            </div>
          </div> : null}
        <button
        id={style.btn}
          type="button"
          className="btn btn-primary"
          ref={button}
        >
          Submit
        </button>
      </div>

    </>
  );
};

export default Answers;
