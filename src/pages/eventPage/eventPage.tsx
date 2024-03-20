// import { useEffect, useState } from 'react'
import styles from './eventPage.module.scss'
import { useNavigate } from 'react-router-dom'

import { useState } from 'react';

const EventPage = () => {
    const navigate = useNavigate();

    const [startWord, setStartWord] = useState('')

    const handleStartHunt = () => {
        if(startWord.toLocaleLowerCase() === 'espektro'){
            navigate('/1')
        }else {
            alert('Wrong Code! Please try again.')
        }
    }
 
    return (
        <>
        <div className={styles.create__main__container}>
            <div>
                <div className={styles.team__name}>
                <p>Team Name :</p>
                <p className={styles.name}>Gandu Choda</p>
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