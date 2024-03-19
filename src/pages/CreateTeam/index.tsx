
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import {v4} from 'uuid'

const CreateTeamPage = () => {
  const navigate = useNavigate();
  
  return (
    <div className={styles.create__main__container}>
        <div>
            <div className={styles.team__ID}>
              <p>Your Team Id :</p>
              <p>{v4().split('-')[0]}</p>
            </div>
            
            <p>Enter your details</p>
            <div className={styles.create__main__container__inputs}>
              <input type="text" placeholder='Team Name' />
              <input type="text" placeholder='Team Leader Name' />
              <input type="email" placeholder='Team Leader Email' />
              <input type="password" placeholder='Create password' />
              <input type="password" placeholder='Confirm password' />
              <button onClick={() => navigate('/addMembers')}>Proceed</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTeamPage