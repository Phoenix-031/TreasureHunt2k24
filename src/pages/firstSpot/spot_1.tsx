/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import styles from './spot_1.module.scss'
import { useNavigate } from 'react-router-dom'
import { FETCHBYID, VERIFYANS } from '../../functions/question.function';
import { MutatingDots } from 'react-loader-spinner';
import { POSTDISQ, POSTHASH } from '../../functions/team.function';

const Spot1 = () => {
    const navigate = useNavigate();

    const [question, setQuestion] = useState('')
    const [quesimg, setQuestionImg] = useState('')
    const [teamName, setTeamName] = useState('')
    const [ansCode, setAnsCode] = useState('')
    const [loadingans, setLoadingAns] = useState(false)
    const [lives,setLives] = useState(0)

    useEffect(() => {

        const handleLives = async() => {
            if(lives < 0){
                const res = await POSTDISQ(JSON.parse(localStorage.getItem('teamInfo') as string).teamId);
                console.log(res)
                localStorage.removeItem('teamInfo');
                localStorage.removeItem('teamId');
                navigate('/disqualified')
            }
        }
        handleLives()
    },[lives])
    
    useEffect(() => {
        const fetchQues = async()=> {
            const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
            const res = await FETCHBYID(localData.spotArray[0])
            // console.log(res)
            setQuestion(res.data.result.question)
            setQuestionImg(res.data.result.questionImage)
            setTeamName(localData.teamName)
            setLives(localData.lives)
        }

        fetchQues()
    },[])

    const handleSubmit = async() => {
        setLoadingAns(true)
        const res = await VERIFYANS(JSON.parse(localStorage.getItem('teamInfo') as string).spotArray[0], ansCode);
        if(res.data.result) {
            const dt = await POSTHASH({ teamId: JSON.parse(localStorage.getItem('teamInfo') as string).teamId, answerHash : ansCode });
            console.log(dt)
            navigate('/akjfvbhjq')
        }else {
            setLoadingAns(false);
            alert('OOps!! Wrong answer, you lost a life')
            setLives(lives - 1)
            setAnsCode('')
            setLoadingAns(false)
            localStorage.setItem('teamInfo', JSON.stringify({...JSON.parse(localStorage.getItem('teamInfo') as string), lives: lives - 1}))
        }
        setLoadingAns(false)
    }

    return (
        <div className={styles.create__main__container}>
            <div>
                <div className={styles.lives__container}>
                    <p>Lives : {lives}</p>
                </div>
                <div className={styles.team__name}>
                    <div>
                        <p>Team Name :</p>
                        <p className={styles.name}>{teamName}</p>
                    </div>
                </div>
                <div className={styles.question__container}>
                    <p>1. {question}</p>

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
                        loadingans ?                  <div className={styles.loader__styles}>
                    <MutatingDots
                      visible={true}
                      height="100"
                      width="100"
                      color="#4fa94d"
                      secondaryColor="#4fa94d"
                      radius="12.5"
                      ariaLabel="mutating-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      />
                  </div> : <button onClick={handleSubmit}>Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Spot1