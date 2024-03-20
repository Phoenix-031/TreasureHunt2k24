import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './landing.module.scss'

const CreateTeamPage = () => {
  const navigate = useNavigate();

  const [timerDays, setTimerDays] = useState<string>('00');
  const [timerHours, setTimerHours] = useState<string>('00');
  const [timerMinutes, setTimerMinutes] = useState<string>('00');
  const [timerSeconds, setTimerSeconds] = useState<string>('00');

  useEffect(() => {
    const countdownDate = new Date('March 22, 2024 16:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
    return () => clearInterval(interval);
  },[]);
  return (
    <div className={styles.create__main__container}>
        <div>  
            <p>Event yet to begin!</p>
            <div className={styles.timer__container}>
                <p>Time left :</p>
                <div className={styles.timer__box}>
                  <section>
                    <p>{timerDays}</p>
                    <p><small>Days</small></p>
                  </section>
                  <span>:</span>
                  <section>
                    <p>{timerHours}</p>
                    <p><small>Hours</small></p>
                  </section>
                  <span>:</span>
                  <section>
                    <p>{timerMinutes}</p>
                    <p><small>Minutes</small></p>
                  </section>
                  <span>:</span>
                  <section>
                    <p>{timerSeconds}</p>
                    <p><small>Seconds</small></p>
                  </section>
                </div>
            </div>
            <p>Checkout our other events.</p>
            <button onClick={() => navigate('/eventPage')}>FB page</button>
        </div>
    </div>
  )
}

export default CreateTeamPage