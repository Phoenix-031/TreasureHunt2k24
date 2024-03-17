
import styles from './loginstyle.module.scss'
import { useNavigate } from 'react-router-dom'
import infinitio from '../../assets/infinito.png'

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.create__main__container}>
      <div>
        <p>Welcome to Labyrinth</p>
        <p>Organised By</p>
        <div className={styles.image__container}>
          <img src={infinitio} alt="infinitio logo" />
        </div>
        <div className={styles.create__main__container__inputs}>        
          <input type="text" placeholder='Team ID' />
          <input type="text" placeholder='Team Name' />
          <input type="password" placeholder='Enter password' />
          <button onClick={() => navigate('/landing')}>Start Event</button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage