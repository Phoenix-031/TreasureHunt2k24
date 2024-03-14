
import styles from './style.module.scss'

import { uuid } from 'uuidv4'

const CreateTeamPage = () => {
  return (
    <div className={styles.create__main__container}>
        <div>

            <div>
                <p>Your Team Id</p>
                {/* <p>{uuid()}</p> */}
            </div>
            
            <p>Create Team</p>
            <input type="text" placeholder='Team Name' />
            <input type="text" placeholder='Leader Name' />
            <input type="email" placeholder='Leader Email' />

            <button>Create</button>
        </div>
    </div>
  )
}

export default CreateTeamPage