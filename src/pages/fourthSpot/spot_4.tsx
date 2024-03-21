// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import styles from './spot_4.module.scss'
import { useNavigate } from 'react-router-dom'
import { FETCHBYID, VERIFYANS } from '../../functions/question.function';

const Spot1 = () => {
    const navigate = useNavigate();

    const [question, setQuestion] = useState('')
    const [quesimg, setQuestionImg] = useState('')
    const [teamName, setTeamName] = useState('')
    const [ansCode, setAnsCode] = useState('')
    const [loadingans, setLoadingAns] = useState(false)
    
    useEffect(() => {
        const fetchQues = async()=> {
            const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
            const res = await FETCHBYID(localData.spotArray[3])
            // console.log(res)
            setQuestion(res.data.result.question)
            setQuestionImg(res.data.result.questionImage)
            setTeamName(localData.teamName)
        }

        fetchQues()
    },[])

    const handleSubmit = async() => {
        setLoadingAns(true)
        const res = await VERIFYANS(JSON.parse(localStorage.getItem('teamInfo') as string).spotArray[4], ansCode);
        if(res.data.result) {
            navigate('/5')
        }else {
            alert('Wrong answer')
        }
        setLoadingAns(false)
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
                                        {
                        loadingans ? <div>Loading...</div> : <button onClick={handleSubmit}>Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Spot1