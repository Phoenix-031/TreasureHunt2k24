
import styles from './loginstyle.module.scss'
import { useNavigate } from 'react-router-dom'
import infinitio from '../../assets/infinito.png'
import { useState } from 'react'
import { LOGIN } from '../../functions/team.function'

const LoginPage = () => {
  const navigate = useNavigate()

  const [login, setLogin] = useState({
    teamId: '',
    espektroId: ''
  })
  const [loading, setLoading] = useState(false)

  const handleLogin = async() => {
    if(login.teamId === '' || login.espektroId === '') {
      return alert('Please fill all the details')
    }else {
      setLoading(true);
      const res = await LOGIN(login);
      console.log(res);
      setLoading(false);
      navigate('/eventPage')
    }
  }
  
  return (
    <div className={styles.create__main__container}>
      <div>
        <p>Welcome to Labyrinth</p>
        <p>Organised By</p>
        <div className={styles.image__container}>
          <img src={infinitio} alt="infinitio logo" />
        </div>
        <div className={styles.create__main__container__inputs}>        
          <input type="text" placeholder='Team ID' 
          value={login.teamId}
          onChange={(e) => setLogin({...login, teamId: e.target.value})
          }
          />
          <input type="text" placeholder='Espektro Id' 
          value={login.espektroId}
          onChange={(e) => setLogin({...login, espektroId: e.target.value})
          }
          />
          {
            loading ? <button>Loading...</button> : <button onClick={handleLogin}>Login</button>
          }
        </div>
      </div>
    </div>
  )
}

export default LoginPage