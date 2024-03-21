// import { useEffect, useState } from 'react'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

import { useEffect, useState } from 'react';


const EventPage = () => {
    const navigate = useNavigate();

    const [startWord, setStartWord] = useState('')
    const [teamName, setTeamName] = useState('')

    const handleStartHunt = () => {
        if(startWord.toLocaleLowerCase() === 'espektro'){
            navigate('/djbvhjdfv')
        }else {
            alert('Wrong Code! Please try again.')
        }
    }

    useEffect(()=> {
        const localdata = JSON.parse(localStorage.getItem('teamInfo') as string);

        setTeamName(localdata.teamName)

    }, [])
 
    return (
        <>
        <div className={styles.create__main__container}>
            <div>
                <div className={styles.team__name}>
                <p>Team Name :</p>
                <p className={styles.name}>{teamName}</p>
                </div>
                <div className={styles.startEvent}>
                    <p>Please Wait for a few Moments!</p>
                    <p>Enter the code Given by our co-ordinators to start the <b>Hunt</b>.</p>
                </div>
                <div className={styles.answer__container}>
                    <input type="text" placeholder="Enter Code" value={startWord} onChange={(e) => setStartWord(e.target.value) }/>
                    <button onClick={handleStartHunt}>Start Hunt</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default EventPage