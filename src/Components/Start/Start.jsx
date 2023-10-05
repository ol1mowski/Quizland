import { useEffect, useState } from 'react';
import style from './start.module.css';
import { useSelector } from 'react-redux';
import Answers from './answers/answers';



const Start = () => {

    const url = useSelector((state) => state.url.url)

    const [response, setResponse] = useState([])
    useEffect(() => {
        fetch(url).then((res) => res.json()).then((res) => {

            setResponse(res.results)

            console.log(response);



        }).catch((err) => console.log(err));
    }, [url])

    // setquestion(res.results.question)
    // setCategory(res.results.category)
    // const aws = [];
    // aws.push(res.results.correct_answer)
    // const tab = res.results.incorrect_answers
    // tab.forEach(element => {
    //     aws.push(element)
    // });
    // setAnswers(aws)

    const data = [
        {
            id: 1,
            resp: response
        }
    ]


    return (
        <>
            <div className={style.container}>
                {data.map((ans) => <Answers key={data.id} resp={ans.resp} />)}
            </div>

        </>
    )
}

export default Start;