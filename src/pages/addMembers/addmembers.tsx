
import styles from './addmembers.module.scss'
import { useNavigate } from 'react-router-dom'

const AddMembers = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.create__main__container}>
        <div>
            <p>Add Member Details</p>
            <div className={styles.create__main__container__inputs}>
                <input type="text" placeholder='Member 1' />
                <input type="text" placeholder='Member 2' />
                <input type="text" placeholder='Member 3 (optional)' />
            </div>
            <button onClick={() => navigate('/login')}>Create Team</button>
        </div>
    </div>
  )
}

export default AddMembers