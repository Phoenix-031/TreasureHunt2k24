
import styles from './app.module.scss'
import infinitio from './assets/infinito.png'

import { useNavigate } from 'react-router-dom'

const App = () => {


  const navigate = useNavigate()
  
  return (
    // <div className={styles.app__wrapper}>
    <div className={styles.app__main__container}>
      <div>
          <div>
            <img src={infinitio} alt="infinitio logo" />
          </div>
        
            <div>
              <button onClick={() => navigate('/createTeam')}>Create Team</button>
              <button onClick={()=> navigate('/login')}>Login</button>
            </div>
      </div>
    </div>
    // </div>
  )
}

export default App