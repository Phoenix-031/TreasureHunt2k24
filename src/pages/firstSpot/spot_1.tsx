// import { useEffect, useState } from 'react'
import styles from './spot_1.module.scss'
import { useNavigate } from 'react-router-dom'

const Spot1 = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.create__main__container}>
            <div>
                <div className={styles.team__name}>
                <p>Team Name :</p>
                <p className={styles.name}>Gandu Choda</p>
                </div>
                <div className={styles.lives__container}>
                    <p>Lives: </p>
                    <div className={styles.heart__container}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-suit-heart-fill" viewBox="0 0 16 16"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1"/></svg>
                    </div>
                </div>
                <div className={styles.question__container}>
                    <p>Question ID</p>
                    <p>Question text: What is the capital of India?</p>
                    <div className={styles.image__container}>
                        <img src="https://www.google.com/search?q=capital+of+india&rlz=1C1GCEU_enIN832IN832&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiT3v6Rl8jzAhXJzDgGHcHsB1QQ_AUIBygC&biw=1366&bih=657#imgrc=1Zm9F3X3v1N2DM" alt="image" />
                    </div>
                </div>
                <div className={styles.answer__container}>
                    <input type="text" placeholder="Enter your answer-code" />
                    <button onClick={() => navigate('/2')}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Spot1