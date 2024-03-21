// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import styles from './spot_5.module.scss'
import { FETCHBYID } from '../../functions/question.function';

const Spot1 = () => {

    const [question, setQuestion] = useState('')
    const [quesimg, setQuestionImg] = useState('')
    const [teamName, setTeamName] = useState('')
    const [ansCode, setAnsCode] = useState('')
    
    useEffect(() => {
        const fetchQues = async()=> {
            const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
            const res = await FETCHBYID(localData.spotArray[4])
            // console.log(res)
            setQuestion(res.data.result.question)
            setQuestionImg(res.data.result.questionImage)
            setTeamName(localData.teamName)
        }

        fetchQues()
    },[])

    const handleSubmit = () => {
        // if(ansCode.toLowerCase() === JSON.parse(localStorage.getItem('teamInfo') as string).)
        // navigate('/2')
        console.log("final 6th spot")
    }

    return (
        <div className={styles.create__main__container}>
            <div>
                <div className={styles.team__name}>
                <p>Team Name :</p>
                <p className={styles.name}>{teamName}</p>
                </div>
                <div className={styles.question__container}>
                    <p>Question text: {question}</p>

                    {
                        quesimg && 
                        <div className={styles.image__container}>
                            <img src={quesimg} alt="image" />
                        </div>
                    }
                </div>
                <div className={styles.answer__container}>
                    <input type="text" placeholder="Enter your answer-code" value={ansCode} 
                    onChange={(e) => setAnsCode(e.target.value)}
                     />
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Spot1