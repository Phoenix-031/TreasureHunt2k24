
import styles from './loginstyle.module.scss'
import { useNavigate } from 'react-router-dom'
import infinitio from '../../assets/infinito.png'
import { useState } from 'react'
import { LOGIN } from '../../functions/team.function'
import { MutatingDots } from 'react-loader-spinner'

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
      if(res.data.result.message !== 'Invalid credentials'){
        localStorage.setItem('teamInfo', JSON.stringify(res.data.result));
        navigate('/eventPage')
      } else {
        alert("Invalid Credentials! Please try again.")
        setLogin({
          teamId: '',
          espektroId: ''
        })
      }
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
            loading ?                  <div className={styles.loader__styles}>
                    <MutatingDots
                      visible={true}
                      height="100"
                      width="100"
                      color="#4fa94d"
                      secondaryColor="#4fa94d"
                      radius="12.5"
                      ariaLabel="mutating-dots-loading"
                      wrapperStyle={{}}
                      wrapperClass=""
                      />
                  </div>: <button onClick={handleLogin}>Login</button>
          }
        </div>
      </div>
    </div>
  )
}

export default LoginPage