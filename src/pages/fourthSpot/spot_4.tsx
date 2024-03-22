/* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from 'react'
import { useEffect, useState } from 'react';
import styles from './spot_4.module.scss'
import { useNavigate } from 'react-router-dom'
import { FETCHBYID, VERIFYANS } from '../../functions/question.function';
import { MutatingDots } from 'react-loader-spinner';
import { GETLIVES, POSTDISQ, POSTHASH, UPDATELIVES } from '../../functions/team.function';

const Spot4 = () => {
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
            const res = await FETCHBYID(localData.spotArray[3])
            // console.log(res)
            const reslives = await GETLIVES(JSON.parse(localStorage.getItem('teamInfo') as string).teamId)
            console.log(reslives)
            setLives(reslives.data.result)
            setQuestion(res.data.result.question)
            setQuestionImg(res.data.result.questionImage)
            setTeamName(localData.teamName)
            // setLives(localData.lives)
        }

        fetchQues()
    },[])

    const handleSubmit = async() => {
        setLoadingAns(true)
        const res = await VERIFYANS(JSON.parse(localStorage.getItem('teamInfo') as string).spotArray[3], ansCode);
        if(res.data.result) {
            const dt = await POSTHASH({ teamId: JSON.parse(localStorage.getItem('teamInfo') as string).teamId, answerHash : ansCode });
            console.log(dt)
            navigate('/dskjvnds')
        }else {
            setLoadingAns(false);
            alert('Oops!! Wrong answer, you just lost a life.')
            const reslives = await UPDATELIVES({teamId : JSON.parse(localStorage.getItem('teamInfo') as string).teamId , lives : lives-1 })
            console.log(reslives)
            setLives(reslives.data.result.lives)
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
                    <p>4. {question}</p>

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
                  </div>: <button onClick={handleSubmit}>Submit</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default Spot4