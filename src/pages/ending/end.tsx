import { useEffect, useState } from 'react'
import styles from './style.module.scss'
// import { useNavigate } from 'react-router-dom'
// import { FETCHBYID, VERIFYANS } from '../../functions/question.function';

const Spot1 = () => {
    // const navigate = useNavigate();

    const [teamName, setTeamName] = useState('')
    const [ansCode, setAnsCode] = useState('')
    
    useEffect(() => {
        const fetchQues = async()=> {
            const localData = JSON.parse(localStorage.getItem('teamInfo') as string)
            // console.log(res)
            setTeamName(localData.teamName)
        }

        fetchQues()
    },[])


    return (
        <div className={styles.create__main__container}>
            <div>
                <div className={styles.team__name}>
                <p>Team Name :</p>
                <p className={styles.name}>{teamName}</p>
                </div>
                <div className={styles.treasure__container}>
                    <p><b>Congratulations</b></p>
                    <p><b>You have successfully completed the Hunt!</b></p>
                    <p>Please contact our co-ordinators for your prize!</p>
                </div>
            </div>
        </div>
    )
}

export default Spot1