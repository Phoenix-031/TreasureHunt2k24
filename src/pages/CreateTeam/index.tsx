/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import { useState } from 'react'

const CreateTeamPage = () => {

  const BASE_URL = "http://localhost:7000/api/v1"
  
  const navigate = useNavigate();
  
  const [teamData, setTeamData] = useState({
    teamName : '',
    leader : '',
    leaderEmail : '',
    password : '',
    confirmPassword : ''
  })

  const handleInputChange = (e: any, field :string) => {
    const value = e.target.value;
    setTeamData({
      ...teamData,
      [field]: value
    });
  };
  

  const handleProceed= () => {

    const postTeamData = async() => {
      const data = await axios.get(BASE_URL, 
        {
          headers:{
              'Content-type': 'application/json'
          },
        }
        )

        console.log(data)
    }
    
    if(!teamData.leader || !teamData.leaderEmail || !teamData.teamName)
      alert('All Fields are required to move forward');
    else if(teamData.password !== teamData.confirmPassword)
      alert('Passwords do not match')
    else{
      postTeamData()
      navigate('/addMembers')
    }
  } 
  
  return (
    <div className={styles.create__main__container}>
        <div>
            <div className={styles.team__ID}>
                <p>Your Team Id :</p>
                {/* <p>{v4().split('-')[0]}</p> */}
            </div>
            
            <p>Enter your details</p>
            <div className={styles.create__main__container__inputs}>
              <input type="text" value={teamData.teamName} 
              onChange={(e) => handleInputChange(e, 'teamName')} 
              placeholder='Team Name' />
              <input type="text" value={teamData.leader}
              onChange={(e) => handleInputChange(e, 'leader')}
              placeholder='Team Leader Name' />
              <input type="email" value={teamData.leaderEmail}
              onChange={(e) => handleInputChange(e, 'leaderEmail')}
              placeholder='Team Leader Email' />
              <input type="password" value={teamData.password} 
              onChange={(e) => handleInputChange(e, 'password')}
              placeholder='Create password' />
              <input type="password" value={teamData.confirmPassword}
              onChange={(e) => handleInputChange(e, 'confirmPassword')}
              placeholder='Confirm password' />
              <button onClick={() => handleProceed()}>Proceed</button>
            </div>
        </div>
    </div>
  )
}

export default CreateTeamPage