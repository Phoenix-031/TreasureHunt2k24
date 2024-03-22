// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import styles from './treasure.module.scss'
import { useNavigate } from 'react-router-dom'
import { FETCHBYID, VERIFYANS } from '../../functions/question.function';
import { MutatingDots } from 'react-loader-spinner';
import { POSTDISQ, POSTHASH } from '../../functions/team.function';

const Treasure = () => {
    const navigate = useNavigate();

    const [question, setQuestion] = useState('')
    const [quesimg, setQuestionImg] = useState('')
    const [teamName, setTeamName] = useState('')
    const [ansCode, setAnsCode] = useState('')
    const [loadingans, setLoadingAns] = useState(false)
    const [lives,setLives] = useState(0)
    
    useEffect(() => {
        const fetchQues = async()=> {
            const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
            const res = await FETCHBYID(localData.spotArray[5])
            // console.log(res)
            setQuestion(res.data.result.question)
            setQuestionImg(res.data.result.questionImage)
            setTeamName(localData.teamName)
            setLives(localData.lives)
        }

        fetchQues()
    },[])


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

    const handleSubmit = async() => {
        setLoadingAns(true)
        const res = await VERIFYANS(JSON.parse(localStorage.getItem('teamInfo') as string).spotArray[5], ansCode.toLowerCase());
        if(res.data.result) {
            const dt = await POSTHASH({ teamId: JSON.parse(localStorage.getItem('teamInfo') as string).teamId, answerHash: ansCode });
            console.log(dt)
            navigate('/ending')
            localStorage.removeItem('teamInfo');
            localStorage.removeItem('teamId')
        }else {
            setLoadingAns(false)
            alert('Oops!! Wrong answer, you just lost a life.')
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
                <div className={styles.treasure__container}>
                    <p>You are really close to the <b>"Treasure"</b></p>
                    <p>Secret Code : <b>Kukdu-ku</b></p>
                </div>
                <p>Here is your final question</p>
                <div className={styles.question__container}>
                    <p>6. {question}</p>

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

export default Treasure