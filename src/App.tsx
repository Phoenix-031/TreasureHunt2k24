import { useState } from 'react'

import styles from './app.module.scss'
import infinitio from './assets/infinito.png'

import { useNavigate } from 'react-router-dom'

const App = () => {

  const [verified, setVerified] = useState(false)

  const navigate = useNavigate()
  
  return (
    // <div className={styles.app__wrapper}>
    <div className={styles.app__main__container}>
      <div>
        <p>Espektro Id</p>
        <input type="text" placeholder='EspektroId' />
        {
          !verified ? <button onClick={() => setVerified((state) => !state)}>Verify</button> : (
            <div>
              <button onClick={() => navigate('/createTeam')}>Create Team</button>
              <button onClick={()=> navigate('/login')}>Login</button>
            </div>
          )
        }
      </div>

      <div>
        <div>
          <img src={infinitio} alt="infinitio logo" />
        </div>
      </div>
    </div>
    // </div>
  )
}

export default App