import { useEffect, useRef, useState } from 'react';
import style from './answer.module.css';
import Answer from './Answer/Answer';
import { redirect } from 'react-router-dom';

const Answers = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [currentAnswers, setCurrentAnswers] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const button = useRef(null);


  useEffect(() => {
    const response = props.resp;

    if (response && response.length > 0) {
      // Check if response[0].category exists before accessing it
      if (response[0].category) {
        console.log('Category exists:', response[0].category);
        setCurrentQuestion(response[currentIndex].question)
        setCurrentCategory(response[currentIndex].category)
        const tab = []
        tab.push(response[currentIndex].correct_answer)
        const otherAnswers = response[currentIndex].incorrect_answers;
        tab.push(...otherAnswers)
        setCurrentAnswers(tab)
      } else {
        console.log('Category does not exist.');
      }

      console.log(response);
    }
  }, [props.resp, currentIndex]); // Add props.resp as a dependency for the useEffect

  const indexIncrement = () => {
    if (currentIndex == 9) {
      button.current.innerText = 'Finish';
      redirect('/')
    }
    else if (currentIndex <= 9) {
      setCurrentIndex((prev) => prev + 1)
    } else {
      setCurrentIndex(9);
    }
  };


  const data = [
    {
      id: 1,
      answer: currentAnswers[0]
    },
    {
      id: 2,
      answer: currentAnswers[1]
    },
    {
      id: 3,
      answer: currentAnswers[2]
    },
    {
      id: 4,
      answer: currentAnswers[3]
    },
  ]


  return (
    <>
      <h1>{currentCategory}</h1>
      <div className={style.question}>
        {currentQuestion}
      </div>
      <div className={style.container}>
        {data.map((ans) => <Answer answer={ans.answer} key={ans.id} />)}
        <button
          onClick={indexIncrement}
          ref={button}
          style={{
            marginTop: '2vw',
          }}
          type="button"
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default Answers;

