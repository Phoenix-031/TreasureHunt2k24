/* eslint-disable react-hooks/exhaustive-deps */

import styles from './loginstyle.module.scss'
import { useNavigate } from 'react-router-dom'
import infinitio from '../../assets/infinito.png'
import { useEffect, useState } from 'react'
import { LOGIN } from '../../functions/team.function'
import { MutatingDots } from 'react-loader-spinner'
import {z} from 'zod'

// import { toast } from 'react-toastify';

const LoginPage = () => {
  const navigate = useNavigate()

  const espektroIdSchema = z.string().min(11).max(11)

  const [login, setLogin] = useState({
    teamId: '',
    espektroId: ''
  })
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem('teamId') as string)

    if(localData !== null)
       setLogin({...login, teamId: localData.teamId})
  }, [])

  const handleLogin = async() => {
    if(login.teamId === '' || login.espektroId === '') {
      return alert('Please fill all the details')
    }else if(espektroIdSchema.safeParse(login.espektroId).success === false) {
      return alert('Espektro id should be 11 characters long')
    }
    else {
      setLoading(true);
      const res = await LOGIN(login);
      localStorage.setItem('teamId', JSON.stringify({teamId: login.teamId}));
      console.log(res);
      setLoading(false);
      if(res.data.result.isDisqualified) {
        navigate('/disqualified')
        return
      }
      else if(res.data.result.message !== 'Invalid credentials'){
        localStorage.setItem('teamInfo', JSON.stringify(res.data.result));
        navigate('/eventPage')
      } else if (res.data.result.message  === 'Team name already exists') {
        alert('Team name already exists')
      }
      else {
        alert("Invalid Credentials! Please try again.")
        setLogin({
          teamId: '',
          espektroId: ''
        })
      }
    }
  }

  // const notify = (message : string) =>
  //   toast(
  //     <div>
  //       <p className={styles.toast}>
  //         <span>{message}</span>
  //       </p>
  //     </div>,
  //     {
  //       type: 'info',
  //       autoClose: 35000,
  //     }
  //   );
  
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
            loading ?                 
              <div className={styles.loader__styles}>
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
              </div>
            : <button onClick={handleLogin}>Login</button>
          }
        </div>
      </div>
    </div>
  )
}

export default LoginPage